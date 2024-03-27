import Button from '@components/Button/Button'
import type { StackScreenProps } from '@react-navigation/stack'
import { commonNavigationType } from '@screens/CommonRoutes'
import { Image, Text, View } from 'react-native'

import { styles } from './Welcome.styles'

const Welcome = ({ navigation }: StackScreenProps<commonNavigationType, 'Welcome'>) => {
  return (
    <View style={styles.home}>
      <View style={styles.imageWrapper}>
        <Image style={styles.image} source={require('../../assets/welcome-bg.png')} />
      </View>
      <View style={styles.wrapper}>
        <Text style={styles.heading}>Best task management app</Text>
        <Text style={styles.text}>Get organized by sorting out all your tasks and boost your productivity.</Text>
        <View style={styles.buttons}>
          <Button onPress={() => navigation.navigate('SignIn')}>Log in</Button>
          <Button type="secondary" onPress={() => {}}>
            Get started
          </Button>
        </View>
      </View>
    </View>
  )
}

export default Welcome
