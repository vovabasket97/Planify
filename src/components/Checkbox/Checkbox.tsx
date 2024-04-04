import { FC, PropsWithChildren } from 'react'
import { Pressable, StyleProp, Text, View, ViewStyle } from 'react-native'

import { styles } from './Checkbox.styles'

interface CheckboxProps extends PropsWithChildren {
  onPress?: () => void
  value: boolean
  style?: StyleProp<ViewStyle>
  lineThrough?: boolean
}

const Checkbox: FC<CheckboxProps> = ({ onPress, value, children, style, lineThrough }) => {
  return (
    <Pressable onPress={onPress} style={[styles.checkboxContainer, style]}>
      <View style={styles.container}>{value && <View style={styles.innerSquare} />}</View>
      <Text style={lineThrough && value && styles.textDecorationLine}>{children}</Text>
    </Pressable>
  )
}

export default Checkbox
