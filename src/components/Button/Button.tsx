import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { styles } from './Button.styles'

interface ButtonProps extends PropsWithChildren {
  onPress: () => void
  type?: 'secondary' | 'unstyled'
}

const Button: FC<ButtonProps> = ({ onPress, children, type }) => {
  return (
    <Pressable style={[styles.button, type && styles[type]]} onPress={onPress}>
      <Text style={[styles.text, type && styles[`text_${type}`]]}>{children}</Text>
    </Pressable>
  )
}

export default Button
