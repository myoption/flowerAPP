import axios from '../../utils/request'

export const getProductDetail = params => axios.get('/mock/product/getProductDetail', params)
