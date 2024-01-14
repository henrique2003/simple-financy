import { KeyboardAvoidingView, Platform } from 'react-native'
import { SafeAreaProvider } from 'react-native-safe-area-context'

type Props = {
  children?: JSX.Element
}

export const Container: React.FC<Props> = ({ children }) => {
  return (
    <SafeAreaProvider>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} className='flex-1'>
        {children}
      </KeyboardAvoidingView>
    </SafeAreaProvider>
  )
}
