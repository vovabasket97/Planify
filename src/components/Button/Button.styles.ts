import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: configStyles.colors.button.primaryBg,
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    color: configStyles.colors.button.text,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  secondary: {
    backgroundColor: configStyles.colors.button.secondaryBg,
  },
  text_secondary: {
    color: configStyles.colors.button.text,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  unstyled: {
    backgroundColor: configStyles.colors.button.unstyledBg,
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  text_unstyled: {
    color: configStyles.colors.button.unstyledText,
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
})
