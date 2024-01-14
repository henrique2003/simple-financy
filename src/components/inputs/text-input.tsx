import { TextInput, type TextInputProps } from 'react-native'

type Props = TextInputProps

export const InputText: React.FC<Props> = ({ ...props }) => {
  return (
    <TextInput
      className='w-full bg-gray-200 text-gray-600 h-[50px] rounded-[7px] px-5 text-left flex items-center justify-center'
      {...props}
    />
  )
}
