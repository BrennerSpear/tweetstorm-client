import { createRouter } from '@expo/ex-navigation'

import LoginScreen from '../screens/LoginScreen'
import NewTweetScreen from '../screens/NewTweetScreen'
import HomeScreen from '../screens/HomeScreen'
import RootNavigation from './RootNavigation'

import LinksScreen from '../screens/LinksScreen'

export default createRouter(() => ({
  login: () => LoginScreen,
  newTweet: () => NewTweetScreen,
  home: () => HomeScreen,
  links: () => LinksScreen,
  rootNavigation: () => RootNavigation
}), {ignoreSerializableWarnings: true})
