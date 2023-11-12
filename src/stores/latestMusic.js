import { defineStore } from 'pinia'
import { NewMusic } from '@/Api/latestMusic'
import { ref } from "vue";

export const useNewMusicStore = defineStore('newMusic', () => {
    //筛选条件
    const queryInfo = {
        type: 0
    }

    //最新音乐的数据
    const newMusicInfo = ref([
        {
            id: 0,
            album: {
                picUrl: ''
            }
        }

    ])

    const getNewMusic = async () => {
        const res = await NewMusic(queryInfo)
        newMusicInfo.value = res.data
    }

    return {
        queryInfo,
        newMusicInfo,
        getNewMusic
    }

},{
    persist: true
})