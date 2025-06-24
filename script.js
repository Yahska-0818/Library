const addButton = document.querySelector(".add")
const bookForm = document.querySelector(".bookForm")
const submitForm = document.querySelector(".submit")

addButton.addEventListener("click",()=>{
    bookForm.style.display = "flex"
})

submitForm.addEventListener("click",()=>{
    bookForm.style.display = "none"
})