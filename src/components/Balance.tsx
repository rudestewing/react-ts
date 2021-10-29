import React from 'react'
import useStore from '../store/bank'
import { numberWithCommas } from '../utils/helper'

const Balance: React.FC = () => {
  const bank = useStore((state) => state)

  return (
    <div className="flex items-center">
      <span className="mr-2 font-semibold">Balance:</span>
      <span className="font-bold text-lg leading-5">{numberWithCommas(bank.balance)}</span>
    </div>
  )
}

export default Balance
