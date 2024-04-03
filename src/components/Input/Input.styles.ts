import { colors, configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  input: {
    borderRadius: 10,
    height: 48,
    paddingVertical: 12,
    paddingHorizontal: 24,
    color: colors.black,
  },
  errorContainer: {
    marginTop: 4,
  },
  error: {
    marginTop: 4,
    color: configStyles.colors.input.error,
  },
  default: {
    borderColor: colors.havyBlue,
    borderWidth: 1,
    fontSize: 12,
    lineHeight: 17,
    letterSpacing: 0.210931,
  },
  filled: {
    backgroundColor: configStyles.colors.input.bg,
    color: configStyles.colors.input.color,
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
})

export const placeHolderColor = configStyles.colors.input.placeholderColor
