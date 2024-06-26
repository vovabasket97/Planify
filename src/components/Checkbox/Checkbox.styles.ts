import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  wrapper: {
    width: '100%',
    flex: 1,
  },
  checkboxContainer: {
    width: '100%',
    gap: 8,
    flexDirection: 'row',
    flex: 1,
    alignItems: 'center',
  },
  container: {
    borderWidth: 1,
    borderRadius: 4,
    height: 16,
    width: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: configStyles.colors.checkbox.border,
    backgroundColor: configStyles.colors.checkbox.bg,
  },
  innerSquare: {
    width: 10,
    height: 10,
    backgroundColor: configStyles.colors.checkbox.innnerBg,
  },
  errorContainer: {
    marginTop: 4,
  },
  error: {
    color: configStyles.colors.input.error,
  },
  textDecorationLine: {
    textDecorationLine: 'line-through',
  },
})
