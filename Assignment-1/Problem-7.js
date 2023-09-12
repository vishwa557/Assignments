//7. Implement your own search function for strings. dont use builtin function

function searchString(mainString, subString) {
    for (let i = 0; i <= mainString.length - subString.length; i++) {
      let j;
  
      for (j = 0; j < subString.length; j++) {
        if (mainString[i + j] !== subString[j]) {
          break;
        }
      }
  
      if (j === subString.length) {
        return i;
      }
    }
  
    return -1;
  }

  //input
let mainString = "Hello, how are you?";
let subString = "how";

let result = searchString(mainString, subString);

if (result !== -1) {
  console.log(`Found at index ${result}`);
} else {
  console.log("Not found");
}

//output:
//Found at index 7