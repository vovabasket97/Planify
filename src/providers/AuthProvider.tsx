import { AuthContext } from '@context/AuthContext'
import auth from '@react-native-firebase/auth'
import CommonRoutes from '@screens/CommonRoutes'
import { FC, PropsWithChildren, useCallback, useContext, useEffect, useState } from 'react'
import { IUser } from 'types'

interface AuthProviderProps extends PropsWithChildren {}

const AuthProvider: FC<AuthProviderProps> = ({ children }) => {
  const [initializing, setInitializing] = useState(true)
  const { user, setUser } = useContext(AuthContext)

  // Handle user state changes
  const onAuthStateChanged = useCallback(
    (useData: IUser) => {
      if (setUser) setUser(useData)
      if (initializing) setInitializing(false)
    },
    [initializing, setUser]
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
