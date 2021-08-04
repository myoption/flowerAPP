import axios from '../../../utils/request'
import * as config from '../../../utils/config'
const api = config.APITYPE
export const getOrderList = params => axios.get(`${api}/order/getOrderList`, params)
