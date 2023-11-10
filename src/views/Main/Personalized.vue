<script setup>
import axios from '@/utils/request_package'
import { ref,onMounted } from 'vue'
import { useBannerStores } from '@/stores/banner'
import { useMusicStores } from '@/stores/music'
// banners
let banners = useBannerStores()

let MusicSetOf = useMusicStores()


/**
 *
 **/
const toSongListPage = () => {

}

/**
 * 双击播放音乐
 **/
const dblclickPlayMusic = (row) => {
  this.changeUrl(row.id)
}
/**
 *
 **/
const changeUrl = (musicId) => {
  if (musicId === null) return
  this.getMusicUrl(musicId)
  this.getMusicDetail(musicId)

  //防止url未获得提交信息到父组件
  if (this.musicUrl !== '') {
    this.$emit('setParentMusicUrl', this.musicUrl, this.music)
  }
}
/**
 *
 **/
const toVideoPage = () => {

}
/**
 *
 **/
const toSingerPage = () => {

}

</script>

<template>
  <el-container style="margin-top: 25px;margin-bottom: 45px;">
    <el-header style="height: 300px">
      <!--轮播图-->
      <el-carousel autoplay arrow="hover" loop pause-on-hover :interval="5000" type="card" height="300px">
        <el-carousel-item v-for="(item,index) in banners.bannersList" :key="index">
          <img :src="item.imageUrl" alt="">
        </el-carousel-item>
      </el-carousel>
    </el-header>
    <el-main>
      <!--推荐歌单的模块渲染-->
      <el-row style="border-bottom: 2px solid rgb(230,230,230)">
        <p style="margin-bottom: 10px;font-size: 22px;">推荐歌单</p>
      </el-row>
      <el-row :gutter="10">

        <el-col :span="4" v-for="(item,index) in MusicSetOf.musicList" style="margin-top: 20px;position:relative;"
                :key="index">

          <!--播放量-->
          <div style=";color: white;width: 90%;position:absolute;top: 5px;z-index: 10;">
            <div style="float:right;">
              <i class="el-icon-headset" style="margin-right: 5px;"></i>
              {{item.playCount >= 10000 ? (item.playCount/10000).toFixed(0)+'万' : item.playCount}}
            </div>

          </div>

          <div>
            <img :src="item.coverImgUrl" @click="toSongListPage(item.id)" style="box-shadow: 0 0 2px 2px gray;border-radius: 10px;cursor: pointer" alt="">
          </div>


          <h1 @click="toSongListPage(item.id)" style="cursor:pointer;" :title="item.name">{{item.name}}</h1>

        </el-col>

      </el-row>


      <!--独家放送的模块渲染-->
      <el-row style="border-bottom: 2px solid rgb(230,230,230);padding-top: 20px">
        <p style="margin-bottom: 10px;font-size: 22px;">独家放送</p>
      </el-row>

      <el-row :gutter="40" style="margin-top: 25px;">
        <el-col :span="8" v-for="item in MusicSetOf.privateList" :key="item.id">
          <i class="el-icon-video-play"
             style="color: rgba(255,255,255,0.4);font-size: 45px;position: absolute;top: 10px;z-index: 10"></i>
          <el-image @click="toVideoPage(item.id)" :src="item.sPicUrl"
                    style="box-shadow: 0 0 2px 2px gray;border-radius: 5px;cursor:pointer;"></el-image>
          <h1 @click="toVideoPage(item.id)" style="cursor: pointer; width: 350px" :title="item.name">{{item.name}}</h1>
        </el-col>
      </el-row>


      <!--最新音乐的模块渲染-->
      <el-row style="border-bottom: 2px solid rgb(230,230,230);padding-top: 20px">
        <p style="margin-bottom: 10px;font-size: 22px;">最新音乐</p>
      </el-row>

      <!--最新音乐-->
      <el-row style="margin-top: 25px;">
        <!--左侧-->
        <el-col :span="12">
          <el-table :data="MusicSetOf.newMusicList.slice(0,5)" stripe @row-dblclick="dblclickPlayMusic"
                    :show-header="false">
            <el-table-column type="index">
              <template #default="scope">
                {{'0'+(scope.$index+1).toString()}}
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <el-icon @click="changeUrl(scope.row.id)" style="position: absolute;font-size: 25px;top: 35px;left:35px;z-index: 10;cursor:pointer;">
                  <VideoPlay />
                </el-icon>
                <el-image :src="scope.row.picUrl" @click="changeUrl(scope.row.id)"
                          style="width: 75px;height: 75px;cursor:pointer;"></el-image>
                <span style="position: absolute;top: 25px;font-size: 15px;font-weight: 500">
                                    {{scope.row.name}}
                                </span>
                <span @click="toSingerPage(scope.row)"
                      style="cursor:pointer;position: absolute;bottom: 25px;font-size: 12px;font-weight: 500">
                                    {{scope.row.song.artists[0].name}}
                                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>

        <!--右侧-->
        <el-col :span="12">
          <el-table :data="MusicSetOf.newMusicList.slice(5)" @row-dblclick="dblclickPlayMusic" stripe
                    :show-header="false">
            <el-table-column type="index">
              <template #default="scope">
                {{scope.$index >= 4 ? scope.$index+6 : '0'+(scope.$index+6).toString()}}
              </template>
            </el-table-column>
            <el-table-column>
              <template #default="scope">
                <el-image :src="scope.row.picUrl" @click="changeUrl(scope.row.id)"
                          style="width: 75px;height: 75px;cursor:pointer;"></el-image>
                <el-icon @click="changeUrl(scope.row.id)" style="position: absolute;font-size: 25px;top: 35px;left:35px;z-index: 10;cursor:pointer;">
                  <VideoPlay />
                </el-icon>

                <span style="position: absolute;top: 25px;font-size: 15px;font-weight: 500">
                                    {{scope.row.name}}
                                </span>

                <span @click="toSingerPage(scope.row)"
                      style="cursor:pointer;position: absolute;bottom: 25px;font-size: 12px;font-weight: 500">
                                    {{scope.row.song.artists[0].name}}
                                </span>
              </template>
            </el-table-column>
          </el-table>
        </el-col>
      </el-row>

    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
[class*=el-col-] {
  display: inline-block;
  float: none;
}

h1 {
  width: 200px;
  height: 30px;
  padding: 10px;
  font-weight: 500;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}

span {
  margin-left: 20px;
}
</style>