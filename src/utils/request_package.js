import axios from 'axios'
import { ElMessage } from 'element-plus'

const httpInstance = axios.create({
    baseURL: 'http://localhost:3000',
    timeout: 5000
})

httpInstance.interceptors.request.use(config => {
    return config
},e => Promise.reject(e))


httpInstance.interceptors.response.use(res => res.data, e => {
    // 统一错误提示
    ElMessage({
        type: 'warning',
        message: e.response.data.message
    })

    return Promise.reject(e)
})


export default httpInstance