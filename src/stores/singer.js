import { ref } from 'vue'
import { defineStore } from 'pinia'
import { SinGer } from '@/Api/singer'

export const uerSingerStore = defineStore('singer', () => {
    //歌手数据
    const singerList = ref([])
    //歌手分类查询条件
    const queryInfo = {
        type: -1,
        area: -1,
        limit: 12,
        offset: 0,
    }

    const GetSinger = async () => {
        const res = await SinGer(queryInfo)
        singerList.value = res.artists
    }

    /**
     * 分页插件页数改变
     **/
    const handleCurrentChange = (newPage) => {
        queryInfo.offset = (newPage - 1) * queryInfo.limit
        GetSinger()
    }


    return {
        singerList,
        queryInfo,
        GetSinger,
        handleCurrentChange
    }
},{
    persist: true
})