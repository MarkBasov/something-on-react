import { request } from './Request'
import { apiURL } from '../config/api'
import endpoints from './endpoints'

// eslint-disable-next-line import/no-anonymous-default-export
export default {
  getProduct() {
    return request(apiURL, endpoints.products.getProduct)
  },
}