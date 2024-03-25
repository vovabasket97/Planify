import { FC, PropsWithChildren } from 'react'
import { Pressable, Text } from 'react-native'

import { styles } from './Button.styles'

interface ButtonProps extends PropsWithChildren {
  onPress: () => void
  type?: 'secondary'
}

const Button: FC<ButtonProps> = ({ onPress, children, type }) => {
  return (
    <Pressable style={[styles.button, type && styles[type]]} onPress={onPress}>
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  )
}

export default Button
