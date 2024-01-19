import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import { bgLogin } from '@/assets'
import { ButtonLight, Container, InputText } from '@/components'
import { useRouter } from 'expo-router'

export const Login: React.FC = () => {
  const router = useRouter()

  return (
    <Container>
      <View className='flex-1 justify-center items-center'>
        <View className='flex-1 bg-slate-500 w-full h-full'>
          <ImageBackground source={bgLogin} className='w-full h-full'>
            <View className='bg-[#3C3A398a] w-full h-full items-center justify-end'>
              <Text className='text-white text-2xl font-extrabold text-center'>Bem vindo de volta!</Text>
              <Text className='text-zinc-300 text-sm mb-10 mt-3 text-center max-w-[250px]'>Vamos gerenciar suas finanças junto? O futuro só depende de você!</Text>
            </View>
          </ImageBackground>
        </View>
        <View className='w-full p-10 bg-white flex justify-center items-center min-h-[270px]'>
          <InputText
            placeholder='Usuário'
          />
          <InputText
            placeholder='Senha'
            className='my-5'
            secureTextEntry
          />
          <ButtonLight
            text='Entrar'
            onPress={() => router.push('/home')}
          />
        </View>
      </View>
    </Container>
  )
}
