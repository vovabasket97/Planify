import { FC } from 'react'
import { FlatList, StyleProp, Text, TouchableOpacity, ViewStyle } from 'react-native'

import { styles } from './CategoryList.styles.ts'

interface CategoryListProps {
  categories: string[]
  selectedCategory: string
  onPress?: (item: any) => void
  style?: StyleProp<ViewStyle>
}

const CategoryList: FC<CategoryListProps> = ({ categories, selectedCategory, onPress, style }) => {
  return (
    <FlatList
      key={'#'}
      keyExtractor={(item) => '#' + item + 'category'}
      horizontal
      showsHorizontalScrollIndicator={false}
      style={styles.list}
      data={categories}
      contentContainerStyle={[styles.content, style]}
      renderItem={({ item }) => (
        <TouchableOpacity
          style={[styles.container, selectedCategory === item && styles.selectedContainer]}
          onPress={onPress?.bind(null, item)}
        >
          <Text style={[styles.item, selectedCategory === item && styles.active]}>{item}</Text>
        </TouchableOpacity>
      )}
    />
  )
}

export default CategoryList
