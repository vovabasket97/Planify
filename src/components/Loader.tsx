import { colors, configStyles } from '@configs/style'
import { FC } from 'react'
import { ActivityIndicator, StyleSheet, View } from 'react-native'

interface LoaderProps {}

const Loader: FC<LoaderProps> = () => {
  return (
    <View style={styles.container}>
      <ActivityIndicator size="large" color={colors.black} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    paddingHorizontal: configStyles.container.padding.horizontal,
    paddingVertical: configStyles.container.padding.vertical,
    justifyContent: 'center',
    alignItems: 'center',
  },
})

export default Loader
