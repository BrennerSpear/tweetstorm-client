import { createRouter } from '@expo/ex-navigation'

import HomeScreen from '../screens/HomeScreen'
import LoginScreen from '../screens/LoginScreen'
import RootNavigation from './RootNavigation'

import LinksScreen from '../screens/LinksScreen'

export default createRouter(() => ({
  home: () => HomeScreen,
  login: () => LoginScreen,
  links: () => LinksScreen,
  rootNavigation: () => RootNavigation,
}))
