import Title from '@components/Title/Title'
import { FC } from 'react'

import { styles } from './Tasks.styles'

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  return <Title>To do Tasks</Title>
}

export default Tasks
