const swapPosition = (list, a, b) => {
  const temp = list[a];
  list[a] = list[b];
  list[b] = temp;
};

const partitionList = (list, p, r) => {
  let i = p - 1;
  let mid = list[r];

  for (let j = p; j < r; j++) {
    if (list[j] < mid) {
      i++;
      swapPosition(list, i, j);
    }
  }

  swapPosition(list, i + 1, r);
  console.log(i + 1);
  return i + 1;
};

const quickSort = (list, p, r) => {
  if (p < r) {
    let q = partitionList(list, p, r);
    quickSort(list, p, q - 1);
    quickSort(list, q + 1, r);
  }
};

const nums = [-1, 0, 1, 2, -1, -4];
quickSort(nums, 0, nums.length - 1);
console.log(nums);