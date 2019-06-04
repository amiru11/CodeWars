/**
 * You are going to be given a word. Your job is to return the middle character of the word. If the word's length is odd, return the middle character. If the word's length is even, return the middle 2 characters.
 */

/**
 * For Example
 * getMiddle("test") -> "es"
 * getMiddle("testing") -> "t"
 * getMiddle("middle") -> "dd"
 * getMiddle("A") -> "A"
 */

/**
 * My Solution
 */

// #1
const getMiddle = str => {
  const middleIndex = str.length / 2
  return str.length % 2 === 1
    ? str.substring(middleIndex, middleIndex + 1)
    : str.substring(middleIndex - 1, middleIndex + 1)
}

// #2
const getMiddle = str => {
  return str.slice((str.length - 1) / 2, str.length / 2 + 1)
}
