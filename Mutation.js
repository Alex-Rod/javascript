
// Return true if the string in the first 
// element of the array contains all of the
// letters of the string in the second element 
// of the array.



function mutation(arr) {
  var first = arr[1].toLowerCase();
  var second = arr[0].toLowerCase();

  for (i = 0; i < first.length;i++) {
    if (second.indexOf(first[i]) < 0)
      return false;
  }
  return true;
 }

mutation(["hello", "hi"]);