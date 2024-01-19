import { TouchableOpacity, type TouchableOpacityProps } from 'react-native'
import Feather from '@expo/vector-icons/Feather'

export type Props = TouchableOpacityProps

export const LogoutButton: React.FC<Props> = ({ ...props }) => {
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      {...props}
      className='rotate-180'
    >
      <Feather name='log-out' size={20} color='white' />
    </TouchableOpacity>
  )
}
