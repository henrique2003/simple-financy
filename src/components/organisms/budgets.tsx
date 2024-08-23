import { ScrollView, Text, View } from 'react-native'
import { BudgetItemBanner, type BudgetItemBannerProps } from '../atoms/banners/budget-item-banner'
import { useEffect, useState } from 'react'

const budgetsData = [
  {
    type: 'Ubber',
    value: 200.00
  },
  {
    type: 'Gastos gerais',
    value: 150.00
  }
]

export const Budgets: React.FC = () => {
  const [budgets, setBudgets] = useState<BudgetItemBannerProps[]>([])

  useEffect(() => {
    setBudgets(budgetsData)
  }, [budgetsData])

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
        {budgets.map(({ type, value }, i) => (
          <BudgetItemBanner
            key={i}
            type={type}
            value={value}
          />
        ))}
      </ScrollView>
    </View>
  )
}
