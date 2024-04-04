import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 24,
  },
  title: {
    marginBottom: 8,
  },
  margins: {
    paddingHorizontal: configStyles.container.padding.horizontal,
  },
  btn: {
    marginTop: 20,
  },
})
