import React from 'react'
import { IUser } from '../interfaces'
import Avatar from './Avatar'
import TextLabelInfo from './TextLabelInfo'

type Props = {
  data: IUser
}

const HeroProfile: React.FC<Props> = (props) => {
  const { data } = props

  return (
    <div className="bg-white shadow-md rounded-md p-5">
      <div className="flex">
        <div className="mr-5">
          <Avatar url={data.avatarUrl} />
        </div>
        <div className="text-gray-800">
          <TextLabelInfo label="Name" value={data.name} />
          <TextLabelInfo label="Username" value={data.username} />
          <TextLabelInfo label="Email" value={data.email} />
          <TextLabelInfo label="Age" value={String(data.age)} />
        </div>
      </div>
    </div>
  )
}
export default HeroProfile
