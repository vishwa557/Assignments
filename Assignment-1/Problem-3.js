/**
 * 
 3. diamond shape

    *
   *** 
  *****
 *******
*********
 *******
  *****
   ***
    *
    
   input : 5
 */

   function printPyramid(n) {
    for (let i = 1; i <= n; i++) {
      const spaces = ' '.repeat(n - i);
      const stars = '*'.repeat(2 * i - 1);
      console.log(spaces + stars);
    }

    for (let i = n-1; i > 0; i--) {
        const spaces = ' '.repeat(n - i);
        const stars = '*'.repeat(2 * i - 1);
        console.log(spaces + stars);
      }
  }
  
  
  printPyramid(5);