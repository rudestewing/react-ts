import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Layout from '../components/Layout'
import { RootState } from '../store'
import { ActionType, ITransaction } from '../types'

const Home: React.FC = () => {
  const { bank } = useSelector((state: RootState) => ({
    bank: state.bank,
  }))

  const [money, setMoney] = useState<number>(0)

  const dispatch = useDispatch()

  return (
    <Layout>
      <div className="container mx-auto">
        <div className="my-4 ">
          <span className="mr-2 font-semibold">Balance:</span>
          <span className="font-bold text-lg leading-5">{bank.balance}</span>
        </div>
        <div>
          <div>
            <input
              type="number"
              name=""
              id=""
              value={money}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                setMoney(parseInt(e.target.value))
              }
              className="rounded-sm border border-gray-300 p-2 mb-3 w-full"
            />
          </div>
          <div className="flex justify-center mb-3">
            <button
              onClick={() => dispatch({ type: ActionType.BANK_DEPOSIT, payload: money })}
              className="bg-green-300 text-gray-800 px-4 py-2 rounded-md mr-2"
            >
              deposit +
            </button>
            <button
              onClick={() => dispatch({ type: ActionType.BANK_WITHDRAW, payload: money })}
              className="bg-red-300 text-gray-800 px-4 py-2 rounded-md"
              disabled={money > bank.balance}
            >
              withdraw -
            </button>
          </div>
        </div>
        <ul>
          {bank.transactions.map((item: ITransaction, index: number) => {
            return (
              <li key={index} className="mb-3 rounded-md border border-gray-200 p-3">
                <div className="">{item.description}</div>
                <div>
                  {item.createdAt.toLocaleDateString()} - {item.createdAt.toTimeString()}
                </div>
              </li>
            )
          })}
        </ul>
      </div>
    </Layout>
  )
}

export default Home
