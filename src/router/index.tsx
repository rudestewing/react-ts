import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import routes from './routes'
import { RouteComponentProps } from 'react-router'

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
              render={(props: RouteComponentProps<any>) => {
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
