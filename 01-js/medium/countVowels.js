/*
  Implement a function `countVowels` that takes a string as an argument and returns the number of vowels in the string.
  Note: Consider both uppercase and lowercase vowels ('a', 'e', 'i', 'o', 'u').

  Once you've implemented the logic, test your code by running
*/

function countVowels(str) { 
  str = str.slice();

  var ans = 0;

  for(var i = 0; i < str.length; i++){
    var temp = str[i];

    switch(temp.toLowerCase()) {
      case 'a':
        ans++;
        break;
        
      case 'e':
        ans++;
        break;     
        
      case 'i':
        ans++;
        break;     
        
      case 'o':
        ans++;
        break;     
        
      case 'u':
        ans++;
        break;

      default:
        continue;
    }
  }

  return ans;
}

module.exports = countVowels;