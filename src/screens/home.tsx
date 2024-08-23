import { ScrollView, View } from 'react-native'

import { FirstAccessBanner, Container, Header, Line, Budgets, Goals } from '@/components'
import { MoneyCounter } from '../components/organisms/money-counter'
import { NavigationList } from '../components/organisms/navigation-list'

export const Home: React.FC = () => {
  return (
    <Container>
      <ScrollView className='flex-1' showsVerticalScrollIndicator={false}>
        <View className='w-full'>
          <Header />
          <View className='px-5 py-5 w-full'>
            <MoneyCounter />
          </View>
          <NavigationList />
          <View className='p-5 w-full mb-5'>
            <FirstAccessBanner />
          </View>
          <Line />
          <Budgets />
          <Line />
          <Goals />
        </View>
      </ScrollView>
    </Container>
  )
}
