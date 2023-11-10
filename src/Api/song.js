import axios from '@/utils/request_package'

export const HotMusic = () => {
    return axios({
        url: 'playlist/hot'
    })
}

export const GoodMusic = (params) => {
    return axios({
        url: '/top/playlist',
        params
    })
}