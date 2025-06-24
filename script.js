const addButton = document.querySelector(".add")
const bookForm = document.querySelector(".bookForm")
const submitForm = document.querySelector(".submit")
const shelf1 = document.querySelector(".shelf1")
const shelf2 = document.querySelector(".shelf2")

addButton.addEventListener("click",()=>{
    bookForm.style.display = "flex"
})

submitForm.addEventListener("click",()=>{
    bookForm.style.display = "none"
})

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

const myLib = [
    {
        bookName: "The hobbit",
        bookAuthor: "J.R.R Tolkein",
        bookPages: "990",
        bookReadOrNot: true
    },
    {
        bookName: "The hobbit2",
        bookAuthor: "J.R.R Tolkein",
        bookPages: "990",
        bookReadOrNot: false
    },
    {
        bookName: "The hobbit3",
        bookAuthor: "J.R.R Tolkein",
        bookPages: "990",
        bookReadOrNot: true
    },
    {
        bookName: "The hobbit4",
        bookAuthor: "J.R.R Tolkein",
        bookPages: "990",
        bookReadOrNot: true
    },
    {
        bookName: "The hobbit5",
        bookAuthor: "J.R.R Tolkein",
        bookPages: "990",
        bookReadOrNot: false
    }
]

for (let i = 0; i < myLib.length; i++) {
    console.log(myLib[i].bookName)
}