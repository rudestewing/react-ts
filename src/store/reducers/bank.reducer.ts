import { ActionType, ITransaction } from '../../types'

type IAction =
  | {
      type: ActionType.BANK_DEPOSIT
      payload: number
    }
  | {
      type: ActionType.BANK_WITHDRAW
      payload: number
    }
  | {
      type: ActionType.BANK_BANKRUPT
      payload?: any
    }

type IState = {
  balance: number
  transactions: ITransaction[]
}

const initialState: IState = {
  balance: 0,
  transactions: [],
}

const bankReducer = (state: IState = initialState, { type, payload }: IAction) => {
  switch (type) {
    case ActionType.BANK_DEPOSIT:
      return {
        ...state,
        balance: state.balance + payload,
        transactions: [
          {
            id: String(Math.random()),
            createdAt: new Date(),
            description: `Deposit ${payload}`,
          },
          ...state.transactions,
        ],
      }

    case ActionType.BANK_WITHDRAW:
      return {
        ...state,
        balance: state.balance - payload,
        transactions: [
          {
            id: String(Math.random()),
            createdAt: new Date(),
            description: `Withdraw -${payload}`,
          },
          ...state.transactions,
        ],
      }

    case ActionType.BANK_BANKRUPT:
      return {
        ...state,
        balance: 0,
        transactions: [
          {
            id: String(Math.random()),
            createdAt: new Date(),
            description: `Bankrupt`,
          },
          ...state.transactions,
        ],
      }

    default:
      return state
  }
}

export default bankReducer
