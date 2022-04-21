class Book {
    constructor(bookCode, bookName, releasedYear, qualities, status) {
        this._bookCode = bookCode;
        this._bookName = bookName;
        this._releasedYear = releasedYear;
        this._qualities = qualities
        this._status = status;
    }



    addBookQuality(){}

    addNewBook(){}

    borrowingBook(){    }

    displayMostBookQuality(){}

}


class ProductList{
    constructor(){
        this._ProductList =[]
    }

    buildBooklist(){
        let Product = new Book(bookCode, bookName, releasedYear, qualities, status)
        this._ProductList.push(Product)
    }


}