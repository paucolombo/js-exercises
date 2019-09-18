function spinWords(str) {
  let arr = str.split(" ");
  let str2 = "";
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length >= 5) {
      str2 = arr[i].split("").reverse();
      str2 = str2.join("");
      arr[i] = str2;
    }
  }
 return arr.join(" ");
}
console.log(spinWords("hola Welcome"));