import { FC, PropsWithChildren } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import { styles } from './Label.syles'

interface LabelProps extends PropsWithChildren {
  label: string
  style?: StyleProp<ViewStyle>
  styleLabel?: StyleProp<ViewStyle>
}

const Label: FC<LabelProps> = ({ label, children, style, styleLabel }) => {
  return (
    <View style={[styles.container, style]}>
      <Text style={[styles.label, styleLabel]}>{label}</Text>
      {children}
    </View>
  )
}

export default Label
