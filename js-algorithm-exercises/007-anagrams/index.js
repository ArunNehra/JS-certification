// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

// function cleanString(str) {
//     return str.replace(/[^\w]/g, "").toLowerCase().split('').sort().join('')
//   }
  
// function anagrams(stringA, stringB) {
//     return cleanString(stringA) === cleanString(stringB) ? true : false
// }

function cleanString(str) {
  return str.replace(/[^\w]/g, '').toLowerCase();
}

function anagrams(stringA, stringB) {
  stringA = cleanString(stringA);
  stringB = cleanString(stringB);

  if(stringA.length !== stringB.length){
    return false
  }
  let arrB = stringB.split('');

  for(let char of stringA){
    if(!arrB.includes(char)){
      return false
    }else{
      arrB.splice(arrB.indexOf(char), 1)
    }
  }
  return true;
}
  
  // function charMap(str, obj={}) {
  //   for (let char of str.replace(/[^\w]/g,"").toLowerCase()) {
  //     obj[char] ? obj[char] += 1 : obj[char] = 1
  //   }
  //   return obj
  // }
  //
  // function anagrams(stringA, stringB) {
  //
  //   let objA = charMap(stringA), objB = charMap(stringB)
  //
  //   if (Object.keys(objA).length !== Object.keys(objB).length) {
  //     return false
  //   }
  //
  //   for (let char in objA) {
  //     if (objA[char] !== objB[char]) {
  //       return false
  //     }
  //   }
  //   return true
  //
  // }
  
  module.exports = anagrams;