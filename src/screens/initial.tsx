import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import { bgInitial } from '@/assets'
import { ButtonDark, ButtonLight } from '@/components'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { useRouter } from 'expo-router'

export const Initial: React.FC = () => {
  const router = useRouter()

  return (
    <SafeAreaProvider>
      <View className='flex-1 justify-center items-center'>
        <View className='flex-1 bg-slate-500 w-full h-full'>
          <ImageBackground source={bgInitial} className='w-full h-full'>
            <View className='bg-[#3C3A398a] w-full h-full items-center justify-end'>
              <Text className='text-white uppercase text-3xl mb-10 font-extrabold max-w-[200px] leading-8 text-center'>Simple Fynance</Text>
            </View>
          </ImageBackground>
        </View>
        <View className='w-full p-10 bg-white flex justify-center items-center min-h-[270px]'>
          <Text className='text-sm text-zinc-700'>Conheça agora uma maneira facil de orgazinar os seus gastos!</Text>
          <ButtonDark
            text='Cadastrer-se'
            className='mb-5 mt-5'
            onPress={() => router.push('/register')}
          />
          <ButtonLight
            text='Entrar'
            onPress={() => router.push('/login')}
          />
        </View>
      </View>
    </SafeAreaProvider>
  )
}
