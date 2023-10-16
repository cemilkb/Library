// Input

const bookName = document.getElementById("book-name")
const authorName = document.getElementById("author-name")
const isRead = document.getElementById("is-read")
const pages = document.getElementById("pages")
const summary = document.getElementById("summary")

// Create

const bu = new Object()

// Function

function book(name, author, pages, read, summary) {
  this.name = name
  this.author = author
  this.pages = pages
  this.read = read
  this.summary = summary
}

// Modal

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

  let  a = new book(bookName.value, authorName.value, pages.value, isRead.checked, summary.value)
  bu[`${bookName.value}`] = a
  addBook.close();
});