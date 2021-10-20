import moment from 'moment'
import React from 'react'
import { ITransaction } from '../interfaces'
import useStore from '../store/bank'

const ListTransaction: React.FC = () => {
  const bank = useStore((state) => state)

  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <ul className="overflow-y-scroll " style={{ height: '300px' }}>
        {bank.transactions.length ? (
          bank.transactions.map((item: ITransaction, index: number) => {
            return (
              <li key={index} className="mb-3 rounded-md border border-gray-200 p-3">
                <div className="">{item.description}</div>
                <div>{moment(item.createdAt).format('YYYY, MMMM DD - HH:mm:ss')}</div>
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
