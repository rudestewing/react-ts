import React from 'react'
import { RootState } from '../store'
import { useSelector } from 'react-redux'

const Balance: React.FC = () => {
  const { bank } = useSelector((state: RootState) => ({
    bank: state.bank,
  }))

  return (
    <div>
      <span className="mr-2 font-semibold">Balance:</span>
      <span className="font-bold text-lg leading-5">{bank.balance}</span>
    </div>
  )
}

export default Balance
