import React from 'react'

  const createPrefixText = function(prefix, index) {
    var prefixText = ''
    var index = index + 1

    if(prefix === 'slash') {
      prefixText = index + '/ '
    }
    if(prefix === 'period') {
      prefixText = index + '. '
    }
    return prefixText
  }

  const setTweetLength = function(prefixText) {
    var length = 140 - prefixText.length
    return length
  }

  const updateIndices = function(beginIndex, endIndex, tweetLength) {
    var beginIndex = beginIndex < 0 ? 0 : endIndex
    var endIndex = endIndex < 0 ? tweetLength : endIndex + tweetLength
    return [beginIndex, endIndex]
  }

  const updateAllVariables = function(prefix, index, beginIndex, endIndex) {
    var prefixText = createPrefixText(prefix, index)
    var tweetLength = setTweetLength(prefixText)
    var [beginIndex, endIndex] = updateIndices(beginIndex, endIndex, tweetLength)
    return [prefixText, beginIndex, endIndex]
  }

  const intelligentTrim = function(tweetStr) {
    var lastChar = tweetStr.charAt(tweetStr.length-1)
    var trimmedStr = tweetStr.trim()

    //if the last char is space, but it's not JUST a space
    if(lastChar===' ' && tweetStr.length !== 1) {
      trimmedStr += ' '
    }
    return trimmedStr
  }

exports.splitTweets = function(tweetBlob, prefixOption) {
  var tweets = []

  var prefixText = null
  var beginIndex = -1
  var endIndex = -1

  console.log('tweetBlob', tweetBlob)

  for(var i = 0; tweetBlob.length > endIndex; i++) {
    [prefixText, beginIndex, endIndex] = updateAllVariables(prefixOption, i, beginIndex, endIndex)
    tweets[i] = prefixText
    var singleTweet = tweetBlob.substring(beginIndex, endIndex)
    tweets[i] += intelligentTrim(singleTweet)
  }
  return tweets
}

