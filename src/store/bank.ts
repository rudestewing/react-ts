import create, { SetState } from 'zustand'
import { persist } from 'zustand/middleware'
import { ITransaction } from '../interfaces'
import { numberWithCommas } from '../utils/helper'

type IState = {
  balance: number
  transactions: ITransaction[]
  deposit: (value: number) => void
  withdraw: (value: number) => void
  bankrupt?: () => void
}

const useStore = create<IState>(
  persist(
    (set: SetState<IState>) => ({
      balance: 0,
      transactions: [],
      deposit(value: number) {
        set((state: IState) => ({
          balance: state.balance + value,
          transactions: [
            {
              id: String(Math.random()),
              createdAt: new Date(),
              description: `(+) Deposit ${numberWithCommas(value)}`,
            },
            ...state.transactions,
          ],
        }))
      },
      withdraw(value: number) {
        set((state: IState) => ({
          balance: state.balance - value,
          transactions: [
            {
              id: String(Math.random()),
              createdAt: new Date(),
              description: `(-) Withdraw ${numberWithCommas(value)}`,
            },
            ...state.transactions,
          ],
        }))
      },
      // bankrupt() {
      //   set((state: IState) => ({
      //     balance: 0,
      //     transactions: [
      //       {
      //         id: String(Math.random()),
      //         createdAt: new Date(),
      //         description: `Bankrupt`,
      //       },
      //       ...state.transactions,
      //     ],
      //   }))
      // },
    }),
    {
      name: 'store_bank',
    }
  )
)

export default useStore
