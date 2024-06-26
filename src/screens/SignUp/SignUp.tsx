import Button from '@components/Button/Button'
import Checkbox from '@components/Checkbox/Checkbox'
import FormControlledElement from '@components/FormControlledElement/FormControlledElement'
import Input from '@components/Input/Input'
import { privacy_policy, terms_and_conditions } from '@configs/links'
import { commonNavigationType } from '@configs/routes'
import auth from '@react-native-firebase/auth'
import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { FormProvider, SubmitErrorHandler, SubmitHandler, useForm } from 'react-hook-form'
import { Alert, KeyboardAvoidingView, Linking, Pressable, ScrollView, Text, View } from 'react-native'

import { styles } from './SignUp.styles'

interface SignInProps extends StackScreenProps<commonNavigationType, 'SignUp'> {}

type FormValues = {
  firstName: string
  lastName: string
  email: string
  password: string
  confirmPassword: string
  privacy: boolean
}

const SignUp: FC<SignInProps> = ({ navigation }) => {
  const { ...methods } = useForm<FormValues>({
    mode: 'onChange',
    defaultValues: {
      privacy: false,
    },
  })

  const onSubmit: SubmitHandler<FormValues> = (data: FormValues) => {
    auth()
      .createUserWithEmailAndPassword(data.email, data.password)
      .then(async () => {
        await auth().currentUser?.updateProfile({
          displayName: [data.firstName, data.lastName].join(' '),
        })
      })
      .catch((error) => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!')
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!')
        }

        console.error(error)
      })
  }

  const onError: SubmitErrorHandler<FormValues> = (errors, e) => {
    return console.log({ errors })
  }

  return (
    <ScrollView>
      <KeyboardAvoidingView style={styles.container}>
        <FormProvider {...methods}>
          <Text style={styles.heading}>Join the hub!</Text>
          <View style={styles.inputes}>
            <Input placeholder="First name" name="firstName" rules={{ required: 'First name is required!' }} />
            <Input placeholder="Last name" name="lastName" rules={{ required: 'Last name is required!' }} />
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
            <Input
              autoCapitalize="none"
              autoComplete="off"
              spellCheck={false}
              secureTextEntry
              placeholder="Confirm Password"
              name="confirmPassword"
              rules={{
                required: "Confirm password can't be empty!",
                validate: (value, fields) => {
                  if (value !== fields.password) {
                    return 'Confirm password should be the same!'
                  }
                },
              }}
            />
            <FormControlledElement
              name="privacy"
              rules={{ required: 'Privacy checkbox is required!' }}
              renderItem={({ value }) => (
                <Checkbox value={value} onPress={() => methods.setValue('privacy', !value)}>
                  <Text style={styles.terms}>
                    I agree to&nbsp;
                    <Text onPress={() => Linking.openURL(terms_and_conditions)} style={styles.underline}>
                      Terms and Conditions
                    </Text>{' '}
                    and&nbsp;
                    <Text onPress={() => Linking.openURL(privacy_policy)} style={styles.underline}>
                      Privacy policy
                    </Text>
                  </Text>
                </Checkbox>
              )}
            />
          </View>
          <Button type="secondary" onPress={methods.handleSubmit(onSubmit, onError)}>
            Create account
          </Button>
          <Text style={styles.register}>
            Already registered?&nbsp;
            <Text onPress={() => navigation.navigate('SignIn')} style={styles.registerLink}>
              Sign in!
            </Text>
          </Text>
        </FormProvider>
      </KeyboardAvoidingView>
    </ScrollView>
  )
}

export default SignUp
