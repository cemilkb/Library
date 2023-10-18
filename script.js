// Input

const bookName = document.getElementById("book-name")
const authorName = document.getElementById("author-name")
const isRead = document.getElementById("is-read")
const pages = document.getElementById("pages")
const summary = document.getElementById("summary")

const settingsName = document.getElementById("settings-name")
const settingsAuthor = document.getElementById("settings-author")
const settingsIsRead = document.getElementById("settings-is-read")
const settingsPages = document.getElementById("settings-pages")
const settingsSummary = document.getElementById("settings-summary")

// Get Main

let main = document.querySelector("main")

// Create

const library = {
 "Lord Of The Rings": { name: 'Lord Of The Rings', author: 'J.R.R Tolkien', pages: '123', read: false, summary: 'NANANANANANANANANANANANANANANANAANANANANANAANANANANAN' },
  "falan filan": { name: 'falan filan', author: 'J.R.R Tolkien', pages: '123', read: false, summary: 'deneme' },
  "ölümlü dünya": { name: 'ölümlü dünya', author: 'J.R.R Tolkien', pages: '123', read: false, summary: 'kobik' },
  "cinayet süsü": { name: 'cinayet süsü', author: 'J.R.R Tolkien', pages: '123', read: false, summary: 'en kobiğii' },
}

// Function

function book(name, author, pages, read, summary) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
  this.summary = summary
}



function makeCard(name, author, pages, read, summary) {

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
  img.setAttribute("src", "assets/kullan.png")
  h1.textContent = `${name}:`
  p.textContent = `${summary}`
  cardBottom.classList.add("card-bottom")
  icon1.innerHTML = `<iconify-icon icon="tabler:eye-filled" class="is-read"></iconify-icon>`
  pageAuthor.classList.add("page-author")
  authorP.textContent = `${author}`
  pageP.textContent = `${pages}`
  icon2.innerHTML = `<iconify-icon icon="ant-design:setting-filled" class="card-settings"></iconify-icon>`

  icon2.addEventListener("click", () => {
    settingsName.value = `${name}`
    settingsAuthor.value = `${author}`
    settingsPages.value = `${pages}`
    settingsSummary.value = `${summary}`


    bookSettings.showModal();

  })


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

const bookSettings = document.querySelector("#book-settings");
const closeBookSettings = document.querySelector("#close-book-settings");

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
  let as = true

  for (key in library) {
    if (key == bookName.value) {
      as = false
    }
  }

  // Make book and add library
  let newBook = new book(bookName.value, authorName.value, pages.value, isRead.checked, summary.value)

  // Same book control area
  if (as == true) {
    library[`${bookName.value}`] = newBook
    makeCard(library[`${bookName.value}`].name, library[`${bookName.value}`].author, library[`${bookName.value}`].pages, library[`${bookName.value}`].read, library[`${bookName.value}`].summary)
  } else {
    alert("NAPTIN YİĞEN SEN YAW AYNI ADLI BİR KİTAP DA VAR YİĞEN")
  }

  addBook.close();
});

// Setting Book Modal

closeBookSettings.addEventListener("click", (e) => {
  e.preventDefault()
  library[`${settingsName.value}`].author = `${settingsAuthor.value}`
  library[`${settingsName.value}`].pages = `${settingsPages.value}`
  library[`${settingsName.value}`].summary = `${settingsSummary.value}`
})


for (key in library) {
  makeCard(library[`${key}`].name, library[`${key}`].author, library[`${key}`].pages, library[`${key}`].read, library[`${key}`].summary)
}

