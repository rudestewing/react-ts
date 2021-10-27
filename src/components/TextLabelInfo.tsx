import React from 'react'

type Props = {
  label: string
  value?: string
}

const TextLabelInfo: React.FC<Props> = (props) => {
  return (
    <div className="mb-3">
      <label htmlFor="" className="block text-gray-600 text-sm">
        {props.label}
      </label>
      <div className="text-gray-900">{props.value}</div>
    </div>
  )
}

export default TextLabelInfo
