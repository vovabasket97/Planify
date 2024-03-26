import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { KeyboardAvoidingView, ScrollView, Text, View } from 'react-native'

import { navigationType } from '../../../App'

import { styles } from './SignIn.styles'

interface SignInProps extends StackScreenProps<navigationType, 'SignIn'> {}

type FormValues = {
  email: string
  password: string
}

const SignIn: FC<SignInProps> = ({ navigation }) => {
  const { ...methods } = useForm<FormValues>({ mode: 'onChange' })

  const onSubmit: SubmitHandler<FormValues> = (data) => console.log({ data })

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <FormProvider {...methods}>
          <Text style={styles.heading}>Welcome back!</Text>
          <View style={styles.inputes}>
            <Input
              name="email"
              placeholder="Email"
              keyboardType="email-address"
              rules={{
                required: 'Email is required!',
                pattern: {
                  value: /\b[\w\\.+-]+@[\w\\.-]+\.\w{2,4}\b/,
                  message: 'Must be formatted: john.doe@email.com',
                },
              }}
              autoCapitalize="none"
              inputMode="email"
              spellCheck={false}
            />

            <Input
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              secureTextEntry
              placeholder="Password"
              name="password"
              rules={{ required: 'Password is required!' }}
            />
          </View>
          <Button onPress={methods.handleSubmit(onSubmit, onError)}>Login</Button>
          <Text style={styles.register}>
            Not registered?&nbsp;
            <Text onPress={() => navigation.navigate('SignUp')} style={styles.registerLink}>
              Sign up!
            </Text>
          </Text>
        </FormProvider>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignIn
