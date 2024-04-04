import { colors } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  float: {
    display: 'flex',
    flexDirection: 'column',
    borderRadius: 360,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.darkBlue,
    width: 48,
    height: 48,
    position: 'absolute',
    right: 28,
    bottom: 20,
    zIndex: 10,
  },
})
