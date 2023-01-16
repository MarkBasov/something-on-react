import { apiURL } from '../config/api'
import endpoints from './endpoints'

export default {
  getProduct() {
    return request(apiURL, endpoints.products.getProduct)
  },
}
