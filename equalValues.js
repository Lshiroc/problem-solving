function equal(arr, val, from) {
  if(from >= arr.length) return 0;

  return (arr[from] === val ? 1 : 0) + equal(arr, val, from+1);
}

console.log(equal([3, 2, 2, 5, 3, 1, 8, 8, 4, 8], 2, 0));
