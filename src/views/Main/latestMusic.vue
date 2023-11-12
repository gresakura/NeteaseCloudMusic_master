<script setup>
import { ref } from 'vue'
import { useNewMusicStore } from '@/stores/latestMusic'
const NewMusicStore = useNewMusicStore()

//标签数据
const musicType = ref([
  {type: 0, name: '全部'},
  {type: 7, name: '华语'},
  {type: 96, name: '欧美'},
  {type: 16, name: '韩国'},
  {type: 8, name: '日本'}
])

const count = ref(1)

/**
 *
 **/
const changeType = () => {

}
/**
 *
 **/
const changeNewUrl = () => {

}

</script>

<template>
  <el-row style="margin-top: 45px;">
    <p style="display: flex; align-items: center; padding-bottom: 30px">
      语种:
      <span id="types" v-for="(item,index) in musicType" @click="changeType(item.type)"
            :class="index===0 ? 'isActive' : 'types'+ item.type"
            style="margin-left: 25px;cursor: pointer;">{{item.name}}</span>
    </p>

      <!--左侧-->
      <el-col :span="20" :offset="2">
        <el-table :data="NewMusicStore.newMusicInfo" stripe v-infinite-scroll="load"
                  :show-header="false">

          <el-table-column type="index">
            <template #default="scope">
              {{scope.$index+1 >= 10 ? scope.$index+1: '0'+(scope.$index+1).toString()}}
            </template>
          </el-table-column>

          <el-table-column>
            <template #default="scope">

              <el-icon class="video-play" @click="changeNewUrl(scope.row.id)"
                       style="position: absolute;font-size: 25px;top: 35px;left:35px;z-index: 8;cursor:pointer;"
              >
                <VideoPlay />
              </el-icon>

              <el-image :src="scope.row.album.picUrl" @click="changeNewUrl(scope.row.id)"
                        style="width: 75px;height: 75px;cursor:pointer;"></el-image>

              <span style="position: absolute;top: 25px;font-size: 15px;font-weight: 500">
                                    {{scope.row.name}}
                                </span>
              <span style="position: absolute;bottom: 25px;font-size: 12px;font-weight: 500">
                                    {{scope.row.album.name}}
                                </span>
            </template>
          </el-table-column>
        </el-table>
      </el-col>

  </el-row>
</template>

<style scoped lang="scss">
.isActive {
  color: red;
}
</style>