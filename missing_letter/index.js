function fearNotLetter(str) {
    let numberLetter;
    for(let i=0; i<str.length-1;i++){
      numberLetter=str.charCodeAt(i);
      if((numberLetter+1)!=(str.charCodeAt(i+1))){
        return String.fromCharCode(numberLetter+1);
      }     
    }
    return undefined;
  }
  
fearNotLetter("abce");