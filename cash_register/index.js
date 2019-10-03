function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    let totalCid = 0;
    let final = 0;
    let newArr = [];
    let finalArray = [];
    let changeCurrency = change;
    let j = 0;
    const equivalences = [0.01, 0.05, 0.1, 0.25, 1.00, 5.00, 10.00, 20.00, 100.00];
    const currencies = ["PENNY", "NICKEL", "DIME", "QUARTER", "ONE", "FIVE", "TEN", "TWENTY", "ONE HUNDRED"];
    for (let i = 0; i < cid.length; i++) {
        totalCid += cid[i][1];
        newArr.push(cid[i][1] / equivalences[i]);
    }
    if (change > totalCid) {
        return { status: "INSUFFICIENT_FUNDS", change: [] };
    } else if (change === totalCid) {
        return { status: "CLOSED", change: cid };
    } else {
        for (let i = newArr.length - 1; i >= 0; i--) {
            if (changeCurrency >= equivalences[i] && newArr[i] > 0) {
                changeCurrency = changeCurrency - equivalences[i];
                changeCurrency = changeCurrency.toPrecision(4);
                newArr[i] = newArr[i] - 1;
                j++;
                if (newArr[i] === 0 || changeCurrency < equivalences[i]) {
                    finalArray.push([currencies[i], equivalences[i] * j]);
                    j = 0;
                } else if (newArr[i] != 0 && changeCurrency >= equivalences[i] && changeCurrency != 0) {
                    i++;
                }
            }
        }
        for (let i = 0; i < finalArray.length; i++) {
            final += finalArray[i][1];
        } if (change > final) {
            return { status: "INSUFFICIENT_FUNDS", change: [] };
        }
        return { status: "OPEN", change: finalArray };
    }
}
console.log(checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]));