import React from 'react'

type Props = {
  url: string
}

const Avatar: React.FC<Props> = (props) => {
  return (
    <div
      className="rounded-full overflow-hidden shadow-md"
      style={{ height: '80px', width: '80px' }}
    >
      <img src={props.url} alt="" />
    </div>
  )
}

export default Avatar
