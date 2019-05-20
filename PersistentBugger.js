/**
 * Write a function, persistence, that takes in a positive parameter num and returns its multiplicative persistence,
 * which is the number of times you must multiply the digits in num until you reach a single digit.
 *
 * persistence 함수를 사용해서 양의 정수의 각자리를 곱해서 한자리 수가 될 때까지 만들자.
 */

/**
 * For Example
 * persistence(39) === 3 // because 3*9 = 27, 2*7 = 14, 1*4=4 and 4 has only one digit
 * persistence(999) === 4 // because because 9*9*9 = 729, 7*2*9 = 126, 1*2*6 = 12, and finally 1*2 = 2
 */

/**
 * My Solution
 */

const persistence = num => {
  let results = 0 // 결과값 변수
  while (num.toString().length > 1) {
    results++
    num = num
      .split('')
      .map(Number)
      .reduce((a, b) => a * b)
      .toString()
  }
  return results
}
