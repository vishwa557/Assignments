//8. Implement string reversal. dont use builtin function

function reverseString(inputString) {
    let reversedString = '';
    for (let i = inputString.length - 1; i >= 0; i--) {
      reversedString += inputString[i];
    }
    return reversedString;
  }
  
  //input
  const originalString = 'Hello, world!';
  const reversed = reverseString(originalString);
  
  console.log('Original String:', originalString);
  console.log('Reversed String:', reversed);
  

 /**
  output:
  Original String: Hello, world!
  Reversed String: !dlrow ,olleH
  */