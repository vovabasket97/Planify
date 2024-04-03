import Title from '@components/Title/Title'
import { logOut } from '@utils/auth/logout'
import { Text } from 'react-native'

const Home = () => {
  return (
    <>
      <Title>Daily Tasks:</Title>
      <Text onPress={logOut}>log out</Text>
    </>
  )
}

export default Home
