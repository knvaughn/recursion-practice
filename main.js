const arr = [1,2,3,4,5,6,7,8];

// For a given array, get the product of the first n elements
function multiply(arr, n) {
    if (n <= 0) {
      return 1;
    } else {
      return multiply(arr, n - 1) * arr[n - 1];
    }
  }
multiply(arr, 3);


// For a given array, get the sum of the first n elements
function sum(arr, n) {
    if (n <= 0) {
      return 0;
    } else {
      return sum(arr, n - 1) + arr[n - 1];
    }
  }
sum(arr, 4);


// Use recursion to return an array containing the integers n through 1
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.unshift(n);
    return countArr;
  }
}
console.log(countdown(10));


// Use recursion to return an array containing the integers 1 through n
function countdown(n){
  if(n < 1) {
    return [];
  } else {
    const countArr = countdown(n - 1);
    countArr.push(n);
    return countArr;
  }
}
console.log(countdown(10));


// Use recursion to return an array of integers between a given range of numbers
function rangeOfNumbers(startNum, endNum) {
  if(endNum < startNum) {
    return [];
  } else {
    const arr = rangeOfNumbers(startNum, endNum - 1);
    arr.push(endNum);
    return arr;
  }
};
console.log(rangeOfNumbers(3, 8));