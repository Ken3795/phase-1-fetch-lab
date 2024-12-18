function fetchBooks() {
  // Fetching data from the Game of Thrones API
  return fetch("https://anapioficeandfire.com/api/books")
    .then((resp) => resp.json()) // Converting response to JSON
    .then((data) => {
      renderBooks(data); // Passing JSON data to renderBooks function
    })
    .catch((error) => console.error("Error fetching data:", error));
}

function renderBooks(books) {
  // Getting the <ul> element to render book titles
  const bookList = document.getElementById("book-list");
  
  // Clearing the list in case of multiple renders
  bookList.innerHTML = "";

  // Iterating through the books and adding titles to the list
  books.forEach((book) => {
    const li = document.createElement("li");
    li.textContent = book.name; // Setting the book title as text
    bookList.appendChild(li);
  });
}

// Calling fetchBooks when the page loads
fetchBooks();
