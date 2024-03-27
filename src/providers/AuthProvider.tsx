import auth from '@react-native-firebase/auth'
import CommonRoutes from '@screens/CommonRoutes'
import { FC, PropsWithChildren, useCallback, useEffect, useState } from 'react'
import { IUser } from 'types'

interface AuthProviderProps extends PropsWithChildren {}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [initializing, setInitializing] = useState(true)
  const [user, setUser] = useState<IUser | null>(null)

  // Handle user state changes
  const onAuthStateChanged = useCallback(
    (user: IUser) => {
      setUser(user)
      if (initializing) setInitializing(false)
    },
    [initializing]
  )

  useEffect(() => {
    // @ts-ignore
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged)
    return subscriber // unsubscribe on unmount
  }, [onAuthStateChanged])

  if (initializing) return null

  if (!user) return <CommonRoutes />

  return children
}

export default AuthProvider
