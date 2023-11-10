<script setup>
import { ref } from 'vue'
//播放音乐的链接
const musicUrl = ref('')
//当前音乐详情对象
const music = ref({
  name,
  al: {
    picUrl: ''
  },
  ar: [
    {
      name: ''
    }
  ]
})
//当前音乐的进度条
const musicDuration = ref(0)
//总进度条
const totalDuration = ref(0)
//默认是否在播放
const isPlay = ref(false)
//音乐的音量
const musicVolume = ref(20)
/**
 *
 **/
const toMusicDetailPage =  () => {

}
/**
 *
 **/
const changePrevMusic = () => {

}
/**
 *
 **/
const playMusic = () => {

}
/**
 *
 **/
const changeNextMusic = () => {

}
/**
 *
 **/
const musicDurationChange = () => {

}
/**
 *
 **/
const silence = () => {

}
/**
 *
 **/
const showRightPlayList = () => {

}
/**
 *
 **/
const musicVolumeChange = () => {

}

</script>

<template>
  <el-footer style="position:fixed;bottom: 0;width:100%;z-index: 100" height="150px;">

    <!--底部播放信息显示-->
    <el-row style="position: absolute;width: 209px; bottom: 40px;background-color: white">
      <el-col :span="8">
        <!--点击左下角角标 跳转歌曲详情界面-->
        <img :src="music.al.picUrl" alt="" @click="toMusicDetailPage"
             style="width: 60px;height: 63px;cursor:pointer;">
      </el-col>
      <el-col :span="16">
        <p style="height: 8px;font-size: 10px;">{{music.name}}</p>
        <br>
        <span style="color: gray;font-size: 10px;">{{music.ar[0].name}}</span>
      </el-col>
    </el-row>


    <el-row style="position:relative; top: 20px; height: 50px; border-top: 1px solid rgb(230,230,230);background-color: white">
      <el-col :span="2.5">
        <img src="@/assets/imgs/prev.png" @click="changePrevMusic" alt=""
             style="border-radius: 100%;cursor: pointer;">

        <img v-if="isPlay" src="@/assets/imgs/pauseMusic.png" alt="" @click="playMusic"
             style="border-radius: 100%;cursor: pointer;margin-left: 25px;width: 40px;height: 40px;">

        <img v-else src="@/assets/imgs/playMusic.png" alt="" @click="playMusic"
             style="border-radius: 100%;cursor: pointer;margin-left: 25px;width: 40px;height: 40px;">

        <img src="@/assets/imgs/next.png" alt="" @click="changeNextMusic"
             style="border-radius: 100%;cursor: pointer;margin-left: 25px;">
      </el-col>
      <el-col :span="15" :offset="1">

        <!--秒数通过 过滤器处理成看得懂的样式-->
        <span style="position:absolute;top: 13px;left: 17%">{{this.musicDuration | timeFormat}}</span>

        <!--音乐播放进度条-->
        <el-slider v-model="musicDuration" :max="totalDuration" @change="musicDurationChange"
                   :show-tooltip="false"></el-slider>

        <span style="position:absolute;left: 72%;bottom: 32%">{{totalDuration | timeFormat}}</span>
      </el-col>

      <el-col :span="5">
        <!--音量控制-->
        <img src="@/assets/imgs/laba.png" v-if="musicVolume!==0" alt="" @click="silence" class="laba">

        <img src="@/assets/imgs/shutUp.png" v-else alt="" @click="silence" class="laba">

        <img src="@/assets/imgs/songList.png" alt="" @click="showRightPlayList"
             style="position: absolute;top: 12px;right: 5%;cursor:pointer;">

        <el-slider v-model="musicVolume" :show-tooltip="false" style="width: 40%"
                   @change="musicVolumeChange">
        </el-slider>

      </el-col>
    </el-row>

    <audio :src="musicUrl" autoplay class="playMusicAudio"></audio>
  </el-footer>
</template>

<style scoped lang="scss">

::v-deep.el-slider__button {
  border: 2px solid rgb(198, 47, 47) !important;
}

::v-deep.el-slider__button {
  width: 10px !important;
  height: 10px !important;
}

::v-deep.el-slider__bar {
  background-color: rgb(198, 47, 47);
}

.el-slider {
  width: 80%;
  margin: 6px auto;
}

.laba {
  position: absolute;
  top: 10px;
  right: 18%;
  cursor: pointer
}

.el-footer {
  padding: 0;
}

::v-deep.el-dialog--center {
  text-align: end;
  float: right;
}

::v-deep.el-dialog__title {
  float: left;
}
</style>