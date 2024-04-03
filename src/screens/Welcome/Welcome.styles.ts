import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  home: {
    flexDirection: 'column',
  },
  imageWrapper: {
    marginBottom: -30,
  },
  image: {
    width: '100%',
  },
  wrapper: {
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingHorizontal: 40,
    paddingTop: 50,
    paddingBottom: 35,
    backgroundColor: 'white',
  },
  heading: {
    fontWeight: '700',
    fontSize: 22,
    lineHeight: 34,
    letterSpacing: 0.36,
    color: configStyles.colors.heading,
    marginBottom: configStyles.attractionsGrid.gap,
  },
  text: {
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: configStyles.colors.text.light,
  },
  buttons: {
    marginTop: 40,
    flexDirection: 'column',
    gap: configStyles.attractionsGrid.gap,
  },
})
