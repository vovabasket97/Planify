const colors = {
  purple: '#403572',
  darkBlue: '#4681A3',
  white: 'white',
  black: 'black',
  transparent: 'transparent',
  error: '#980300',
  grayLight: '#E7E7E7',
  grayDark: '#707070',
}

export const configStyles = {
  container: {
    padding: {
      vertical: 24,
      horizontal: 24,
    },
    getContainerWidth(screenWidth: number) {
      return screenWidth - this.padding.horizontal * 2
    },
  },
  attractionsGrid: {
    gap: 16,
  },
  colors: {
    input: {
      bg: colors.grayLight,
      color: colors.black,
      placeholderColor: colors.grayDark,
      error: colors.error,
    },
    button: {
      text: colors.white,
      primaryBg: colors.purple,
      secondaryBg: colors.darkBlue,
      unstyledText: colors.purple,
      unstyledBg: colors.transparent,
    },
    checkbox: {
      border: colors.purple,
      innnerBg: colors.purple,
      bg: colors.white,
    },
    heading: '#173147',
    text: {
      light: '#8B97A8',
    },
    link: colors.purple,
  },
}
