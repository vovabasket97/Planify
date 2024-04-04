import TasksSummarize from '@components/TasksSummarize/TasksSummarize'
import Title from '@components/Title/Title'
import { categoriesEnum } from '@configs/categories'
import { authNavigationType } from '@configs/routes'
import { colors, configStyles } from '@configs/style'
import { StackScreenProps } from '@react-navigation/stack'
import { useStore } from '@store/index'
import dayjs from 'dayjs'
import { useMemo } from 'react'
import { Pressable, StyleSheet, Text, View, useWindowDimensions } from 'react-native'

const gapBetweenBlocks = 10

const Home = ({ navigation }: StackScreenProps<authNavigationType, 'Home'>) => {
  const tasks = useStore((store) => store.tasks)
  const summaryBlocks = useMemo(() => {
    const tasksByCategories = tasks.reduce(
      (acc, cur) => {
        if (cur.category === categoriesEnum.important) ++acc.important
        if (cur.category === categoriesEnum.urgent) ++acc.urgent
        if (dayjs(cur.deadline).isBefore(dayjs(), 'D')) ++acc.due

        return acc
      },
      { urgent: 0, due: 0, important: 0 }
    )

    return [
      { label: 'High Priority', value: tasksByCategories.important },
      { label: 'Due Deadline', value: tasksByCategories.due },
      { label: 'Urgant', value: tasksByCategories.urgent },
    ]
  }, [tasks])

  const { width } = useWindowDimensions()

  return (
    <>
      <Title>Daily Tasks:</Title>
      <View style={styles.blocks}>
        {summaryBlocks.map((block, i) => (
          <TasksSummarize
            style={[{ width: (width - (configStyles.container.padding.horizontal * 2 + gapBetweenBlocks * 2)) / 3 }]}
            variant={i % 2 !== 0 ? 'secondary' : null}
            key={block.label}
            {...block}
          />
        ))}
      </View>
      <Pressable onPress={() => navigation.navigate('Tasks')} style={styles.notification}>
        <Text style={styles.notificationHeading}>Check all my tasks</Text>
        <Text style={styles.notificationText}>See all tasks and filter them by categories you have selected when creating them</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  blocks: {
    marginTop: 16,
    flexDirection: 'row',
    gap: gapBetweenBlocks,
    justifyContent: 'space-between',
  },
  notification: {
    flexDirection: 'column',
    gap: 12,
    paddingTop: 22,
    paddingBottom: 24,
    paddingLeft: 22,
    paddingRight: 15,
    width: '100%',
    backgroundColor: '#EEEFF0',
    marginTop: 72,
    borderRadius: 15,
  },
  notificationHeading: {
    fontSize: 16,
    lineHeight: 19,
    color: colors.purple,
  },
  notificationText: {
    fontSize: 12,
    lineHeight: 14,
    color: colors.purple,
    opacity: 0.5,
  },
})

export default Home
