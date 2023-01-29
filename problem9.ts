function isPalindrome(x: number): boolean {
  const reversedNumber = parseInt(x.toString().split("").reverse().join(""));
  return x == reversedNumber;
}
