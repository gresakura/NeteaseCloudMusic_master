import axios from '@/utils/request_package'

export const GetBanners = () => {
    return axios({
        url: 'banner'
    })
}