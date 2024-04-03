import { FC, PropsWithChildren } from 'react'
import { Pressable, StyleProp, Text, ViewStyle } from 'react-native'

import { styles } from './Button.styles'

interface ButtonProps extends PropsWithChildren {
  onPress: () => void
  type?: 'secondary' | 'unstyled'
  style?: StyleProp<ViewStyle>
}

const Button: FC<ButtonProps> = ({ onPress, children, type, style }) => {
  return (
    <Pressable style={[styles.button, type && styles[type], style]} onPress={onPress}>
      <Text style={[styles.text, type && styles[`text_${type}`]]}>{children}</Text>
    </Pressable>
  )
}

export default Button
