/*
*  Check if a string (first argument, str) 
*  ends with the given target string (second 
*  argument, target).
*/

function confirmEnding(str, target) {
  // "Never give up and good luck will find you."
  // -- Falcor
  var end = str.substr(str.length - target.length);
  
  return end === target;

}

confirmEnding("Bastian", "n");
