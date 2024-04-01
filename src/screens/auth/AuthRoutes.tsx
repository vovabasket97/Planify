/* eslint-disable react/no-unstable-nested-components */
import CalendarIcon from '@assets/TabCalendarIcon'
import HomeIcon from '@assets/TabHomeIcon'
import withMainProvider from '@providers/MainProvider'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createDrawerNavigator } from '@react-navigation/drawer'
import Home from '@screens/auth/Home/Home'
import { memo } from 'react'

import AddTask from './AddTask/AddTask'
import DrawerContent from './DrawerContent/DrawerContent'

export type authNavigationType = {
  Home?: {}
  AddTask?: {}
}

const Drawer = createDrawerNavigator()
const Tab = createBottomTabNavigator()

const HomeComponent = withMainProvider({ WrappedComponent: Home })
const AddTasksComponent = withMainProvider({ WrappedComponent: AddTask })

const TabsComponent = memo(() => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarActiveTintColor: '#4681A3',
      tabBarInactiveTintColor: '#ADAFB6',
    }}
    initialRouteName="Home"
  >
    <Tab.Screen name="Home" component={HomeComponent} options={{ tabBarIcon: HomeIcon }} />
    <Tab.Screen name="AddTask" component={AddTasksComponent} options={{ tabBarIcon: CalendarIcon }} />
  </Tab.Navigator>
))

const AuthRoutes = () => {
  return (
    <>
      <Drawer.Navigator drawerContent={DrawerContent} initialRouteName="Home">
        <Drawer.Screen name="Tabs" component={TabsComponent} />
        <Drawer.Screen name="AddTask" component={AddTasksComponent} />
      </Drawer.Navigator>
    </>
  )
}

export default AuthRoutes
