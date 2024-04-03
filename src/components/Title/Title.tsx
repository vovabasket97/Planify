import { FC, PropsWithChildren } from 'react'
import { StyleProp, Text, ViewStyle } from 'react-native'

import { styles } from './Title.styles'

interface TitleProps extends PropsWithChildren {
  style?: StyleProp<ViewStyle>
}

const Title: FC<TitleProps> = ({ children, style }) => {
  return <Text style={[styles.text, style]}>{children}</Text>
}

export default Title
