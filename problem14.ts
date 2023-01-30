// Write a function to find the longest common prefix string amongst an array of strings.
// If there is no common prefix, return an empty string "".

// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".
// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.

function longestCommonPrefix(strs: string[]): string {
  let result = "";
  const firstWord = strs[0];
  const lastWord = strs[strs.length - 1];
  for (let i = 0; i < strs.length; i++) {
    if (firstWord[i] !== lastWord[i]) break;
    result += firstWord[i];
  }
  return result;
}

longestCommonPrefix(["dog", "racecar", "car"]);
