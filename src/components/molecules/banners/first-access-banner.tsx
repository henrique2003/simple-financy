import { Text } from 'react-native'
import { InformationBannerContainer } from '../../atoms'

export const FirstAccessBanner: React.FC = () => {
  return (
    <InformationBannerContainer>
      <Text className='text-sm text-zinc-600'>
        Sua primeira vez aqui? Vamos começar <Text className='font-bold'>atualizando</Text> as suas informacoes de renda mensal!
      </Text>
    </InformationBannerContainer>
  )
}
