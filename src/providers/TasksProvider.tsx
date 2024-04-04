import Loader from '@components/Loader'
import { categoriesEnum } from '@configs/categories'
import { AuthContext } from '@context/AuthContext'
import firestore from '@react-native-firebase/firestore'
import { useStore } from '@store/index'
import { FC, PropsWithChildren, useContext, useEffect } from 'react'
import { Alert } from 'react-native'
import { ITask } from 'types'

interface TasksProviderProps extends PropsWithChildren {}

const TasksProvider: FC<TasksProviderProps> = ({ children }) => {
  const { user } = useContext(AuthContext)
  const { setTasks, category, setLoading } = useStore((store) => ({
    category: store.category,
    setTasks: store.setTasks,
    setLoading: store.setLoading,
  }))

  useEffect(() => {
    setLoading(true)

    const ref = firestore().collection('Tasks').where('userId', '==', user?.uid)

    const subscriber = ref.onSnapshot(
      (documentSnapshot) => {
        const tasksList: ITask[] = []

        documentSnapshot.forEach((docSnapshot) => {
          const data = (docSnapshot.data() || null) as ITask | null

          if (data && data !== null) tasksList.push({ ...data, uid: docSnapshot.id })
        })

        setTasks(tasksList)
        setLoading(false)
      },
      (error) => {
        Alert.alert(error.message)
        setLoading(false)
        setTasks([])
      }
    )

    return () => subscriber()
  }, [category, user?.uid])

  return children
}

export default TasksProvider
