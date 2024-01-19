import { View, ImageBackground, Text } from 'react-native'

import { bgHeader } from '@/assets'
import { LogoutButton } from '../atoms'

export const Header: React.FC = () => {
  return (
    <View className='w-full h-[200px]'>
      <ImageBackground source={bgHeader} resizeMethod='scale' className='w-full h-full'>
        <View className='px-5 py-10 bg-[#3C3A398a] w-full h-full'>
          <View className='flex-row justify-between items-center mb-10'>
            <LogoutButton />
            <Text className='text-white font-extrabold text-2xl'>Perfil</Text>
            <View></View>
          </View>
          <Text className='text-center text-[18px] font-semibold text-white'>Olá, Henrique!</Text>
          <Text className='text-center text-[15px] mt-2 text-white'>Vamos organizar o seu futuro financeiro?</Text>
        </View>
      </ImageBackground>
    </View>
  )
}
