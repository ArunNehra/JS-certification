// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


//also frequently used for Anagram questions

function maxChar(str) {
    const lstr = str.toLowerCase();
    const cobj = {};
    let maxChar = '';
    let max = 0;

    for (let char of lstr) {
        if(!cobj[char]){
            cobj[char] = 1;
        }else {
            cobj[char]++;
        }
    }

    for (let char in cobj){
        if (cobj[char] > max){
            max = cobj[char];
            maxChar = char;
        }
    }
    return maxChar;
 }
  
module.exports = maxChar;