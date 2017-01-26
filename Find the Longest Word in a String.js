
function findLongestWord(str) {
  var strSplit = str.split(' ');
  var word = 0;
  for(var i = 0; i < strSplit.length; i++){
    if(strSplit[i].length > word){
    word = strSplit[i].length;
     }
  }
  return word;
}

findLongestWord("The quick brown fox jumped over the lazy dog");
