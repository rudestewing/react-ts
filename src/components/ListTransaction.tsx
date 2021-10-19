import React from 'react'
import { ITransaction } from '../interfaces'
import { useSelector } from 'react-redux'
import { RootState } from '../store'

const ListTransaction: React.FC = () => {
  const { bank } = useSelector((state: RootState) => ({
    bank: state.bank,
  }))

  return (
    <div className="p-2 border border-gray-300 rounded-md">
      <ul className="overflow-y-scroll " style={{ height: '300px' }}>
        {bank.transactions.length ? (
          bank.transactions.map((item: ITransaction, index: number) => {
            return (
              <li key={index} className="mb-3 rounded-md border border-gray-200 p-3">
                <div className="">{item.description}</div>
                <div>
                  {item.createdAt.toLocaleDateString()} - {item.createdAt.toTimeString()}
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
