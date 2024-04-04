import CategoryList from '@components/CategoryList/CategoryList'
import Checkbox from '@components/Checkbox/Checkbox'
import Loader from '@components/Loader'
import Title from '@components/Title/Title'
import { allCategories, categoriesEnum } from '@configs/categories'
import firestore from '@react-native-firebase/firestore'
import { useStore } from '@store/index'
import { useMemo } from 'react'
import { FlatList, Text, View } from 'react-native'

import { styles } from './Tasks.styles'

const Tasks = () => {
  const { tasks, category, setCategory, isLoading } = useStore((store) => ({
    tasks: store.tasks,
    category: store.category,
    setCategory: store.setCategory,
    isLoading: store.isLoading,
  }))

  const onToggleTask = (taskId: string, state: boolean) => {
    firestore()
      .collection('Tasks')
      .doc(taskId)
      .update({
        checked: state,
      })
      .then(() => {
        console.log('Task updated!')
      })
  }

  const tasksByCategory = useMemo(
    () => (category === categoriesEnum.all ? tasks : tasks.filter((task) => task.category === category)),
    [tasks, category]
  )

  return (
    <FlatList
      showsHorizontalScrollIndicator={false}
      style={styles.wrapper}
      ListHeaderComponent={
        <View style={styles.container}>
          <Title style={styles.margins}>To do Tasks</Title>
          <CategoryList style={styles.list} categories={allCategories} selectedCategory={category} onPress={(item) => setCategory(item)} />
        </View>
      }
      contentContainerStyle={[styles.content, styles.container]}
      data={tasksByCategory}
      renderItem={({ item }) => (
        <Checkbox style={styles.margins} value={item.checked} lineThrough onPress={onToggleTask.bind(null, item.uid, !item.checked)}>
          {item.description}
        </Checkbox>
      )}
      ListFooterComponent={<>{isLoading && <Loader />}</>}
      ListEmptyComponent={<Text style={styles.noFound}>Tasks not found</Text>}
      keyExtractor={(item) => item.uid}
    />
  )
}

export default Tasks
