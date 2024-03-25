import { configStyles } from '@configs/style'
import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  home: {
    flexDirection: 'column',
    height: '100%',
  },
  imageWrapper: {
    flex: 1,
    marginBottom: -30,
  },
  image: {
    width: '100%',
    height: '100%',
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
    color: '#173147',
    marginBottom: configStyles.attractionsGrid.gap,
  },
  text: {
    fontWeight: '400',
    lineHeight: 20,
    textAlign: 'center',
    letterSpacing: -0.24,
    color: '#8B97A8',
  },
  buttons: {
    marginTop: 40,
    flexDirection: 'column',
    gap: configStyles.attractionsGrid.gap,
  },
})
