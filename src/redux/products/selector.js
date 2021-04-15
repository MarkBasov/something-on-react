import { createSelector } from '@reduxjs/toolkit'

const selectProducts = (state) => state.products
// eslint-disable-next-line import/prefer-default-export
export const selectGetProducts = createSelector(
  [selectProducts],
  (state) => state.products,
)