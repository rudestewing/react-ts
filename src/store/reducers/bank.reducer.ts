import { IActionBank, ITransaction } from '../../interfaces'
import ActionType from '../action-type'

type IState = {
  balance: number
  transactions: ITransaction[]
}

const initialState: IState = {
  balance: 0,
  transactions: [],
}

const bankReducer = (state: IState = initialState, action: IActionBank) => {
  switch (action.type) {
    case ActionType.BANK_DEPOSIT:
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [
          {
            id: String(Math.random()),
            createdAt: new Date(),
            description: `Deposit ${action.payload}`,
          },
          ...state.transactions,
        ],
      }

    case ActionType.BANK_WITHDRAW:
      return {
        ...state,
        balance: state.balance - action.payload,
        transactions: [
          {
            id: String(Math.random()),
            createdAt: new Date(),
            description: `Withdraw -${action.payload}`,
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
