import React from 'react'
import { RouteComponentProps } from 'react-router'

export type IRoute = {
  path: string
  exact: boolean
  component: React.FC<RouteComponentProps>
}

export type ITransaction = {
  id: string
  createdAt: Date
  description: string
}

export type IAddress = {
  city: string
  street: string
  postalCode: string
}

export type IUser = {
  id: string
  avatarUrl: string
  name: string
  username: string
  email: string
  age: number
  address: IAddress[]
}
