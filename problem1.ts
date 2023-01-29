function twoSum(nums: number[], target: number): number[] {
  const result: number[] = [];
  nums.map((num1, idx1) => {
    nums.map((num2, idx2) => {
      if (num1 + num2 === target && idx2 > idx1) {
        result.push(idx1);
        result.push(idx2);
      }
    });
  });
  return result;
}
