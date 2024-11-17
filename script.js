//Task 3
function calc(nums) {
  const total = nums.reduce((a, b) => a + b, 0);
  const average = total / nums.length;
  return { total, average };
}

function removeDuplicates(strs) {
  return [...new Set(strs)];
}
