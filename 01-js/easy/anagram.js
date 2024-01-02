/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function strSort(str){
  return str.toUpperCase().split("").sort().join();
}

function isAnagram(str1, str2) {
  str1 = strSort(str1);  
  str2 = strSort(str2);  

  if(str1 === str2) return true;

  return false;
}

module.exports = isAnagram;