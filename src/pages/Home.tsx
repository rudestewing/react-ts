import React from 'react'
import Balance from '../components/Balance'
import Layout from '../components/Layout'
import FormMoney from '../components/FormMoney'
import ListTransaction from '../components/ListTransaction'

const Home: React.FC = () => {
  return (
    <Layout>
      <div className="container mx-auto">
        <div className="my-4 ">
          <Balance />
        </div>
        <div className="mb-3">
          <FormMoney />
        </div>
        <ListTransaction />
      </div>
    </Layout>
  )
}

export default Home
