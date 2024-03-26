import { StyleSheet } from 'react-native'

export const styles = StyleSheet.create({
  button: {
    width: '100%',
    paddingVertical: 12,
    paddingHorizontal: 12,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#403572',
    borderRadius: 10,
    textAlign: 'center',
  },
  text: {
    color: 'white',
  },
  secondary: {
    backgroundColor: '#4681A3',
  },
  text_secondary: {
    color: 'white',
  },
  unstyled: {
    backgroundColor: 'transparent',
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  text_unstyled: {
    color: '#403572',
    fontWeight: '700',
    fontSize: 15,
    lineHeight: 20,
    letterSpacing: -0.24,
  },
})
