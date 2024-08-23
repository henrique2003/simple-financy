import { Text, View } from 'react-native'
import { InformationBannerContainer } from './information-banner-container'

export type BudgetItemBannerProps = {
  type: string
  value: number
}

export const BudgetItemBanner: React.FC<BudgetItemBannerProps> = ({ type, value }) => {
  return (
    <View className='max-w-[250px]'>
      <InformationBannerContainer>
        <Text className='text-sm text-zinc-600'>
          Você tem até
          <Text className='font-bold'> R$ {value.toFixed(2).replace('.', ',')} </Text>
          disponíveis para {type}.</Text>
      </InformationBannerContainer>
    </View>
  )
}
