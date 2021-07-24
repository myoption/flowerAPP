import axios from '../../utils/request'
const pre = '/mock'
/**
 * @desc 获取发现页列表
 */
export const getFoundList = () => axios.post(`${pre}/feed/FlowerFeed/getFoundList`)
/**
 * @desc 获取详情列表
 */
export const getDetailList = () => axios.post(`${pre}/feed/FlowerFeed/getFeedDetail`)
