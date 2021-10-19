import { configureStore } from '@reduxjs/toolkit'
import { combineReducers } from 'redux'

import bankSlice from './bank.slice'

const rootReducer = combineReducers({
  bank: bankSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
