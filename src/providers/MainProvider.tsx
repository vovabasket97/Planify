import { StackScreenProps } from '@react-navigation/stack'
import { SafeAreaView, StatusBar, View, useColorScheme } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

interface MainProviderProps {
  WrappedComponent: React.ComponentType<any>
}

const withMainProvider = ({ WrappedComponent }: MainProviderProps) => {
  return (props: StackScreenProps<any>) => {
    const isDarkMode = useColorScheme() === 'dark'

    const backgroundStyle = {
      backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
    }

    return (
      <SafeAreaView style={backgroundStyle}>
        <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} backgroundColor={backgroundStyle.backgroundColor} />
        <View style={[backgroundStyle, { backgroundColor: isDarkMode ? Colors.black : Colors.white }]}>
          <WrappedComponent {...props} />
        </View>
      </SafeAreaView>
    )
  }
}

export default withMainProvider
