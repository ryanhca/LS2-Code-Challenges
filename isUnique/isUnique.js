/*
 * Implement an algorithm to determine if a string has all unique characters.
 * Extra Credit - Answer this question - What if you cannot use additional data structures?
 */
 const isUnique = (str) => {
   const tempChar = str[0];
   for (let i = 1; i < str.length; i++) {
      if (tempChar === str[i]) {
         return false;
      }
   }
   return true;
 };
 console.log(isUnique('abcdhijklmnopqrstuv')); // true
 console.log(isUnique('abcdefga')); // false
