// Input

const bookName = document.getElementById("book-name")
const authorName = document.getElementById("author-name")
const isRead = document.getElementById("is-read")
const pages = document.getElementById("pages")
const summary = document.getElementById("summary")

// Get Main

let main = document.querySelector("main")

// Create

const library = new Object()

// Function

function book(name, author, pages, read, summary) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
  this.summary = summary
}



function makeCard(book) {

  let div = document.createElement("div")
  let img = document.createElement("img")
  let p = document.createElement("p")
  let h1 = document.createElement("h1")
  let cardBottom = document.createElement("div")
  let icon1 = document.createElement("div")
  let pageAuthor = document.createElement("div")
  let pageP = document.createElement("p")
  let authorP = document.createElement("p")
  let icon2 = document.createElement("div")

  div.classList.add("card")
  div.setAttribute("name", `${book.name}`)
  img.setAttribute("src", "assets/kullan.png")
  p.textContent = `${book.summary}`
  h1.textContent = `${book.name}:`
  cardBottom.classList.add("card-bottom")
  icon1.innerHTML = `<iconify-icon icon="tabler:eye-filled" class="is-read"></iconify-icon>`
  pageAuthor.classList.add("page-author")
  authorP.textContent = `${book.author}`
  pageP.textContent = `${book.pages}`
  icon2.innerHTML = `<iconify-icon icon="ant-design:setting-filled" class="card-settings"></iconify-icon>`
  icon2.setAttribute("check",`${book.name}`)


  div.appendChild(img)
  div.appendChild(h1)
  div.appendChild(p)
  cardBottom.appendChild(icon1)
  pageAuthor.appendChild(authorP)
  pageAuthor.appendChild(pageP)
  cardBottom.appendChild(pageAuthor)
  cardBottom.appendChild(icon2)
  div.appendChild(cardBottom)

  main.appendChild(div)
}

// Modal Select

const userSettings = document.querySelector("#user-settings");
const showUserSettings = document.querySelector(".user-settings");
const closeUserSettings = document.querySelector("#close-user-settings");

const addBook = document.querySelector("#add-book");
const showBook = document.querySelector(".add");
const closeBook = document.querySelector("#close-book");

// User Settings modal

showUserSettings.addEventListener("click", () => {
  userSettings.showModal();
});

closeUserSettings.addEventListener("click", () => {
  userSettings.close();
});

// Add Book modal

showBook.addEventListener("click", () => {
  addBook.showModal();
});

closeBook.addEventListener("click", (e) => {
  e.preventDefault()

  let newBook = new book(bookName.value, authorName.value, pages.value, isRead.checked, summary.value)
  library[`${bookName.value}`] = newBook

  makeCard(newBook)

  let buna = document.querySelector(`div[check = "${newBook.name}" ]`)

  buna.addEventListener("click", ()=>{
    library[`dangoz`] = library[`${newBook.name}`]
    console.log(library[`dangoz`])
   delete library[`${newBook.name}`]
  })
   
  console.log(buna)
  addBook.close();
});

