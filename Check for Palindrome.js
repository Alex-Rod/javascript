
function palindrome(str) {

  var re = /[^A-Za-z0-9]/g;
  var regStr = str.toLowerCase().replace(re, '');
  var reverseStr = regStr.split('').reverse().join(''); 
  
  return reverseStr === regStr;

}



palindrome("eye");