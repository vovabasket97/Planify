import auth from '@react-native-firebase/auth'
import { FC } from 'react'
import { Text } from 'react-native'

interface HomeProps {}

const Home: FC<HomeProps> = () => {
  const logOut = () => {
    auth()
      .signOut()
      .then(() => console.log('User signed out!'))
  }

  return (
    <>
      <Text>Home</Text>
      <Text onPress={logOut}>log out</Text>
    </>
  )
}

export default Home
