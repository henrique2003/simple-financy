import { View } from 'react-native'

import { Container, Header } from '@/components'
import { MoneyCounter } from '../components/molecules/money-counter'
import { NavigationList } from '../components/molecules/navigation-list'

export const Home: React.FC = () => {
  return (
    <Container>
      <View className='w-full'>
        <Header />
        <View className='px-5 py-5 w-full'>
          <MoneyCounter />
        </View>
        <NavigationList />
      </View>
    </Container>
  )
}
