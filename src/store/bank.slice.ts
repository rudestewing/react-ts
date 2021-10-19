import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit'
import { ITransaction } from '../interfaces'

type IState = {
  balance: number
  transactions: ITransaction[]
}

const initialState: IState = {
  balance: 0,
  transactions: [],
}

export const bankSlice = createSlice({
  name: 'bank',
  initialState,
  reducers: {
    deposit: (state: IState, action: PayloadAction<number>) => {
      state.balance = state.balance + action.payload
      state.transactions.unshift({
        id: String(Math.random()),
        createdAt: new Date(),
        description: `Deposit ${action.payload}`,
      })
    },
    withdraw: (state: IState, action: PayloadAction<number>) => {
      state.balance = state.balance - action.payload
      state.transactions.unshift({
        id: String(Math.random()),
        createdAt: new Date(),
        description: `Withdraw ${action.payload}`,
      })
    },
    bankrupt: (state: IState) => {
      state.balance = 0
      state.transactions.unshift({
        id: String(Math.random()),
        createdAt: new Date(),
        description: `Bankrupt -${state.balance}`,
      })
    },
  },
})

export const bankAction = bankSlice.actions

export default bankSlice
