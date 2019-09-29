function rot13(str) { 
    let numberLetter;
    let newNumber = 0;
    let newArr = [];
    let regex = /[A-Z]/;
    for (let i = 0; i < str.length; i++) {
        numberLetter = str.charCodeAt(i);
        if (!regex.test(str[i])) {
            newNumber = numberLetter;
        } else {
            newNumber = numberLetter + 13;
            if (newNumber > 90) {
                newNumber = newNumber - 90 + 64;
            }
        }
        newArr.push(String.fromCharCode(newNumber));
    }
    newArr = newArr.join("");
    return newArr;
}
// Change the inputs below to test
console.log(rot13("SERR CVMMN!"));