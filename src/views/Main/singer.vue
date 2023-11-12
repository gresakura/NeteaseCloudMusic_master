<script setup>
import { ref } from 'vue'
import { uerSingerStore } from '@/stores/singer'
const SingerStore = uerSingerStore()
//歌手类型分类标签
const singerType = ref([
  {id: -1, name: '全部'},
  {id: 1, name: '男歌手'},
  {id: 2, name: '女歌手'},
  {id: 3, name: '乐队'}
])
    //歌手语种分类
const singerLanguage = ref([
  {id: -1, name: '全部'},
  {id: 7, name: '华语'},
  {id: 96, name: '欧美'},
  {id: 8, name: '日本'},
  {id: 16, name: '韩国'},
  {id: 0, name: '其他'}
])
/**
 *
 **/
const changeMusicListTypes = () => {

}

/**
 *
 **/
const changeMusicListSex = () => {

}

/**
 *
 **/
const toSingerDetailPage = () => {

}
</script>

<template>
  <el-container style="margin-bottom: 55px;">
    <el-header style="height: 80px; display: flex; flex-direction: column; justify-content: space-around;margin-top: 15px;box-sizing: border-box">
      <p>
        语种:
        <span id="areas" v-for="(item,index) in singerLanguage" :class="index===0? 'isActive' : 'area'+item.id"
              @click="changeMusicListTypes(item.id)"
              style="margin-left: 25px;cursor: pointer;">{{item.name}}</span>
      </p>
      <p>
        分类:
        <span id="types" v-for="(item,index) in singerType"
              :class="index===0? 'isActiveByTypes' : 'type'+item.id"
              @click="changeMusicListSex(item.id)"
              style="margin-left: 25px;cursor: pointer;">{{item.name}}</span>

        <!--                @click="changeMusicListCat(item.name,index)"-->
      </p>
    </el-header>

    <el-main>

      <el-row :gutter="10">

        <el-col :span="4" v-for="(item,index) in SingerStore.singerList" style="margin-top: 20px;position:relative;"
                :key="index">

          <div>
            <el-image :src="item.img1v1Url" @click="toSingerDetailPage(item.id)"
                      style="box-shadow: 0 0 2px 2px gray;border-radius: 10px;cursor: pointer">
            </el-image>
          </div>


          <h1 @click="toSingerDetailPage(item.id)" style="cursor:pointer;">{{item.name}}</h1>

        </el-col>
      </el-row>
      <!--分页-->
      <el-pagination style="padding-top: 25px" background :total="10" :hide-on-single-page="false"
                     layout="prev,pager,next"  :page-size="SingerStore.queryInfo.limit"
                     @current-change="SingerStore.handleCurrentChange">
      </el-pagination>

    </el-main>
  </el-container>
</template>

<style scoped lang="scss">
#types:hover, #areas:hover {
  color: red;
}

.isActive, .isActiveByTypes {
  color: red;
}
</style>