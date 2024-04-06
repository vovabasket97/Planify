import Button from '@components/Button/Button'
import CategoryList from '@components/CategoryList/CategoryList'
import Datepicker from '@components/DatePicker/Datepicker'
import FormControlledElement from '@components/FormControlledElement/FormControlledElement'
import Input from '@components/Input/Input'
import Label from '@components/Label/Label'
import Title from '@components/Title/Title'
import { categories, categoriesEnum } from '@configs/categories'
import { authNavigationType } from '@configs/routes'
import { AuthContext } from '@context/AuthContext'
import firestore from '@react-native-firebase/firestore'
import { StackScreenProps } from '@react-navigation/stack'
import dayjs from 'dayjs'
import { FC, useContext, useState } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Alert, View } from 'react-native'

import { styles } from './AddTask.styles'

interface AddTaskProps extends StackScreenProps<authNavigationType, 'AddTask'> {}

type FormValues = {
  description: string
  deadline: string | Date
  category: categoriesEnum
}

const AddTask: FC<AddTaskProps> = ({ navigation }) => {
  const { user } = useContext(AuthContext)
  const [isLoading, setLoading] = useState(false)
  const { ...methods } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      deadline: new Date(),
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    setLoading(true)
    firestore()
      .collection('Tasks')
      .add({
        description: data.description,
        deadline: dayjs(data.deadline).toString(),
        category: data.category,
        checked: false,
        userId: user?.uid,
      })
      .then(() => {
        methods.reset()
        setLoading(false)
        navigation.navigate('Tasks')
      })
      .catch((e) => {
        Alert.alert(e.message)
      })
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <FormProvider {...methods}>
      <View style={styles.container}>
        <Title style={[styles.title, styles.margins]}>Add New Task</Title>
        <Label style={styles.margins} label="Describe the task">
          <Input variant="default" placeholder="Type here..." name="description" rules={{ required: 'Description is required!' }} />
        </Label>
        <Label styleLabel={styles.margins} label="Type">
          <FormControlledElement
            name="category"
            defaultValue={categoriesEnum.business}
            renderItem={({ value }) => (
              <CategoryList
                style={styles.margins}
                categories={categories}
                selectedCategory={value}
                onPress={(item) => methods.setValue('category', item)}
              />
            )}
          />
        </Label>
        <Label style={styles.margins} label="Deadline">
          <FormControlledElement
            name="deadline"
            rules={{
              required: 'Deadline is required!',
              validate: (value, fields) => {
                if (dayjs(value).isBefore(dayjs(), 'D')) {
                  return 'Selected date should be in the future'
                }
              },
            }}
            renderItem={({ value }) => <Datepicker date={value} setDate={(date) => methods.setValue('deadline', date)} />}
          />
        </Label>
        <View style={styles.margins}>
          <Button loading={isLoading} style={styles.btn} type="secondary" onPress={methods.handleSubmit(onSubmit, onError)}>
            Add the task
          </Button>
        </View>
      </View>
    </FormProvider>
  )
}

export default AddTask
