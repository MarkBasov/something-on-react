import { createSelector } from '@reduxjs/toolkit'

const selectProducts = (state) => state.products

export const selectGetProducts = createSelector([selectProducts], (state) => state.products)
