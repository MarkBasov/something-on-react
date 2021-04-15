import axios from 'axios'

/**
 *
 * @param apiURL - api url
 * @param url - api endpoint
 * @param method - GET, POST, PUT, DELETE
 * @param data - для передачи данных с пагинацией передавать параметр "page"
 * @param params - параметры запроса
 * @param args
 */

export const request = async (
  apiURL, url, method, data, params, ...args
) => {
  const axiosConfig = {
    method: (method || 'get'),
    url: `${apiURL}${url}`,
    data,
    params,
    ...args,
  }

  const createAxios = axios.create(axiosConfig)

  createAxios.interceptors.request.use(
    (config) => {
      const authField = {
        Authorization: `Bearer`,
        Accept: 'application/json',
      }
      // eslint-disable-next-line no-param-reassign
      config.headers = authField
      return config
    },
    async (err) => Promise.reject(err),
  )

  createAxios.interceptors.response.use(
    (config) => config,
    (error) => {
      const { response } = error
      if (response && response.status === 200) {
        return Promise.resolve(response)
      }
      return Promise.reject(response?.status)
    },
  )

  return createAxios(axiosConfig)
}

export default request
