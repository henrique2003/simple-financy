import { TouchableOpacity, View, type TouchableOpacityProps, Text } from 'react-native'
import { Image } from 'expo-image'

export type NavigationListButtonProps = TouchableOpacityProps & {
  icon: string
  text: string
}

export const NavigationListButton: React.FC<NavigationListButtonProps> = ({ icon, text, ...props }) => {
  return (
    <View className='justify-center items-center min-w-[80px]'>
      <TouchableOpacity
        className='w-[60px] h-[60px] rounded-[8px] bg-zinc-300 items-center justify-center'
        {...props}
      >
        <Image source={icon} className='w-[27px] h-[27px]' />
      </TouchableOpacity>
      <Text className='text-sm w-full border border-black text-zinc-600 text-center mt-1'>{text}</Text>
    </View>
  )
}
