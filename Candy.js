// Input: ratings = [1,0,2]
// Output: 5
// Explanation: You can allocate to the first, second and third child with 2, 1, 2 candies respectively.
/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  if (ratings.length === 0) return 0;
  let allocateCandies = new Array(ratings.length).fill(1);

  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      allocateCandies[i] = allocateCandies[i - 1] + 1;
    }
  }

  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      allocateCandies[i] = Math.max(
        allocateCandies[i],
        allocateCandies[i + 1] + 1
      );
    }
  }

  console.log("allocateCandies: ", allocateCandies);
  return allocateCandies.reduce((sum, candy) => sum + candy, 0);
};

const ratings = [1, 0, 2];

console.log(candy(ratings));
