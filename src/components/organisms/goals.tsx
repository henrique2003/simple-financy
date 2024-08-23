import { ScrollView, Text, View } from 'react-native'
import { useEffect, useState } from 'react'
import { GoalsItemBanner, type GoalsItemBannerProps } from '../atoms'

const goalsData = [
  {
    type: 'carro',
    value: '1 ano e 2 meses'
  },
  {
    type: 'apartamento',
    value: '2 anos e 2 dias'
  }
]

export const Goals: React.FC = () => {
  const [goals, setgoals] = useState<GoalsItemBannerProps[]>([])

  useEffect(() => {
    setgoals(goalsData)
  }, [goalsData])

  return (
    <View className='w-full my-7 mb-9'>
      <Text className='text-zinc-600 text-xl font-bold ml-5'>Meus Orçamentos</Text>
      <ScrollView
        className='w-full mt-4'
        horizontal
        contentContainerStyle={{
          gap: 20,
          marginHorizontal: 20,
          paddingEnd: 40
        }}
        showsHorizontalScrollIndicator={false}
      >
        {goals.map(({ type, value }, i) => (
          <GoalsItemBanner
            key={i}
            type={type}
            value={value}
          />
        ))}
      </ScrollView>
    </View>
  )
}
