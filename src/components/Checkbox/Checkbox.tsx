import { FC, PropsWithChildren } from 'react'
import { UseControllerProps, useController, useFormContext } from 'react-hook-form'
import { Pressable, Text, View } from 'react-native'

import { styles } from './Checkbox.styles'

interface CheckboxProps extends UseControllerProps, PropsWithChildren {}

const ControlledCheckbox: FC<CheckboxProps> = (props) => {
  const formContext = useFormContext()
  const { formState } = formContext

  const { name, rules, defaultValue, children, ...inputProps } = props

  const { field } = useController({ name, rules, defaultValue })

  const hasError = Boolean(formState?.errors[name])

  return (
    <View style={styles.wrapper}>
      <Pressable onPress={() => field.onChange(!field.value)} style={styles.checkboxContainer}>
        <View style={styles.container}>{field.value && <View style={styles.innerSquare} />}</View>
        {children}
      </Pressable>

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{(formState.errors[name]?.message as string) || 'Something unexpected happened'}</Text>
        </View>
      )}
    </View>
  )
}

const Checkbox: FC<CheckboxProps> = (props) => {
  const { name } = props

  const formContext = useFormContext()

  if (!formContext || !name) return null

  return <ControlledCheckbox {...props} />
}

export default Checkbox
