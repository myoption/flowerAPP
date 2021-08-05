import axios from '../../utils/request'
import * as config from '../../utils/config'
const api = config.APITYPE
/**
 * @desc 请求订单列表
 * @param {*} params
 * @returns
 */
export const getOrderList = params => axios.get(`${api}/order/getOrderList`, params)

/**
 * @desc 取消订单
 * @param {*} params
 * @returns
 */
export const toCancle = data => axios.post(`${api}/order/toCancle`, data)

/**
 * @desc 删除订单
 * @param {*} params
 * @returns
 */
export const toDelete = data => axios.post(`${api}/order/toDelete`, data)

/**
 * @desc 提醒发货
 * @param {*} params
 * @returns
 */
export const toRemindPacking = data => axios.post(`${api}/order/toRemindPacking`, data)

/**
 * @desc 确认收货
 * @param {*} params
 * @returns
 */
export const toSign = data => axios.post(`${api}/order/toSign`, data)

/**
 * @desc 查看物流
 * @param {*} params
 * @returns
 */
export const toCheckExpress = data => axios.post(`${api}/order/toCheckExpress`, data)

/**
 * @desc 支付
 * @param {*} params
 * @returns
 */
export const toPay = data => axios.post(`${api}/order/toPay`, data)
