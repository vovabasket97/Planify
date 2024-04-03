import { FC, PropsWithChildren, createContext, useState } from 'react'
import { IUser } from 'types'

interface AuthContextProps extends PropsWithChildren {}

interface IAuthContext {
  user: IUser | null
  setUser: React.Dispatch<React.SetStateAction<IUser | null>> | null
}

export const AuthContext = createContext<IAuthContext>(undefined!)

const AuthContextComponent: FC<AuthContextProps> = ({ children }) => {
  const [user, setUser] = useState<IUser | null>(null)

  return <AuthContext.Provider value={{ user, setUser }}>{children}</AuthContext.Provider>
}

export default AuthContextComponent
