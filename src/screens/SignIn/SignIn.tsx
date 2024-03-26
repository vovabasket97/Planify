import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'

import { navigationType } from '../../../App'

import { styles } from './SignIn.styles'

interface SignInProps extends StackScreenProps<navigationType, 'SignIn'> {}

const SignIn: FC<SignInProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>Welcome back!</Text>
      <View style={styles.inputes}>
        <Input
          autoCapitalize="none"
          keyboardType="email-address"
          inputMode="email"
          placeholder="Email"
          onChangeText={(text) => console.log(text)}
          spellCheck={false}
        />
        <Input
          autoCapitalize="none"
          autoComplete="off"
          spellCheck={false}
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => console.log(text)}
        />
      </View>
      <Button onPress={() => {}}>Login</Button>
      <Text style={styles.register}>
        Not registered?&nbsp;
        <Text onPress={() => navigation.navigate('SignUp')} style={styles.registerLink}>
          Sign up!
        </Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default SignIn
