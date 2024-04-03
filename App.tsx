import AuthContextComponent from '@context/AuthContext'
import AuthProvider from '@providers/AuthProvider'
import { DefaultTheme, NavigationContainer } from '@react-navigation/native'
import AuthRoutes from '@screens/auth/AuthRoutes'
import 'react-native-gesture-handler'

const navigationTheme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: '#ffffff',
  },
}

function App(): React.JSX.Element {
  return (
    <NavigationContainer theme={navigationTheme}>
      <AuthContextComponent>
        <AuthProvider>
          <AuthRoutes />
        </AuthProvider>
      </AuthContextComponent>
    </NavigationContainer>
  )
}

export default App
