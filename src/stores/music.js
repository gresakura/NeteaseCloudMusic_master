import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GetMusic,PrivateL,NewMusic } from '@/Api/music'

export const useMusicStores = defineStore('music', () => {
    //推荐歌单的数据
    let musicList =  ref([])
    const params ={
        limit: 12,
        offset: (Math.random() * 1297).toFixed(0) - 12,
    }
    //独家放送的信息
    let privateList = ref([])
    //最新音乐的推送列表
    let newMusicList = ref([])

    const useMusic = async () => {
        const res = await GetMusic(params)
        musicList.value = res.playlists
    }

    const usePrivate = async () => {
        const res = await PrivateL()
        privateList.value = res.result
    }

    const useNewMusic = async () => {
        const res = await NewMusic()
        newMusicList.value = res.result
    }

    return { musicList,privateList,newMusicList,useMusic,usePrivate,useNewMusic }
},{
    persist: true
})