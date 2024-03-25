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
}
