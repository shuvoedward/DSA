// This algorithm is from the Grokkings book
function findSmallest(arr) {
  let smallest = arr[0];
  let smallestIndex = 0;

  // Loop through every element in the array
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] < smallest) {
      smallest = arr[i];
      smallestIndex = i;
    }
  }
  return smallestIndex;
}

function selectionSort(arr) {
  // Create a new array
  let newArr = [];
  let smallest;

  while (arr.length) {
    smallest = findSmallest(arr);

    // Remove and append the smallest element
    newArr.push(arr.splice(smallest, 1)[0]);
  }

  return newArr;
}

let arr = [5, 1, 3, 2, 4];
console.log(selectionSort(arr));
