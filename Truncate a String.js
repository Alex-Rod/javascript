function truncateString(str, num) {
  // Clear out that junk in your trunk
  if (num <= 3){
    return str.slice(0, num) + '...';
  }
  else{
    if(num >= str.length){
      return str;
    }
    num = num -3;
    return str.slice(0, num) + '...';
  }
  return str;
}

truncateString("A-tisket a-tasket A green and yellow basket", 11);
