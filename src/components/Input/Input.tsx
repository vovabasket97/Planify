import { FC } from 'react'
import { TextInput, TextInputProps } from 'react-native'

import { placeHolderColor, styles } from './Input.styles'

interface InputProps extends TextInputProps {}

const Input: FC<InputProps> = ({ ...props }) => {
  return <TextInput placeholderTextColor={placeHolderColor} style={styles.input} {...props} />
}

export default Input
