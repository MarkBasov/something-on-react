import { combineReducers } from 'redux'
import { persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'

import productsReducer from './products/productsSlice'

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['products'],
}

const appReducer = combineReducers({
  products: productsReducer,
})

const rootReducer = (state, action) => {
  return appReducer(state, action)
}

export default persistReducer(persistConfig, rootReducer)
