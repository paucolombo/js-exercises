function binaryAgent(str) {
  str = str.split(" ");
  let decimal;
  let word;
  let arr = [];
  for (let i = 0; i < str.length; i++) {
      decimal = parseInt(str[i], 2);
      word = String.fromCharCode(decimal);
      arr.push(word);
  }
  arr = arr.join("");
  return arr;
}

binaryAgent("01000001 01110010 01100101 01101110 00100111 01110100 00100000 01100010 01101111 01101110 01100110 01101001 01110010 01100101 01110011 00100000 01100110 01110101 01101110 00100001 00111111");