import { ref } from 'vue'
import { defineStore } from 'pinia'
import { GetBanners } from '@/Api/banner'

export const useBannerStores = defineStore('banner', () => {
    const bannersList = ref([])

    const useBannersInfo = async () => {
        const res = await GetBanners()
        bannersList.value = res.banners
    }

    return { bannersList,useBannersInfo }
},{
    persist:true
})