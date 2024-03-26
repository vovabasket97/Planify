import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  input: {
    backgroundColor: configStyles.colors.input.bg,
    borderRadius: 10,
    height: 48,
    color: configStyles.colors.input.color,
    paddingVertical: 12,
    paddingHorizontal: 24,
  },
  errorContainer: {
    marginTop: 4,
  },
  error: {
    color: configStyles.colors.input.error,
  },
})

export const placeHolderColor = configStyles.colors.input.placeholderColor
