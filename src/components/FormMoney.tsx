import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store'
import { deposit, withdraw } from '../store/action-creators/bank.action-creator'

const FormMoney: React.FC = () => {
  const { bank } = useSelector((state: RootState) => ({
    bank: state.bank,
  }))

  const [money, setMoney] = useState<number>(0)
  const dispatch = useDispatch<AppDispatch>()

  function handleDeposit() {
    dispatch(deposit(money))
    setMoney(0)
  }

  function handleWithdraw() {
    dispatch(withdraw(money))
    setMoney(0)
  }

  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <label htmlFor="" className="block mb-1">
        Input Value
      </label>
      <input
        type="number"
        name=""
        id=""
        value={money || ''}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setMoney(parseInt(e.target.value))}
        className="rounded-sm border border-gray-300 p-2 mb-3 w-full"
      />
      <div className="flex justify-center mb-3">
        <button
          className="bg-green-300 text-gray-800 px-4 py-2 rounded-md mr-2"
          onClick={handleDeposit}
        >
          deposit +
        </button>
        <button
          className="bg-red-300 text-gray-800 px-4 py-2 rounded-md"
          disabled={money > bank.balance}
          onClick={handleWithdraw}
        >
          withdraw -
        </button>
      </div>
    </div>
  )
}

export default FormMoney
