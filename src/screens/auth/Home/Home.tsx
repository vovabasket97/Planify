import { logOut } from '@utils/auth/logout'
import { Text } from 'react-native'

const Home = () => {
  return (
    <>
      <Text>Home</Text>
      <Text onPress={logOut}>log out</Text>
    </>
  )
}

export default Home
