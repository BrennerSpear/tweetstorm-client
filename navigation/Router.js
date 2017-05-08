import { createRouter } from '@expo/ex-navigation'

import LoginScreen from '../screens/LoginScreen'
import NewTweetScreen from '../screens/NewTweetScreen'
import HomeScreen from '../screens/HomeScreen'
import PreviewScreen from '../screens/PreviewScreen'
import SentTweetScreen from '../screens/SentTweetScreen'
import RootNavigation from './RootNavigation'

import LinksScreen from '../screens/LinksScreen'

export default createRouter(() => ({
  login: () => LoginScreen,
  newTweet: () => NewTweetScreen,
  home: () => HomeScreen,
  links: () => LinksScreen,
  preview: () => PreviewScreen,
  sentTweet: () => SentTweetScreen,
  rootNavigation: () => RootNavigation
}), {ignoreSerializableWarnings: true})
