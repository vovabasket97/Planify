import { colors } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  block: {
    flexDirection: 'column',
    gap: 14,
    backgroundColor: '#EEEFF0',
    borderRadius: 16,
    padding: 12,
    paddingBottom: 20,
    width: '100%',
  },
  label: {
    fontSize: 10,
    lineHeight: 12,
    color: colors.darkBlue,
  },
  value: {
    fontWeight: '500',
    fontSize: 28,
    lineHeight: 33,
    color: colors.darkBlue,
  },
  secondary: {
    backgroundColor: '#FFF4F4',
  },
  secondaryLabel: {
    color: '#FF3726',
  },
  secondaryValue: {
    color: '#FF3726',
  },
})
