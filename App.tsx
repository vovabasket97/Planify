import withMainProvider from '@providers/MainProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/Home/Home'
import SignIn from '@screens/SignIn/SignIn'
import SignUp from '@screens/SignUp/SignUp'
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
  Home?: {}
  SignIn?: {}
  SignUp?: {}
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
        <Stack.Screen name="Home" component={withMainProvider({ WrappedComponent: Home })} />
        <Stack.Screen name="SignIn" component={withMainProvider({ WrappedComponent: SignIn })} />
        <Stack.Screen name="SignUp" component={withMainProvider({ WrappedComponent: SignUp })} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App
