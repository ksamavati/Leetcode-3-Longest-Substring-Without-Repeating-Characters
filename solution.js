let getSubLength = (s) => {
  let substr = "";
  let remainingString = null; // set to null if we reach the end of the string

  for (let i = 0; i < s.length; i++) {
    if (substr.includes(s.charAt(i))) {
      let remainingString = s.substring(substr.indexOf(s.charAt(i)) + 1);
      return [substr, remainingString];
    } else {
      substr += s.charAt(i);
    }
  }

  return [substr, remainingString];
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let data = ["", s];
  let longestSubstring = 0;
  do {
    data = getSubLength(data[1]);
    if (data[0].length > longestSubstring) {
      longestSubstring = data[0].length;
    }
  } while (data[1] !== null);

  return longestSubstring;
};
