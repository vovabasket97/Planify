import FloatPlus from '@components/FloatPlus/FloatPlus'
import Header from '@components/Header/Header'
import { routesTitle } from '@configs/routes'
import { colors, configStyles } from '@configs/style'
import { AuthContext } from '@context/AuthContext'
import { useRoute } from '@react-navigation/native'
import { StackScreenProps } from '@react-navigation/stack'
import { useContext } from 'react'
import { SafeAreaView, ScrollView, StatusBar, StyleSheet, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface MainProviderProps {
  WrappedComponent: React.ComponentType<any>
  useContainer?: boolean
  useHeader?: boolean
  useScrollView?: boolean
}

const withMainProvider = ({ WrappedComponent, useContainer, useHeader, useScrollView = true }: MainProviderProps) => {
  return (props: StackScreenProps<any>) => {
    const isDarkMode = useColorScheme() === 'dark'
    const route = useRoute()
    const { user } = useContext(AuthContext)

    const isAddTaskRoute = route.name === 'AddTask'

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    const InnerTag = useScrollView ? ScrollView : View

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        {!isAddTaskRoute && user && <FloatPlus />}
        <View style={[backgroundStyle, useContainer && styles.container, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
          {useHeader && (
            <Header
              style={!useContainer && styles.margins}
              routeName={route.name as keyof typeof routesTitle}
              isAddTaskRoute={isAddTaskRoute}
            />
          )}
          <InnerTag showsVerticalScrollIndicator={false} style={[styles.scrollWrapper, useContainer && styles.scrollContainer]}>
            <View style={[useContainer && styles.innerScrollContainer]}>
              <WrappedComponent {...props} />
            </View>
          </InnerTag>
        </View>
      </SafeAreaView>
    )
  }
}

const styles = StyleSheet.create({
  margins: {
    paddingHorizontal: configStyles.container.padding.horizontal,
    marginTop: configStyles.container.padding.vertical,
  },
  container: {
    paddingHorizontal: configStyles.container.padding.horizontal,
    paddingTop: configStyles.container.padding.vertical,
    height: '100%',
    flexGrow: 1,
  },
  scrollWrapper: {
    height: '100%',
    backgroundColor: colors.white,
  },
  scrollContainer: {},
  innerScrollContainer: {
    marginBottom: configStyles.container.padding.vertical,
  },
})

export default withMainProvider
