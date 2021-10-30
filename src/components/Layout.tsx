import React from 'react'
import Nav from './Nav'

type IProps = {
  children: JSX.Element
}

const Layout: React.FC<IProps> = ({ children }) => {
  return (
    <div className="min-h-screen">
      <div className="max-w-screen-sm mx-auto">
        <Nav />
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
