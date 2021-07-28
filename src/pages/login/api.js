import axios from '../../utils/request'
/**
 * @desc 登录接口
 * @param {Object} data 用户登录信息
 * @param {String} data.name 用户名
 * @param {String} data.pwd 密码
 * @returns axios promise
 */
export const logIn = data => axios.post('/mock/user/login', data)
