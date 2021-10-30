import React, { useState } from 'react'
import { BUTTON_TYPE } from '../enums'
import useStore from '../store/bank'
import ButtonAction from './ButtonAction'

const FormMoney: React.FC = () => {
  const bank = useStore((state) => state)

  const [money, setMoney] = useState<number>(0)

  function handleChangeInputValue(e: React.ChangeEvent<HTMLInputElement>) {
    setMoney(parseInt(e.target.value))
  }

  function handleDeposit() {
    if (money > 0) {
      bank.deposit(money)
    }
    setMoney(0)
  }

  function handleWithdraw() {
    if (money > 0) {
      bank.withdraw(money)
    }
    setMoney(0)
  }

  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <label htmlFor="" className="block text-gray-600 font-semibold shadow-sm pb-3">
        Input Value
      </label>
      <input
        type="number"
        value={money > 0 ? money : ''}
        onChange={handleChangeInputValue}
        className="rounded-sm border border-gray-300 p-2 mb-3 w-full"
      />
      <div className="flex justify-center mb-3">
        <div className="mr-2">
          <ButtonAction label="Deposit +" onClick={handleDeposit} type={BUTTON_TYPE.PRIMARY} />
        </div>
        <div className="">
          <ButtonAction label="Withdraw -" onClick={handleWithdraw} type={BUTTON_TYPE.DANGER} />
        </div>
      </div>
    </div>
  )
}

export default FormMoney
