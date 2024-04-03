import { FC, ReactNode } from 'react'
import { ControllerRenderProps, FieldValues, useController, useFormContext } from 'react-hook-form'

interface FormControlledElementProps {
  renderItem: (field: Omit<ControllerRenderProps<FieldValues, string>, 'ref'>) => ReactNode
  name: string
  defaultValue?: string
}

const FormControlledElement: FC<FormControlledElementProps> = ({ renderItem: RenderItem, name, defaultValue }) => {
  const formContext = useFormContext()
  const { field } = useController({ name, defaultValue })
  const { ref, ...fieldProps } = field

  if (!formContext || !name) return null

  return <RenderItem {...fieldProps} />
}

export default FormControlledElement
