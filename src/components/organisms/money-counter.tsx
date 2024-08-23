import { Storage } from '@/utils'
import { Feather } from '@expo/vector-icons'
import { useEffect, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { InputText } from '../atoms/inputs/text-input'

const storage = new Storage()

export const MoneyCounter: React.FC = () => {
  const [showMoney, setShowMoney] = useState(false)

  useEffect(() => {
    void getShowMoneyState()

    async function getShowMoneyState(): Promise<void> {
      const result = await storage.setItem<boolean>('show-money', showMoney)

      if (result.ok) {
        setShowMoney(result.value)
      }

      setShowMoney(false)
    }
  }, [])

  async function toggleShowMeney(): Promise<void> {
    await storage.setItem('show-money', showMoney)

    setShowMoney(!showMoney)
  }

  return (
    <View className='w-full flex-row justify-between items-center'>
      <View className='flex-1'>
        <Text className='text-zinc-700 text-lg font-bold'>Total</Text>
        <View className='flex-row'>
          <Text className='text-zinc-700 text-base font-bold'>R$ </Text>
          <InputText
            className='text-zinc-700 text-base font-bold bg-transparent p-0 m-0 h-4'
            value='0,00'
            secureTextEntry={!showMoney}
            editable={false}
          />
        </View>
      </View>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={async () => await toggleShowMeney()}
      >
        {showMoney ? <Feather name="eye" size={22} color="black" /> : <Feather name="eye-off" size={22} color="black" />}
      </TouchableOpacity>
    </View>
  )
}
