import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 12,
  },
  label: {
    fontWeight: '500',
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.210931,
    color: configStyles.colors.heading,
  },
})
