import { FC } from 'react'
import { UseControllerProps, useController, useFormContext } from 'react-hook-form'
import { TextInput as RNTextInput, TextInputProps as RNTextInputProps, Text, View } from 'react-native'

import { placeHolderColor, styles } from './Input.styles'

interface TextInputProps extends RNTextInputProps, UseControllerProps {
  name: string
  defaultValue?: string
  variant?: 'default' | 'filled'
}

interface InputProps extends TextInputProps {}

const ControlledInput = (props: TextInputProps) => {
  const formContext = useFormContext()
  const { formState } = formContext

  const { name, rules, defaultValue, variant, ...inputProps } = props

  const { field } = useController({ name, rules, defaultValue })

  const hasError = Boolean(formState?.errors[name])

  return (
    <View>
      <RNTextInput
        placeholderTextColor={placeHolderColor}
        style={[styles.input, styles[variant ?? 'filled']]}
        onChangeText={field.onChange}
        onBlur={field.onBlur}
        value={field.value}
        {...inputProps}
      />

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{(formState.errors[name]?.message as string) || 'Something unexpected happened'}</Text>
        </View>
      )}
    </View>
  )
}

const Input: FC<InputProps> = (props) => {
  const { name } = props

  const formContext = useFormContext()

  if (!formContext || !name) return null

  return <ControlledInput {...props} />
}

export default Input
