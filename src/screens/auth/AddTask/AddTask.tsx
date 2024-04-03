import Button from '@components/Button/Button'
import CategoryList from '@components/CategoryList/CategoryList'
import Datepicker from '@components/DatePicker/Datepicker'
import FormControlledElement from '@components/FormControlledElement'
import Input from '@components/Input/Input'
import Label from '@components/Label/Label'
import Title from '@components/Title/Title'
import { categories, categoriesEnum } from '@configs/categories'
import { FC, useState } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { View } from 'react-native'

import { styles } from './AddTask.styles'

interface AddTaskProps {}

type FormValues = {
  description: string
  deadline: string | Date
  category: categoriesEnum
}

const AddTask: FC<AddTaskProps> = () => {
  const [open, setOpen] = useState(false)
  const { ...methods } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      deadline: new Date(),
    },
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
          <FormControlledElement
            name="category"
            defaultValue={categoriesEnum.quick}
            renderItem={({ value }) => (
              <CategoryList categories={categories} selectedCategory={value} onPress={(item) => methods.setValue('category', item)} />
            )}
          />
        </Label>
        <Label label="Deadline">
          <FormControlledElement
            name="deadline"
            renderItem={({ value }) => <Datepicker date={value} setDate={(date) => methods.setValue('deadline', date)} />}
          />
        </Label>
        <Button style={styles.btn} type="secondary" onPress={methods.handleSubmit(onSubmit, onError)}>
          Add the task
        </Button>
      </View>
    </FormProvider>
  )
}

export default AddTask
