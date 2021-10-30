import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'

const Router: React.FC = () => {
  return (
    <BrowserRouter>
      <Switch>
        {routes.map((routeItem, index) => {
          return (
            <Route
              key={index}
              exact={routeItem.exact}
              path={routeItem.path}
              render={(props) => {
                return <routeItem.component {...props} />
              }}
            />
          )
        })}
      </Switch>
    </BrowserRouter>
  )
}

export default Router
