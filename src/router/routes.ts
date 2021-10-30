import { IRoute } from '../interfaces'
import Home from '../pages/Home'
import Profile from '../pages/Profile'

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
