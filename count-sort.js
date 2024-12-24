const countSort = (array) => {
  let max = Math.max(...array);
  let bucket = new Array(max + 1).fill(0);
  let result = new Array(array.length).fill(0);

  for (let i = 0; i < array.length; i++) {
    bucket[array[i]]++;
  }

  console.log(bucket);
  for (let i = 1; i < bucket.length; i++) {
    bucket[i] += bucket[i - 1];
  }

  console.log(bucket);

  for (let i = array.length - 1; i >= 0; i--) {
    result[bucket[array[i]] - 1] = array[i];
    bucket[array[i]]--;
  }

  return result;
};

const arr = [4, 2, 2, 8, 3, 3, 1];
console.log(countSort(arr));