import { categoriesEnum } from '@configs/categories'

export interface IUser {
  displayName: string
  email: string
  emailVerified: boolean
  isAnonymous: boolean
  metadata: any
  multiFactor: any
  phoneNumber: string | null
  photoURL: string | null
  providerData: any[]
  providerId: string
  uid: string
}

export interface ITask {
  description: string
  deadline: string
  category: categoriesEnum
  checked: boolean
  userId: string
  uid: string
}
