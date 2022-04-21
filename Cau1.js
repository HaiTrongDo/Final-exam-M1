let input = prompt("Nhập số bất kì it hơn 50 số")
let arrInput = input.split("")
let avg;
console.log(arrInput)
let status = false
let total = 0;
count = 0

function convertArr() {

}

function checkingInput() {
    if (arrInput.length > 50) {
        alert("không nhập quá 50 số")
        checkingInput()
    } else {
        status = true
        processing()
    }
}


checkingInput()


function processing() {

    if (status) {
        for (let i = 0; i < arrInput.length; i++) {
            if (i % 2 === 1) {
                total += arrInput[i];
                count++
            }
        }
        avg = total / count
        alert(`Hiển thị ra màn hình trung bình cộng các số lẻ ở vị trí chẵn` + avg + `\n tổng là ${total} \n và có ${count} số ở vị trí chẵn`)
    }
}

