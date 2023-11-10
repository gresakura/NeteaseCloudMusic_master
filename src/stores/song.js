import { defineStore } from 'pinia'
import { HotMusic,GoodMusic } from '@/Api/song'
import { ref } from 'vue'
export const useSongStore = defineStore('song',() => {
    //热门歌单分类标签
    const HotMusicList = ref([])
    //精品歌单分类查询条件
    const queryInfo = {
        cat: '全部',
        limit: 24,
        offset: 0,
    }
    // 精品歌单的列表
    const GoodMusicList = ref([])
    // 精品歌单的总数
    const goodMusicListTotal = ref(0)

    const GetHotMusic = async () => {
        const res = await HotMusic()
        HotMusicList.value = res.tags
    }

    const GetGoodMusic = async () => {
        const res = await GoodMusic(queryInfo)
        GoodMusicList.value = res.playlists
        goodMusicListTotal.value = res.total
    }
    return {
        HotMusicList,
        GoodMusicList,
        goodMusicListTotal,
        GetHotMusic,
        GetGoodMusic
    }
})