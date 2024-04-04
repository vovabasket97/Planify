import { FC } from 'react'
import { StyleProp, Text, View, ViewStyle } from 'react-native'

import { styles } from './TasksSummarize.styles'

interface TasksSummarizeProps {
  label: string
  value: number
  style?: StyleProp<ViewStyle>
  variant?: 'secondary' | null
}

const TasksSummarize: FC<TasksSummarizeProps> = ({ label, value, style, variant }) => {
  return (
    <View style={[styles.block, !!variant && styles[variant], style]}>
      <Text style={[styles.label, !!variant && styles[`${variant}Label`]]}>{label}</Text>
      <Text style={[styles.value, !!variant && styles[`${variant}Value`]]}>{value}</Text>
    </View>
  )
}

export default TasksSummarize
