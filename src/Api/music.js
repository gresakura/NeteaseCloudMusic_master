import axios from '@/utils/request_package'

/**
 * 精品歌单
 * @param params {}
 * @returns {*} Promise
 * @constructor
 **/
export const GetMusic = (params) => {
    return axios({
        url: '/top/playlist',
        params
    })
}
/**
 * 独家放送
 * @returns {*} Promise
 * @constructor
 **/
export const PrivateL = () => {
    return axios({
        url: '/personalized/privatecontent'
    })
}
/**
 * 最新音乐
 * @returns {*} Promise
 * @constructor
 **/
export const NewMusic = () => {
    return axios({
        url: 'personalized/newsong'
    })
}