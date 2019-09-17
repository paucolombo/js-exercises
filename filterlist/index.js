function filter_list(l) {
    let newArray = [];
    for (let i = 0; i < l.length; i++) {
        if (typeof l[i] === "number" && l[i] >= 0) {
            newArray.push(l[i]);
        }
    }
    console.log(newArray);
    return newArray;
}
filter_list([1, 2, 'a', 'b']);