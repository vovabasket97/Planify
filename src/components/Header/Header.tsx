import BackIcon from '@assets/BackIcon'
import MenuIcon from '@assets/MenuIcon'
import { authNavigationType, routesTitle } from '@configs/routes'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { FC, useCallback } from 'react'
import { Pressable, Text, View } from 'react-native'

import { styles } from './Header.styles'

interface HeaderProps {
  routeName: keyof typeof routesTitle
  isAddTaskRoute: boolean
}

const Header: FC<HeaderProps> = ({ routeName, isAddTaskRoute }) => {
  const navigation = useNavigation<NavigationProp<authNavigationType>>()

  const onPressBack = useCallback(() => navigation.goBack(), [navigation])
  // @ts-ignore
  const onPressMenu = useCallback(() => navigation.openDrawer(), [navigation])

  return (
    <>
      <View style={styles.container}>
        <Pressable hitSlop={8} onPress={isAddTaskRoute ? onPressBack : onPressMenu}>
          {isAddTaskRoute ? <BackIcon style={styles.icon} /> : <MenuIcon style={styles.icon} />}
        </Pressable>
        <Text style={styles.text}>{routesTitle[routeName]}</Text>
        <View style={styles.icon}></View>
      </View>
    </>
  )
}

export default Header
