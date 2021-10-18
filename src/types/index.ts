export enum ActionType {
  BANK_DEPOSIT = 'BANK_DEPOSIT',
  BANK_WITHDRAW = 'BANK_WITHDRAW',
  BANK_BANKRUPT = 'BANKRUPT',
}

export type ITransaction = {
  id: string
  createdAt: Date
  description: string
}
