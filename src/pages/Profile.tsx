import React from 'react'
import { RouteComponentProps } from 'react-router'
import HeroProfile from '../components/HeroProfile'
import Layout from '../components/Layout'
import { IUser } from '../interfaces'

const Profile: React.FC<RouteComponentProps> = () => {
  const dataUser: IUser = {
    id: '931y2o312973017525gk3uy45',
    avatarUrl:
      'https://images.unsplash.com/photo-1610276198568-eb6d0ff53e48?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1160&q=80',
    name: 'jacksparrow',
    username: 'jacks9712',
    email: 'jacksparrow_9712@mail.com',
    age: 29,
    address: [
      {
        city: 'Jakarta',
        street: 'Sesame Street',
        postalCode: '61276',
      },
      {
        city: 'Surabaya',
        street: 'Jalan Street',
        postalCode: '25182',
      },
    ],
  }

  return (
    <Layout>
      <div className="container mx-auto py-3">
        <HeroProfile data={dataUser} />
      </div>
    </Layout>
  )
}

export default Profile
