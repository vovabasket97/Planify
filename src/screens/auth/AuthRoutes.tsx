import withMainProvider from '@providers/MainProvider'
import { createStackNavigator } from '@react-navigation/stack'
import Home from '@screens/auth/Home/Home'

export type authNavigationType = {
  Home?: {}
}

const Stack = createStackNavigator()

const AuthRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Home">
      <Stack.Screen name="Home" component={withMainProvider({ WrappedComponent: Home })} />
    </Stack.Navigator>
  )
}

export default AuthRoutes
