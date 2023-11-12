<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'
const router = useRoute()

const navList = ref([
  {
    name: '个性推荐',
    path: '/section/Personalized'
  },
  {
    name: '歌单',
    path: '/section/song'
  },
  {
    name: '排行榜',
    path: '/section/theCharts'
  },
  {
    name: '歌手',
    path: '/section/singer'
  },
  {
    name: '最新音乐',
    path: '/section/latestMusic'
  },
])

/**
 *
 **/
const handleSelect = () => {

}

const activeIndex = ref(0)
</script>

<template>
  <el-main>
    <el-header style="border-bottom: 1px solid rgb(230,230,230)" height="150px;">
      <el-menu

          :default-active="router.path"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          text-color="#909399"
          active-text-color="#303133"
          router
      >
        <el-menu-item v-for="(item,index) in navList" :key="index" :index="item.path">{{ item.name }}</el-menu-item>
      </el-menu>
    </el-header>
    <router-view></router-view>
  </el-main>
</template>

<style scoped lang="scss">
::v-deep.el-header {
  padding: 0 20px;
  box-sizing: border-box;
  flex-shrink: 0;
}

::v-deep.el-menu,.el-menu-item {
  background: none;
  justify-content: center;

}

.el-menu-item {
 --el-menu-hover-text-color: none;
 --el-menu-bg-color: none;
 --el-menu-hover-bg-color: none;
}

.el-menu-item:hover {
  //background: none !important;
  color: #303133 !important;

}

.topBar {
margin: 0 auto;
width: 700px;

span {
margin-left: 40px;
cursor: pointer;
}

span:hover {
color: red;
}

span:visited {
border-bottom: 1px solid red;
}
}

.el-menu.el-menu--horizontal {
border-bottom: 0px;
}

.el-menu-item.is-active {
color: black;
border-bottom: 2px solid red !important;
}
</style>