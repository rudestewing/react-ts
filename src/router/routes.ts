import React from 'react'
import { RouteComponentProps } from 'react-router'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

type IRoute = {
  path: string
  exact?: Boolean
  component: React.FC<RouteComponentProps>
}

const routes: IRoute[] = [
  {
    path: '/',
    exact: true,
    component: Home,
  },
  {
    path: '/profile',
    exact: true,
    component: Profile,
  },
]

export default routes
