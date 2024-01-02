/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.
*/


function isPalindrome(str) {

  str = str.toUpperCase().replaceAll("!", "").replaceAll(",","").replaceAll("?","").replaceAll(".","").replaceAll(" ","");

  console.log(str);

  for(var i = 0; i < str.length / 2; i++){
    var j = str.length - i - 1;

    if(str[i] !== str[j]) return false;
  }
 
  return true;
}

// console.log(isPalindrome("Able, was I ere I saw Elba!"));

module.exports = isPalindrome;
