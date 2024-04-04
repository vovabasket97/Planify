import CalendarIcon from '@assets/TabCalendarIcon'
import HomeIcon from '@assets/TabHomeIcon'
import { colors } from '@configs/style'
import withMainProvider from '@providers/MainProvider'
import TasksProvider from '@providers/TasksProvider'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '@screens/auth/Home/Home'
import { memo } from 'react'

import AddTask from './AddTask/AddTask'
import DrawerContent from './DrawerContent/DrawerContent'
import Tasks from './Tasks/Tasks'

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const HomeComponent = withMainProvider({ WrappedComponent: Home, useContainer: true, useHeader: true })
const TasksComponent = withMainProvider({ WrappedComponent: Tasks, useContainer: false, useHeader: true, useScrollView: false })
const AddTasksComponent = withMainProvider({ WrappedComponent: AddTask, useContainer: true, useHeader: true })

const TabsComponent = memo(() => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: colors.darkBlue,
      tabBarInactiveTintColor: colors.inActive,
    }}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={HomeComponent} options={{ tabBarIcon: HomeIcon }} />
    <Tab.Screen name="Tasks" component={TasksComponent} options={{ tabBarIcon: CalendarIcon }} />
  </Tab.Navigator>
))

const AuthRoutes = () => {
  return (
    <TasksProvider>
      <Drawer.Navigator drawerContent={DrawerContent} screenOptions={{ headerShown: false }} initialRouteName="Tabs">
        <Drawer.Screen name="Tabs" component={TabsComponent} />
        <Drawer.Screen name="AddTask" component={AddTasksComponent} />
      </Drawer.Navigator>
    </TasksProvider>
  )
}

export default AuthRoutes
