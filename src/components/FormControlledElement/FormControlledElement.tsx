import { FC, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, UseControllerProps, useController, useFormContext } from 'react-hook-form'
import { Text, View } from 'react-native'

import { styles } from './FormControlledElement.styles'

interface FormControlledElementProps extends UseControllerProps {
  renderItem: (field: Omit<ControllerRenderProps<FieldValues, string>, 'ref'>) => ReactNode
  name: string
  defaultValue?: string
}

const FormControlledElement: FC<FormControlledElementProps> = ({ renderItem: RenderItem, name, defaultValue, rules }) => {
  const formContext = useFormContext()
  const { field } = useController({ name, rules, defaultValue })
  const { ref, ...fieldProps } = field

  if (!formContext || !name) return null

  const { formState } = formContext
  const hasError = Boolean(formState?.errors[name])

  return (
    <View>
      <RenderItem {...fieldProps} />

      {hasError && (
        <View style={styles.errorContainer}>
          <Text style={styles.error}>{(formState.errors[name]?.message as string) || 'Something unexpected happened'}</Text>
        </View>
      )}
    </View>
  )
}

export default FormControlledElement
