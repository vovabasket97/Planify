import withMainProvider from '@providers/MainProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/Home/Home'
import 'react-native-gesture-handler'

const Stack = createStackNavigator()

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
}

export type navigationType = {
  Home: {}
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={withMainProvider({ WrappedComponent: Home })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
