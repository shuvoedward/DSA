// Selection Sort Algorithm from Gemini AI
function selectionSort(arr) {
  // Concise array copying
  let arr = [...arr];

  for (let i = 0; i < copy.length - 1; i++) {
    // Assume the current position is the min initially
    let minIndex = i;

    // Find the true smallest element's index (inner loop)
    for (let j = i + 1; j < copy.length; j++) {
      if (copy[j] < copy[minIndex]) {
        minIndex = j;
      }
    }

    // Swap only if a smaller element is found
    if (minIndex !== i) {
      // Destructuring swap
      [copy[i], copy[minIndex]] = [copy[minIndex], copy[i]];
    }
  }
  return copy;
}

let arr = [5, 4, 1, 2, 3];
console.log(selectionSort(arr));
