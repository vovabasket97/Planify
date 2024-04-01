import { privacy_policy, terms_and_conditions } from '@configs/links'
import { DrawerContentComponentProps, DrawerContentScrollView, DrawerItemList } from '@react-navigation/drawer'
import { logOut } from '@utils/auth/logout'
import { Linking, Text } from 'react-native'

import { styles } from './DrawerContent.styles'

const DrawerContent = (props: DrawerContentComponentProps) => {
  return (
    <DrawerContentScrollView {...props}>
      <Text style={styles.link} onPress={() => props.navigation.navigate('Home')}>
        Home
      </Text>
      <Text style={styles.link} onPress={() => props.navigation.navigate('AddTask')}>
        Tasks
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(privacy_policy)}>
        Privacy Policy
      </Text>
      <Text style={styles.link} onPress={() => Linking.openURL(terms_and_conditions)}>
        Terms and Conditions
      </Text>
      <Text style={styles.link} onPress={logOut}>
        Log Out
      </Text>
    </DrawerContentScrollView>
  )
}

export default DrawerContent
