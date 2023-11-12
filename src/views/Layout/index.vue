<script setup>
import Header from '@/views/Layout/component/w-header/index.vue'
import Aside from '@/views/Layout/component/main/aside.vue'
import Footer from '@/views/Layout/component/w-footer/index.vue'
import { useBannerStores } from '@/stores/banner'
import { useMusicStores } from '@/stores/music'
import { useSongStore } from '@/stores/song'
import { useTheChartsStore } from '@/stores/theCharts'
import { uerSingerStore } from '@/stores/singer'
import { useNewMusicStore } from '@/stores/latestMusic'
import { onMounted } from "vue";

const startLayout = useBannerStores()
onMounted(() => startLayout.useBannersInfo())

const MusicSetOf = useMusicStores()
onMounted(() => {
  MusicSetOf.useMusic()
  MusicSetOf.useNewMusic()
  MusicSetOf.usePrivate()
})

const SongStore = useSongStore()
onMounted(() => {
  SongStore.GetHotMusic()
  SongStore.GetGoodMusic()
})

const theChartsStore = useTheChartsStore()
onMounted(() => {
  theChartsStore.getOfficialRankList()
})

const SingerStore = uerSingerStore()
onMounted(() => SingerStore.GetSinger())

const NewMusicStore = useNewMusicStore()
onMounted(() => NewMusicStore.getNewMusic())

</script>

<template>
  <el-container style="height: 100%">
    <Header></Header>
    <el-container class="container">
      <Aside></Aside>
      <router-view></router-view>
    </el-container>
    <Footer></Footer>
  </el-container>
</template>

<style scoped>
::v-deep.el-container {
  flex-direction: column;
}

.container {
  display: flex;
  flex-direction: row;
  flex: 1;
  flex-basis: auto;
  box-sizing: border-box;
  min-width: 0;
}
</style>