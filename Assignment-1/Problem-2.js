/**
 * 2. Upside down pyramid
*********
 *******
  *****
   ***
    *
    
   input : 5
 */

   function printPyramid(n) {
    for (let i = n; i > 0; i--) {
      const spaces = ' '.repeat(n - i);
      const stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }
  }
  
  
  printPyramid(5);