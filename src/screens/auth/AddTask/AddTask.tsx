import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import Label from '@components/Label/Label'
import Title from '@components/Title/Title'
import { FC } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Text, View } from 'react-native'

import { styles } from './AddTask.styles'

interface AddTaskProps {}

type FormValues = {
  description: string
  type: string
  deadline: string
}

const AddTask: FC<AddTaskProps> = () => {
  const { ...methods } = useForm<FormValues>({
    mode: 'onChange',
  })

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    console.log({ data })
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Title style={styles.title}>Add New Task</Title>
        <Label label="Describe the task">
          <Input variant="default" placeholder="Type here..." name="description" rules={{ required: 'Description is required!' }} />
        </Label>
        <Label label="Type">
          <Text>TEST 123</Text>
        </Label>
        <Label label="Deadline">
          <Text>TEST 123</Text>
        </Label>
        <Button style={styles.btn} type="secondary" onPress={methods.handleSubmit(onSubmit, onError)}>
          Add the task
        </Button>
      </View>
    </FormProvider>
  )
}

export default AddTask
