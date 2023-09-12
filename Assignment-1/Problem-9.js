//9. Implement array reversal. dont use builtin function

function reverseArray(arr) {
    const length = arr.length;
    const middle = Math.floor(length / 2);
  
    for (let i = 0; i < middle; i++) {
    
      const temp = arr[i];
      arr[i] = arr[length - i - 1];
      arr[length - i - 1] = temp;
    }
  }
  
  //input
  const originalArray = [1, 2, 3, 4, 5];
  reverseArray(originalArray);
  
  console.log('Original Array:', originalArray);

 /**
    output:
    Original Array: [ 5, 4, 3, 2, 1 ]
  */

  