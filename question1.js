// Quick Sort

function quickSort(arr) {
    if (arr.length <= 1) {
      return arr;
    }
  
    const pivot = arr[arr.length - 1];
  
    const left = [];
    const right = [];
  
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        left.push(arr[i]);
      } else {
        right.push(arr[i]);
      }
    }
  
    return quickSort(left).concat(pivot, quickSort(right));
  }
  let array = [23, 31, 312, 12, 2, 321, 42];
  
  console.log(quickSort(array));