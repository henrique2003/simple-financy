import { Text, View } from 'react-native'
import { InformationBannerContainer } from './information-banner-container'

export type GoalsItemBannerProps = {
  type: string
  value: string
}

export const GoalsItemBanner: React.FC<GoalsItemBannerProps> = ({ type, value }) => {
  return (
    <View className='max-w-[330px]'>
      <InformationBannerContainer>
        <Text className='text-sm text-zinc-600'>
          Você alcançará a sua meta de comprar um carro em
          <Text className='font-bold'> {type} </Text>
          em
          <Text className='font-bold'>{value}</Text>!
        </Text>
      </InformationBannerContainer>
    </View>
  )
}
