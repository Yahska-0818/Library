const addButton = document.querySelector(".add")
const bookForm = document.querySelector(".bookForm")
const submitForm = document.querySelector(".submit")
const closeForm = document.querySelector(".close")
let shelf = document.querySelector(".shelf")
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
    shelf.innerHTML = ""
    for (let i = 0; i < myLib.length; i++) {
        const book = document.createElement('div')
        const bookName = document.createElement('p')
        const bookAuthor = document.createElement('p')
        const bookPages = document.createElement('p')
        const bookReadOrNot = document.createElement('p')
        let bookButtons = document.createElement('div')
        let removeButton = document.createElement('button')
        let toggleReadButton = document.createElement('button')

        book.classList = "book"

        removeButton.textContent = "Remove book"
        toggleReadButton.textContent = "Toggle read"

        bookButtons.appendChild(removeButton)
        bookButtons.appendChild(toggleReadButton)

        bookButtons.classList = "bookButtons"

        removeButton.classList = "removeButton"
        toggleReadButton.classList = "toggleReadButton"

        removeButton.dataset.index = myLib[i].bookId
        toggleReadButton.dataset.index = myLib[i].bookId

        bookName.textContent = `${myLib[i].bookName}`
        bookAuthor.textContent = `${myLib[i].bookAuthor}`
        bookPages.textContent = `${myLib[i].bookPages} pages`
        if (myLib[i].bookReadOrNot) {
            bookReadOrNot.textContent = "Read"
        }
        else {
            bookReadOrNot.textContent = "Unread"
        }
        
        book.appendChild(bookName)
        book.appendChild(bookAuthor)
        book.appendChild(bookPages)
        book.appendChild(bookReadOrNot)
        book.appendChild(bookButtons)

        book.dataset.index = myLib[i].bookId

        shelf.appendChild(book)
    }
    const removeButtons = document.getElementsByClassName('removeButton')
    for (let i = 0; i < removeButtons.length; i++) {
        removeButtons[i].addEventListener("click",()=>{
            indexId = removeButtons[i].dataset.index
            for (let j = 0; j < myLib.length; j++) {
                if (myLib[j].bookId === indexId) {
                    myLib.splice(j,1)
                }
            }
            displayBooks()
        })
    }
    const toggleReadButtons = document.getElementsByClassName('toggleReadButton')
    for (let i = 0; i < toggleReadButtons.length; i++) {
        toggleReadButtons[i].addEventListener("click",()=>{
            indexId = toggleReadButtons[i].dataset.index
            for (let j = 0; j < myLib.length; j++) {
                if (myLib[j].bookId === indexId) {
                    if (myLib[j].bookReadOrNot) {
                        myLib[j].bookReadOrNot = false
                    } else {
                        myLib[j].bookReadOrNot = true
                    }
                }
            }
            displayBooks()
        })
    }
}

addButton.addEventListener("click",()=>{
    bookForm.style.display = "flex"
})

submitForm.addEventListener("click",(event)=>{
    bookForm.style.display = "none"
    event.preventDefault()
    let formBookReadOrNot = document.querySelector('input[name="readStatus"]:checked');

    if (formBookReadOrNot.value == "read") {
        addBooksToLib(formBookName.value,formBookAuthor.value,formBookPage.value,true);
    } else {
        addBooksToLib(formBookName.value,formBookAuthor.value,formBookPage.value,false);
    }
    displayBooks()
    formBookAuthor.value = ""
    formBookName.value = ""
    formBookPage.value = ""
})

closeForm.addEventListener("click",()=>{
    bookForm.style.display = "none"
    displayBooks()
    formBookAuthor.value = ""
    formBookName.value = ""
    formBookPage.value = ""
})