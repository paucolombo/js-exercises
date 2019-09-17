function getCount(str) {
  let vowelsCount = 0;
  let regex=/[aeiou]/;
  let newArray= str.split("");
  for (let i=0;i< newArray.length; i++) {
  if (newArray[i].match(regex)) {
  vowelsCount ++;
   }
  }
  return vowelsCount;
}
getCount ("abracadabra");