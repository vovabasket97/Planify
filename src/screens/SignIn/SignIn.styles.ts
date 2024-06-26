import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: configStyles.container.padding.horizontal,
    paddingVertical: configStyles.container.padding.vertical,
  },
  heading: {
    fontWeight: '700',
    fontSize: 28,
    lineHeight: 34,
    letterSpacing: 0.36,
    color: configStyles.colors.heading,
    marginBottom: 36,
  },
  inputes: {
    gap: 24,
    marginBottom: 46,
  },
  register: {
    marginTop: 36,
    textAlign: 'center',
    color: configStyles.colors.text.light,
    fontWeight: '400',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
  registerLink: {
    fontWeight: '700',
    color: configStyles.colors.link,
  },
})
