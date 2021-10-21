import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

type IProps = {
  children: JSX.Element
}

type INavItem = {
  path: string
  title: string
}

const navs: INavItem[] = [
  {
    path: '/',
    title: 'Home',
  },
  {
    path: '/profile',
    title: 'Profile',
  },
]

const Layout: React.FC<IProps> = ({ children }) => {
  const location = useLocation()

  return (
    <div className="min-h-screen">
      <div className="max-w-screen-sm mx-auto">
        <div className="bg-blue-300 w-full ">
          <ul className=" flex justify-center items-center">
            {navs.map((item: INavItem, index: number) => {
              return (
                <li key={index}>
                  <Link
                    to={item.path}
                    className={`${
                      location.pathname === item.path
                        ? 'bg-blue-600 text-gray-100'
                        : 'bg-gray-100 text-gray-900'
                    } px-4 py-2  block hover:bg-blue-600 hover:text-gray-100 font-semibold `}
                  >
                    <span>{item.title}</span>
                  </Link>
                </li>
              )
            })}
          </ul>
        </div>
        <div>{children}</div>
      </div>
    </div>
  )
}

export default Layout
