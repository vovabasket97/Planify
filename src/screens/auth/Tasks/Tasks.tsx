import CategoryList from '@components/CategoryList/CategoryList'
import Title from '@components/Title/Title'
import { categories, categoriesEnum } from '@configs/categories'
import { FC, useState } from 'react'
import { View } from 'react-native'

import { styles } from './Tasks.styles'

interface TasksProps {}

const Tasks: FC<TasksProps> = () => {
  const [category, setCategory] = useState(categoriesEnum.quick)

  return (
    <View style={styles.container}>
      <Title>To do Tasks</Title>
      <CategoryList style={styles.list} categories={categories} selectedCategory={category} onPress={(item) => setCategory(item)} />
    </View>
  )
}

export default Tasks
