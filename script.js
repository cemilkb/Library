
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

closeBook.addEventListener("click", () => {
  addBook.close();
});