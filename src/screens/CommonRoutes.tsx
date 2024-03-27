import withMainProvider from '@providers/MainProvider'
import { createStackNavigator } from '@react-navigation/stack'
import SignIn from '@screens/SignIn/SignIn'
import SignUp from '@screens/SignUp/SignUp'
import Welcome from '@screens/Welcome/Welcome'

export type commonNavigationType = {
  Welcome?: {}
  SignIn?: {}
  SignUp?: {}
}

const Stack = createStackNavigator()

const CommonRoutes = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName="Welcome">
      <Stack.Screen name="Welcome" component={withMainProvider({ WrappedComponent: Welcome })} />
      <Stack.Screen name="SignIn" component={withMainProvider({ WrappedComponent: SignIn })} />
      <Stack.Screen name="SignUp" component={withMainProvider({ WrappedComponent: SignUp })} />
    </Stack.Navigator>
  )
}

export default CommonRoutes
