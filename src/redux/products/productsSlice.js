import { createSlice } from '@reduxjs/toolkit'
import Api from '../../api/Api'

const initialState = {
  products: null,
  error: null,
}

const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    getProductsStart(state) {
      return {
        ...state,
        error: null,
      }
    },
    getProductsSuccess(state, action) {
      return {
        ...state,
        products: action.payload,
      }
    },
    getProductsFailed(state, action) {
      return {
        ...state,
        error: action.payload,
      }
    },
    clearProducts() {
      return initialState
    },
  },
})

const { actions, reducer } = productsSlice

export const {
  getProductsStart,
  getProductsSuccess,
  getProductsFailed,
  clearProducts,
} = actions 

export default reducer

export const fetchProductsStartAsync = () => async (dispatch) => {
  dispatch(getProductsStart())
  try {
    await Api.getProduct().then((response) => {
      if (response?.data) {
        dispatch(getProductsSuccess(response.data))
      }
    })
  } catch (err) {
    console.log('err', err)
  }
}
