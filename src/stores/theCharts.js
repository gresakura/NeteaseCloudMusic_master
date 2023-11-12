import { defineStore } from 'pinia'
import { OfficialRank } from '@/Api/theCharts'
import { ref } from 'vue'

export const useTheChartsStore = defineStore('theCharts',() => {
    //排行榜的所有数据
    const musicRankList = ref([
        {
            coverImgUrl: ''
        },
        {
            coverImgUrl: ''
        },
        {
            coverImgUrl: ''
        },
        {
            coverImgUrl: ''
        }
    ])
    //歌手榜的信息
    const singerRankInfo = ref({
        coverUrl: '',
        artists: []
    })

    const getOfficialRankList = async () => {
        const res = await OfficialRank()
        musicRankList.value = res.list
        singerRankInfo.value = res.artistToplist
    }

    return {
        musicRankList,
        singerRankInfo,
        getOfficialRankList
    }
},{
    persist: true
})