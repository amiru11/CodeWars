/**
 * The marketing team is spending way too much time typing in hashtags. Let's help them with our own Hashtag Generator!
 * It must start with a hashtag (#).
 * All words must have their first letter capitalized.
 * If the final result is longer than 140 chars it must return false.
 * If the input or the result is an empty string it must return false.
 */

/**
 * For Example
 * generateHashtag(" Hello there thanks for trying my Kata") -> "#HelloThereThanksForTryingMyKata"
 * generateHashtag("    Hello     World   ") -> "#HelloWorld"
 * generateHashtag("") -> false
 */

/**
 * My Solution
 */

// #1
const generateHashtag = s => {
  const result = s
    .split(" ")
    .reduce(function(array, str) {
      if (str.length > 0) {
        array.push(str.charAt(0).toUpperCase() + str.slice(1));
      }
      return array;
    }, [])
    .join("");
  return result.length > 0 && result.length < 140 ? `#${result}` : false;
};

// #2
const generateHashtag = s => {
  const result = s.split(" ").reduce((tag, str) => {
    return tag + str.charAt(0).toUpperCase() + str.slice(1);
  }, "#");

  return result.length > 0 && result.length < 140 ? result : false;
};
