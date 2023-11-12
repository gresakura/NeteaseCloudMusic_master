import axios from '@/utils/request_package'

export const OfficialRank = () => {
    return axios({
        url: 'toplist/detail'
    })
}