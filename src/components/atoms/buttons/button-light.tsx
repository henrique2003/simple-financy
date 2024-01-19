import React from 'react'
import { Text, TouchableOpacity, type TouchableOpacityProps } from 'react-native'

type Props = TouchableOpacityProps & {
  text: string
}

export const ButtonLight: React.FC<Props> = ({ text, ...props }) => {
  return (
    <TouchableOpacity
      className='w-full bg-white h-[50px] rounded-[7px] flex justify-center items-center border-[1px] border-zinc-700'
      activeOpacity={0.8}
      {...props}
    >
      <Text className="text-zinc-700 text-sm">{text}</Text>
    </TouchableOpacity>
  )
}
