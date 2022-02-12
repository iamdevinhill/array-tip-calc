function calcTip(bill) {
    return tip = bill <= 300 && bill >= 50 ? bill * 0.15 :
        bill * 0.2;
}

const bills = [125, 555, 44]
const tips = []
const total = []
// 18.75, 111, 88

const firstBill = tips.unshift(calcTip(125))
const secBill = tips.push(calcTip(555))
const thirdBill = tips.push(calcTip(44))


console.log(tips)
