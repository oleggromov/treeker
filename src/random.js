const randomWords = require('random-words')

function getRandomString() {
  const str = randomWords({ exactly: 1, wordsPerString: Math.floor(Math.random() * 5 + 1) })[0]
  return str.slice(0, 1).toUpperCase() + str.slice(1)
}

function getRandomItem(array) {
  return array[Math.floor(Math.random() * array.length)]
}

module.exports = {
  getRandomString,
  getRandomItem
}
