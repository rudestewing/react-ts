import { Dispatch } from 'redux'
import ActionType from '../action-type'
import { IActionBank } from '../../interfaces'

export const deposit = (value: number) => {
  return (dispatch: Dispatch<IActionBank>) => {
    return dispatch({
      type: ActionType.BANK_DEPOSIT,
      payload: value,
    })
  }
}

export const withdraw = (value: number) => {
  return (dispatch: Dispatch<IActionBank>) => {
    return dispatch({
      type: ActionType.BANK_WITHDRAW,
      payload: value,
    })
  }
}

export const bankrupt = () => {
  return (dispatch: Dispatch<IActionBank>) => {
    return dispatch({
      type: ActionType.BANK_BANKRUPT,
    })
  }
}
