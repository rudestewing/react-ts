import React from 'react'
import Balance from '../components/Balance'
import Layout from '../components/Layout'
import FormMoney from '../components/FormMoney'
import ListTransaction from '../components/ListTransaction'
import { RouteComponentProps } from 'react-router'

const Home: React.FC<RouteComponentProps> = () => {
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
