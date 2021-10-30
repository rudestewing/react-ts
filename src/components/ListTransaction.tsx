import moment from 'moment'
import React from 'react'
import { ITransaction } from '../interfaces'
import useStore from '../store/bank'

const ListTransaction: React.FC = () => {
  const bank = useStore((state) => state)

  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <label htmlFor="" className="block text-gray-600 font-semibold shadow-sm pb-3">
        History
      </label>
      <ul className="overflow-y-scroll " style={{ height: '300px' }}>
        {bank.transactions.length ? (
          bank.transactions.map((item: ITransaction, index: number) => {
            return (
              <li key={index} className="mb-3 rounded-md border border-gray-200 p-3">
                <div className="mb-2 text-gray-800">{item.description}</div>
                <div className="text-xs text-gray-500">
                  {moment(item.createdAt).format('DD MMMM YYYY - HH:mm')}
                </div>
              </li>
            )
          })
        ) : (
          <div>No transaction ...</div>
        )}
      </ul>
    </div>
  )
}

export default ListTransaction
