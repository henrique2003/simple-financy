import React from 'react'
import { ImageBackground, Text, View } from 'react-native'

import { bgRegister } from '@/assets'
import { ButtonDark, Container, InputText } from '@/components'

export const Register: React.FC = () => {
  return (
    <Container>
      <View className='flex-1 justify-center items-center'>
        <View className='flex-1 bg-slate-500 w-full h-full'>
          <ImageBackground source={bgRegister} className='w-full h-full'>
            <View className='bg-[#3C3A398a] w-full h-full items-center justify-end'>
              <Text className='text-white text-2xl font-extrabold text-center'>Novo por aqui!</Text>
              <Text className='text-zinc-300 text-sm mb-10 mt-3 text-center max-w-[250px]'>Realize o seu cadastro e vamos planejar o seu futuro!</Text>
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
          <ButtonDark
            text='Cadastre-se'
          />
        </View>
      </View>
    </Container>
  )
}
