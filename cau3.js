let table = document.getElementById("ManagementTable")
let bookCode = document.getElementById("bookCode-el")
let bookName = document.getElementById("bookName-el")
let releasedYear = document.getElementById("releasedYear-el")
let qualities = document.getElementById("qualities-el")
let status = document.getElementById("status-el")
let productList = new ProductList()


function addNewBook(){
    let book = new Book(bookCode.value,bookName.value,releasedYear.value,qualities.value,status.value)
    productList._ProductList.push(book)
    console.log(productList._ProductList);
    updateProductList()
    clearInput()

}


function updateProductList() {
    let tableDraw = "";
    for (let i = 0; i < productList._ProductList.length; i++) {
        tableDraw += `<tr>
                        <td>${productList._ProductList[i]._bookCode}</td>
                        <td>${productList._ProductList[i]._bookName}</td>
                        <td>${productList._ProductList[i]._releasedYear}</td>
                        <td>${productList._ProductList[i]._qualities}</td>
                        <td>${productList._ProductList[i]._status}</td>
                        </tr>`
    }
    table.innerHTML += tableDraw;
}


function clearInput(){
     bookCode.value = ""
     bookName.value = ""
     releasedYear.value = ""
     qualities.value = ""
     status.value = ""
}
// <th>Mã Số Sách</th>
// <th>Tên Sách</th>
// <th>Năm Xuấn Bản</th>
// <th>Số Quyển</th>
// <th>Tình Trạng</th>

// function addBookQuality(){
//
//
// }
//
// borrowingBook()
//
// displayMostBookQuality()



