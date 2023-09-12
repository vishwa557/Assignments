//6. how iterate over an object data? explain with an example



/**
 To iterate over the properties of an object in JavaScript, you can use several methods
 , such as for...in loops, Object.keys(), Object.values()
 */

 //example
 const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    email: 'john@example.com'
  };

  
  //Using a for...in loop:
  for (const key in person) {
    console.log(`${key}: ${person[key]}`);
  }

  /**
   The for...in loop iterates over the keys (property names) of the object. 
   In this example, it logs each key-value pair of the person object.
   */
//================================================================
   //Using Object.keys() to iterate over keys:

   const keys = Object.keys(person);

for (const key of keys) {
  console.log(`${key}: ${person[key]}`);
}

/**
 Object.keys() returns an array of the object's keys,
  which we can then iterate over using a for...of loop or other array iteration methods.
 */

  //================================================================

  //Using Object.values() to iterate over values:
  const values = Object.values(person);

for (const value of values) {
  console.log(value);
}

/**
 Object.values() returns an array of the object's values, 
 which we can iterate over using a for...of loop or other array iteration methods.
 */
