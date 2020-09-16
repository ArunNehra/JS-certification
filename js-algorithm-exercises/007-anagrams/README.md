# Anagrams

## Directions

Check to see if two provided strings are anagrams of eachother. One string is an anagram of another if it uses the same characters in the same quantity. Only consider characters, not spaces or punctuation. Consider capital letters to be the same as lower case.

Additionally, write a helper function `cleanString(arg)` which takes in a `str` argument. Use this helper function in `anagrams(strA, strB)` to write your solution.

## Examples

```javascript
anagrams('rail safety', 'fairy tales') === True;
anagrams('RAIL! SAFETY!', 'fairy tales') === True;
anagrams('Hi there', 'Bye there') === False;