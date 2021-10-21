import Home from '../pages/Home'
import Profile from '../pages/Profile'

type IRoute = {
  path: string
  exact?: Boolean
  component: any
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
