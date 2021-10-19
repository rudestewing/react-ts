import { configureStore } from '@reduxjs/toolkit'
import bankReducer from './reducers/bank.reducer'

export const store = configureStore({
  reducer: {
    bank: bankReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
