import { ScrollView } from 'react-native'

import { NavigationListButton, type NavigationListButtonProps } from '../atoms'
import { iconGoals, iconIncome, iconPlanning, iconSpending } from '@/assets'

const listItens: NavigationListButtonProps[] = [
  {
    icon: iconIncome,
    text: 'Renda'
  },
  {
    icon: iconPlanning,
    text: 'Planejamento'
  },
  {
    icon: iconSpending,
    text: 'Gastos'
  },
  {
    icon: iconGoals,
    text: 'Metas'
  }
]

export const NavigationList: React.FC = () => {
  return (
    <ScrollView className='w-full mt-2 pl-2.5' horizontal>
      {listItens.map(({ icon, text }, i) => <NavigationListButton key={i} icon={icon} text={text} />)}
    </ScrollView>
  )
}
