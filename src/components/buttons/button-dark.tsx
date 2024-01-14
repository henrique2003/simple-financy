import React from 'react'
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  text: string
}

export const ButtonDark: React.FC<Props> = ({ text, ...props }) => {
  return (
    <TouchableOpacity
      className='w-full bg-zinc-700 h-[50px] rounded-[7px] flex justify-center items-center'
      activeOpacity={0.8}
      {...props}
    >
      <Text className="text-white text-sm">{text}</Text>
    </TouchableOpacity>
  )
}
