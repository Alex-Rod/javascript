function repeatStringNumTimes(str, num) {
  // repeat after me
  var output = "";
  while (num -- > 0) {
    output += str;
  }
  return output;
}
 
repeatStringNumTimes("abc", 3);