let input1 = +prompt("nhập số nguyên dương đầu tiên")
let input2 = +prompt("nhập số nguyên dương đầu tiên")
let storeInput1 = []
let storeInput2 = []
let total1 = 0;
let total2 = 0;
let result = false


function findTheTotalOfInput() {
    for (let i = 1; i < input1; i++) {
        if (input1 % i === 0) {
            storeInput1.push(i)
            total1 += i
        }
    }
    for (let j = 1; j < input2; j++) {
        if (input2 % j === 0) {
            storeInput2.push(j)
            total2 += j

        }
    }
        console.log(storeInput1);
        console.log(storeInput2);
}

findTheTotalOfInput()

function checkingAndDisplay(){
if (total1===input2 && total2===input1) {
    result=true
alert(`số ${input1} và ${input2} là số thân thiết`)
} else{
    result = false
alert(`số ${input1} và ${input2} không phải là số thân thiết`)
}

}
checkingAndDisplay()


