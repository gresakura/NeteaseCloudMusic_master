<script setup>
import { useTheChartsStore } from '@/stores/theCharts'
const theChartsStore = useTheChartsStore()

/**
 *
 **/
const toSongListPage = () => {

}
/**
 *
 **/
const playMusicList = () =>{

}
</script>

<template>
  <div style="margin-bottom: 55px;">
    <!--官方榜单信息渲染-->
    <el-row style="border-bottom: 2px solid rgb(230,230,230)">
      <p style="margin-bottom: 10px;font-size: 22px;">官方榜</p>
    </el-row>

    <el-row style="margin-top: 25px;">
      <el-col :span="6" :offset="item === 1 || item===4 ? 2 : 1" v-for="item in 4" style="margin-top: 25px;">
        <el-image :src="theChartsStore.musicRankList[item-1].coverImgUrl" @click="toSongListPage(theChartsStore.musicRankList[item-1].id)"
                  style="height: 200px;border-radius: 15px;cursor:pointer;"></el-image>

        <el-table :data="theChartsStore.musicRankList[item-1].tracks" @row-dblclick="playMusicList" stripe
                  :show-header="false">
          <el-table-column type="index">
            <template #default="scope">
              <span style="color: red;font-weight: 400">{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="first"></el-table-column>
          <el-table-column>
            <template #default="scope">
              <span>{{scope.row.second}}</span>
            </template>
          </el-table-column>
        </el-table>

      </el-col>

      <el-col :span="6" :offset="1" style="margin-top: 25px;">
        <el-image :src="theChartsStore.singerRankInfo.coverUrl" style="height: 200px;border-radius: 15px;"></el-image>

        <el-table :data="theChartsStore.singerRankInfo.artists" stripe :show-header="false">
          <el-table-column>
            <template #default="scope">
              <span style="color: red;font-weight: 400">{{scope.$index+1}}</span>
            </template>
          </el-table-column>
          <el-table-column prop="first"></el-table-column>
        </el-table>

      </el-col>
    </el-row>

    <el-row style="border-bottom: 2px solid rgb(230,230,230)">
      <p style="margin-bottom: 10px;font-size: 22px;">全球榜</p>
    </el-row>

    <el-row :gutter="10">

      <el-col :span="4" v-for="(item,index) in theChartsStore.musicRankList.slice(4)" style="margin-top: 20px;position:relative;"
              :key="index">

        <!--播放量-->
        <div style="background: rgba(128,128,128,0.2);color: white;
                                    width: 96%;position:absolute;z-index: 10;">
          <div style="float:right;">
            <i class="el-icon-headset" style="margin-right: 5px;"></i>
            {{item.playCount >= 10000 ? (item.playCount/10000).toFixed(0)+'万' : item.playCount}}
          </div>

        </div>

        <div>
          <el-image :src="item.coverImgUrl" @click="toSongListPage(item.id)"
                    style="box-shadow: 0 0 2px 2px gray;border-radius: 10px;cursor: pointer">
          </el-image>
        </div>


        <h1 @click="toSongListPage(item.id)" style="cursor:pointer;">{{item.name}}</h1>

      </el-col>

    </el-row>
  </div>
</template>

<style scoped>

</style>