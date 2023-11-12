import axios from '@/utils/request_package'

export const NewMusic = (params) => {
    return axios({
        url: 'top/song',
        params
    })
}