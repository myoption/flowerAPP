import axios from 'axios'
// 提醒插件
import { Toast } from 'vant'
import router from '../router'
import * as sysConfig from './config'

const timeout = 60000 // 超时时间 默认1分钟
const baseURL = 'http://localhost:3333'
const userId = 'userid'
const deviceId = 'h5' // 设备类型
// 创建axios实例
const request = axios.create({
  timeout,
  baseURL
})
// 添加token
const addToken = config => {
  const token = localStorage.getItem(sysConfig.TOKENKEY)
  // 添加token请求头
  config.headers.Authorization = `Bearer ${token}`
  config.headers.deviceId = deviceId
  config.headers.userId = userId || '-1'
  return config
}
// 添加公共参数
const addParams = config => {
  // console.log(config.statusCode)
  // 公用参数对象
  const params = {
    userId,
    deviceId,
    statusCode: config.statusCode,
    currentPage: config.currentPage
  }
  const key = config.method === 'post' ? 'data' : 'params'
  // 参数拼接
  config[key] = {
    ...config[key],
    ...params
  }
  return config
}
// 状态检测

const checkNetWorkStatus = response => {
  const {
    status,
    // data,
    message
  } = response
  const errorCodes = [401, 404]
  if (errorCodes.includes(status)) {
    Toast({
      type: 'fail',
      message
    })
  }
  // console.log('response', response)
  return response
}
/**
 * @param {*} response
 * @returns promise
 */
// 清除登录状态
const clearLoginInfo = () => {
  // 需要清理的缓存
  const keys = [
    sysConfig.TOKENKEY,
    sysConfig.USERINFO
  ]
  // 遍历清除用户缓存的信息
  keys.map(key => localStorage.removeItem(key))
}
const checkCode = response => {
  const { errorCode, errorMessage } = response.data
  // const errorCode = 401
  // const errorMessage = 'fail'
  if (errorCode !== 0) {
    Toast({
      type: 'fail',
      message: errorMessage
    })
  }
  const codes = [401, 403]
  // 登录失效检测
  if (codes.includes(errorCode)) {
    clearLoginInfo()
    // 保存当前页面路由 用户登录后使用
    sessionStorage.setItem(sysConfig.REJECTURL, location.href.replace(location.origin, ''))
    // 重定向到登录页面
    router.push('/login')
  }
  return response
}

// 请求前的处理
request.interceptors.request.use(config => {
  return Promise.resolve(config)
    .then(addToken)
    .then(addParams)
})
// 响应处理
request.interceptors.response.use(response => {
  return Promise.resolve(response)
    .then(checkNetWorkStatus)
    .then(checkCode)
    // 请求正常 返回数据
    .then(response => response.data)
})

export default request
