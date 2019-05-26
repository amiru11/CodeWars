/**
 * This time no story, no theory. The examples below show you how to write function accum
 */

/**
 * For Example
 * accum("abcd") -> "A-Bb-Ccc-Dddd"
 * accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
 * accum("cwAt") -> "C-Ww-Aaa-Tttt"
 * Parameter Condition: The parameter of accum is a string which includes only letters from a..z and A..Z.
 */

/**
 * My Solution
 */

const accum = s => {
  try {
    if (/[a-zA-Z]/g.test(s)) {
      s = s
        .split('')
        .map((char, index) => {
          let newCharacter = char.toUpperCase()
          for (let i = 0; i < index; i++) {
            newCharacter += char.toLowerCase()
          }
          return newCharacter
        })
        .join('-')

      return s
    } else {
      throw new Error(
        'The parameter of accum is a string which includes only letters from a..z and A..Z'
      )
    }
  } catch (error) {
    alert(error)
  }
}
