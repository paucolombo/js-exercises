function palindrome(str) {
    str = str.replace(/[\W_]/g, '').toLowerCase();
    let str2 = str.split("");
    str2 = str2.reverse().join("");
    if (str === str2) {
        return true;
    } else {
        return false;
    }
}
  
palindrome("race car");