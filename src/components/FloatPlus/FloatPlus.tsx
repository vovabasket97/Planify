import PlusIcon from '@assets/PlusIcon'
import { authNavigationType } from '@configs/routes'
import { NavigationProp, useNavigation } from '@react-navigation/native'
import { FC } from 'react'
import { Pressable } from 'react-native'

import { styles } from './FloatPlus.styles'

interface FloatPlusProps {}

const FloatPlus: FC<FloatPlusProps> = () => {
  const navigation = useNavigation<NavigationProp<authNavigationType>>()

  return (
    <Pressable onPress={() => navigation.navigate('AddTask')} style={styles.float} hitSlop={8}>
      <PlusIcon />
    </Pressable>
  )
}

export default FloatPlus
