import Button from '@components/Button/Button'
import { commonNavigationType } from '@configs/routes'
import type { StackScreenProps } from '@react-navigation/stack'
import { Image, Text, View } from 'react-native'
import { useWindowDimensions } from 'react-native'

import { styles } from './Welcome.styles'

const Welcome = ({ navigation }: StackScreenProps<commonNavigationType, 'Welcome'>) => {
  const { height } = useWindowDimensions()

  return (
    <View style={styles.home}>
      <View style={styles.imageWrapper}>
        <Image
          style={[styles.image, { height: Math.max(300, Math.min(height * 0.5, 600)) }]}
          source={require('../../assets/welcome-bg.png')}
        />
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
