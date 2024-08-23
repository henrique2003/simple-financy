import { View } from 'react-native'

type Props = {
  children: JSX.Element
}

export const InformationBannerContainer: React.FC<Props> = ({ children }) => {
  return (
    <View className='w-full bg-zinc-300 p-4 rounded-[8px] mt-2'>
      {children}
    </View>
  )
}
