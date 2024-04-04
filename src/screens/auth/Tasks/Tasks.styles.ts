import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 36,
  },
  margins: {
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  list: {
    marginBottom: 8,
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  noFound: {
    marginHorizontal: configStyles.container.padding.horizontal,
    color: 'rgba(0, 0, 0, 0.5)',
    marginTop: 16,
  },
})
