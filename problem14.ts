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
  const firstStr = strs[0];
  if (strs.length === 1) return firstStr;
  let res = "";
  for (let i = 0; i < firstStr.length; i++) {
    res += firstStr[i];
    for (let j = 0; j < strs.length; j++) {
      if (!strs[j].startsWith(res)) return res.slice(0, -1);
    }
  }
  console.log(res);
  return res;
}

longestCommonPrefix(["flower", "flower", "flower", "floer"]);
