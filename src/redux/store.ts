import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux'

import {
  AnyAction,
  combineReducers,
  configureStore,
  ThunkAction,
  ThunkDispatch,
} from '@reduxjs/toolkit'
import thunk from 'redux-thunk'

import productsReducer from './products/productsSlice'

const combinedReducer = combineReducers({
  products: productsReducer,
})

const store = configureStore({
  reducer: combinedReducer,
  middleware: [thunk],
})

export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, AnyAction>
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

type TypedDispatch<T> = ThunkDispatch<T, any, AnyAction>

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
export const useAppDispatch = () => useDispatch<TypedDispatch<RootState>>()

export default store
