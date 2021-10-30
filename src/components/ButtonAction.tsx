import React from 'react'
import { BUTTON_TYPE } from '../enums'

type IProps = {
  label: string
  onClick: () => void
  type?: BUTTON_TYPE
}

const ButtonAction: React.FC<IProps> = (props) => {
  const { type = BUTTON_TYPE.DEFAULT, onClick, label } = props

  const classType = () => {
    switch (type) {
      case BUTTON_TYPE.DEFAULT:
        return 'bg-white text-gray-800 hover:bg-gray-100'

      case BUTTON_TYPE.PRIMARY:
        return 'bg-green-300 text-gray-800 hover:bg-green-400'

      case BUTTON_TYPE.DANGER:
        return 'bg-red-300 text-gray-800 hover:bg-red-400'

      default:
        return ''
    }
  }

  return (
    <button className={`px-4 py-2 rounded-md ${classType()}`} onClick={onClick}>
      {label}
    </button>
  )
}

export default ButtonAction
