import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router'

type INavItem = {
  path: string
  title: string
}

const Nav: React.FC = () => {
  const location = useLocation()

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

  return (
    <div>
      <div className="bg-blue-300 w-full">
        <ul className="flex justify-left items-center p-3">
          {navs.map((item: INavItem, index: number) => {
            return (
              <li key={index}>
                <Link
                  to={item.path}
                  className={`${
                    location.pathname === item.path
                      ? 'bg-blue-600 text-gray-100'
                      : 'bg-gray-100 text-gray-900'
                  } px-4 py-2  block hover:bg-blue-600 hover:text-gray-100 font-semibold`}
                >
                  <span>{item.title}</span>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default Nav
