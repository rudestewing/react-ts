import ActionType from '../store/action-type'

export type IActionBank =
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
    }
