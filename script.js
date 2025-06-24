const addButton = document.querySelector(".add")
const bookForm = document.querySelector(".bookForm")
const submitForm = document.querySelector(".submit")
const shelf1 = document.querySelector(".shelf1")
const shelf2 = document.querySelector(".shelf2")
let books1 = document.querySelector(".books1")
let books2 = document.querySelector(".books2")
let formBookName = document.getElementById("bookName")
let formBookAuthor = document.getElementById("authorName")
let formBookPage = document.getElementById("pageCount")
let books1Count = 0
let books2Count = 0

const myLib = []

function Book(name,author,pages,readOrNot) {
    if (!new.target) {
        throw Error("You must use the 'new' operator to call the constructor");
    }
    const randomId = crypto.randomUUID()
    this.bookName = name
    this.bookAuthor = author
    this.bookPages = pages
    this.bookReadOrNot = readOrNot
    this.bookId = randomId
}

function addBooksToLib(name,author,pages,readOrNot) {
    const newBook = new Book(name,author,pages,readOrNot)
    myLib.push(newBook)
}

function displayBooks() {
    books1.innerHTML = ''
    books2.innerHTML = ''
    books1Count = 0
    books2Count = 0
    for (let i = 0; i < myLib.length; i++) {
        const book = document.createElement('div')
        const bookName = document.createElement('p')
        const bookAuthor = document.createElement('p')
        const bookPages = document.createElement('p')
        const bookReadOrNot = document.createElement('p')

        bookName.textContent = `${myLib[i].bookName}`
        bookAuthor.textContent = `${myLib[i].bookAuthor}`
        bookPages.textContent = `${myLib[i].bookPages} pages`
        if (myLib[i].bookReadOrNot) {
            bookReadOrNot.textContent = "Read"
        }
        else {
            bookReadOrNot.textContent = "Not Read"
        }
        
        book.appendChild(bookName)
        book.appendChild(bookAuthor)
        book.appendChild(bookPages)
        book.appendChild(bookReadOrNot)

        book.style.backgroundColor = "#223540"
        book.style.padding = "1.8vh"
        book.style.borderRadius = "1vh"

        book.style.display = "flex"
        book.style.flexDirection = "column"
        book.style.fontSize = "2vh"
        books1.style.display = "flex"
        books1.style.justifyContent = "space-evenly"
        books2.style.display = "flex"
        books2.style.justifyContent = "space-evenly"
        if (books1Count < 5) {
            books1.appendChild(book)
            books1Count += 1
        }
        else if (books2Count < 5) {
            books2.appendChild(book)
            books2Count += 1
        }
    }
}

addButton.addEventListener("click",()=>{
    bookForm.style.display = "flex"
})

submitForm.addEventListener("click",(event)=>{
    bookForm.style.display = "none"
    event.preventDefault()
    let formBookReadOrNot = document.querySelector('input[name="readStatus"]:checked').value;
    if (formBookReadOrNot.value === "read") {
        addBooksToLib(formBookName.value,formBookAuthor.value,formBookPage.value,true)
    } else {
        addBooksToLib(formBookName.value,formBookAuthor.value,formBookPage.value,false)
    }
    console.log(myLib)
    displayBooks()
})
