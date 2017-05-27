String.prototype.replaceAll = function(search, replacement) {
 var target = this
 return target.split(search).join(replacement)
}

//use some random splitter that no one will *probably* type themselves
const splitToSentences = function(tweetBlob) {
  var splitable = tweetBlob.replaceAll('. ', '.|*!|').replaceAll('? ', '?|*!|').replaceAll('! ', '!|*!|')
  var sentences = splitable.split('|*!|')
  return sentences
}

const getPrefixText = function(option) {
  var text
  switch(option) {
    case 'none':
      text = ''
      break
    case 'space':
      text = ' '
      break
    case 'slash':
      text = '/ '
      break
    case 'period':
      text = '. '
      break
  }
  return text
}

//check if there's a period on the end of a setence for char-counting purposes
const checkPeriod = function(sentencesLeft, postfix) {
  //if postfix isnt true or theres no sentences left or the last sentence is less than 2 chars
  if(!postfix || sentencesLeft.length < 1 || sentencesLeft[0].length < 2) {return 0}
  
  var s = sentencesLeft[0]
  
  var last = s[s.length-1]
  var second = s[s.length-2]
  
  //if it ends with a period but isnt ... or ?.?. or !!.
  if(last==='.' && second !=='.' && second !== '!' && second !=='?') {
    return -1
  }
  
  return 0
}

//if the option is set, remove a period from the end of a tweet
const trimTweet = function(tweet, postfix) {
  // console.log(tweet)
  tweet = tweet.trim()
  
  if(!postfix || tweet.length < 2) {return tweet}
  
  var last = tweet[tweet.length-1]
  var second = tweet[tweet.length-2]
  
  //slice the . off if it's just a .
  if(last==='.' && second !=='.' && second !== '!' && second !=='?') {
    tweet = tweet.slice(0, -1)
  }
  
  return tweet
}

const splitToTweets = function(sentences, prefixOption, postfix) {
  const MAX = 140
  var tweets = []
  
  var index = 1
  var prefixText = getPrefixText(prefixOption)
  
  var sentencesLeft = sentences.slice()
  //keep moving sentences into tweets
  while(sentencesLeft.length > 0) {
    var tweet = ''
    var prefix = ''
    if(prefixText) {prefix += index} //prefix will not include index if there's no prefix
    
    prefix += prefixText
    
    tweet += prefix
    
    var singlePeriod = checkPeriod(sentencesLeft, postfix) //sentence is one char shorter if we get to shave it at the end
    
    //keep moving sentences into the same tweet as long as they fit
    while(sentencesLeft.length > 0 && tweet.length + sentencesLeft[0].length + singlePeriod <= MAX) {
      tweet += sentencesLeft.shift()
      tweet += ' '
      singlePeriod = checkPeriod(sentencesLeft, postfix)
      
      // console.log('first setence: ',sentencesLeft[0], '\n')
    }
    
    tweet = trimTweet(tweet, postfix)
    tweets.push(tweet)
    index++
  }
  return tweets
  
}

exports.splitTweets = function(tweetBlob, prefixOption, postfixOption) {
  var trimmedBlob = tweetBlob.trim()
  var sentences = splitToSentences(trimmedBlob)
  var tweets = splitToTweets(sentences, prefixOption, postfixOption)
  return tweets
}