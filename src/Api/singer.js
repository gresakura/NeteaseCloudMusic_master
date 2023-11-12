import axios from '@/utils/request_package'

export const SinGer = (params) => {
    return axios({
        url: 'artist/list',
        params
    })
}