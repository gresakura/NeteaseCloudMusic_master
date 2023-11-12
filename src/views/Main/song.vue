<script setup>
import { useSongStore } from "@/stores/song";

//精品歌单分类查询条件
const queryInfo = ref({
  cat: '全部',
  limit: 24,
  offset: 0,
})

//精品歌单的总数
const goodMusicListTotal = ref(0)

const SongStore = useSongStore()
/**
 *
 **/
const changeMusicListCat = () => {

}
/**
 *
 **/
const toSongListPage = () => {

}
/**
 *
 **/
const handleCurrentChange = () => {

}
</script>

<template>
  <el-container style="padding: 20px">
    <el-header style="display: flex;height: 60px;">
      <p style="display: flex;align-items: center!important;">
        热门标签:
        <span id="cats" v-for="(item,index) in SongStore.HotMusicList" :class="'cat'+index" @click="changeMusicListCat(item.name,index)"
              style="margin-left: 25px;cursor: pointer;">{{item.name}}</span>
      </p>
    </el-header>
    <el-main>

      <el-row :gutter="10">

        <el-col :span="4" v-for="(item,index) in SongStore.GoodMusicList" style="margin-top: 20px;position:relative;"
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


          <h1 @click="toSongListPage(item.id)" style="cursor:pointer;width: 180px;height: 25px;overflow: hidden;white-space: nowrap;text-overflow: ellipsis" :title="item.name">{{item.name}}</h1>
        </el-col>
      </el-row>
      <!--分页-->
      <el-pagination style="padding-top: 25px"
          layout="prev, pager, next"  :page-size="queryInfo.limit"
          :total="SongStore.goodMusicListTotal" @current-change="handleCurrentChange">
      </el-pagination>

    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
[class*=el-col-] {
  display: inline-block;
  float: none;
}

h1 {
  font-weight: 500;
}

#cats:hover {
  color: red
}

/*被点击的分类标签类名变成这个*/
.activeCat{
  color: red;
}

.el-pagination {
  --el-pagination-bg-color: none
}

</style>