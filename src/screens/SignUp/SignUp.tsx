import Button from '@components/Button/Button'
import Input from '@components/Input/Input'
import { StackScreenProps } from '@react-navigation/stack'
import { FC } from 'react'
import { KeyboardAvoidingView, Text, View } from 'react-native'

import { navigationType } from '../../../App'

import { styles } from './SignUp.styles'

interface SignInProps extends StackScreenProps<navigationType, 'SignUp'> {}

const SignUp: FC<SignInProps> = ({ navigation }) => {
  return (
    <KeyboardAvoidingView style={styles.container}>
      <Text style={styles.heading}>Join the hub!</Text>
      <View style={styles.inputes}>
        <Input placeholder="First Name" onChangeText={(text) => console.log(text)} />
        <Input placeholder="Last Name" onChangeText={(text) => console.log(text)} />
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
          spellCheck={false}
          autoComplete="off"
          secureTextEntry
          placeholder="Password"
          onChangeText={(text) => console.log(text)}
        />
        <Input
          autoCapitalize="none"
          autoComplete="off"
          secureTextEntry
          placeholder="Confirm Password"
          onChangeText={(text) => console.log(text)}
          spellCheck={false}
        />
      </View>
      <Button type="secondary" onPress={() => {}}>
        Create account
      </Button>
      <Text style={styles.register}>
        Already registered?&nbsp;
        <Text onPress={() => navigation.navigate('SignIn')} style={styles.registerLink}>
          Sign in!
        </Text>
      </Text>
    </KeyboardAvoidingView>
  )
}

export default SignUp
