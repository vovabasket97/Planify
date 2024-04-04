import { colors, configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  list: {},
  item: {
    fontWeight: '600',
    fontSize: 12,
    color: colors.darkBlue,
  },
  active: {
    color: colors.darkBlue,
  },
  container: {
    borderWidth: 1,
    borderColor: colors.darkBlue,
    paddingVertical: 10,
    paddingHorizontal: 14,
    borderRadius: 8,
  },
  content: {
    flexDirection: 'row',
    gap: configStyles.attractionsGrid.gap,
  },
  selectedContainer: {
    borderColor: colors.transparent,
    backgroundColor: '#EEEFF0',
  },
})
