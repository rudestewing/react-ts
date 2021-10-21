import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { RouteComponentProps } from 'react-router'

import Home from '../pages/Home'
import Profile from '../pages/Profile'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((routeItem, index) => {
          return (
            <Route
              key={index}
              exact
              path="/"
              render={(props: RouteComponentProps<any>) => {
                return <routeItem.component {...props} />
              }}
            />
          )
        })}
        <Route exact path="/" component={Home} />
        <Route exact path="/profile" component={Profile} />
      </Switch>
    </BrowserRouter>
  )
}

export default Router
