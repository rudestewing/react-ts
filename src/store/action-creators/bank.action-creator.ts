import { Dispatch } from 'redux'
import { ActionType } from '../../enums'
import { IAction } from '../reducers/bank.reducer'

export const deposit = (value: number) => {
  return (dispatch: Dispatch<IAction>) => {
    return dispatch({
      type: ActionType.BANK_DEPOSIT,
      payload: value,
    })
  }
}

export const withdraw = (value: number) => {
  return (dispatch: Dispatch<IAction>) => {
    return dispatch({
      type: ActionType.BANK_WITHDRAW,
      payload: value,
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<IAction>) => {
    return dispatch({
      type: ActionType.BANK_BANKRUPT,
    })
  }
}
