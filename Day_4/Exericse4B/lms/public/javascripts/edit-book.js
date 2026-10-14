document.addEventListener("DOMContentLoaded", function () {
  loadBook();
  document.getElementById("editBookForm").addEventListener("submit", saveBook);
});

function getId() {
  var params = new URLSearchParams(window.location.search);
  return params.get("id");
}

//loadbook for prefilled fields
async function loadBook() {
  var id = getId();

  if (!id) {
    showMessage("No book selected", false);
    return;
  }

  try {
    var response = await fetch("/api/books/" + id);
    var result = await response.json();

    if (!result.success) {
      showMessage(result.message, false);
      return;
    }

    document.getElementById("bookname").value = result.data.bookname;
    document.getElementById("author").value = result.data.author;
    document.getElementById("isbn").value = result.data.isbn;
  } catch (error) {
    console.error(error);
    showMessage("Could not load the book", false);
  }
}

//update the book
async function saveBook(event) {
  event.preventDefault();

  var button = event.target.querySelector("button[type=submit]");
  button.disabled = true;   

  var id = getId();

  var book = {
    bookname: document.getElementById("bookname").value.trim(),
    author: document.getElementById("author").value.trim(),
    isbn: document.getElementById("isbn").value.trim(),
  };

  try {
    var response = await fetch("/api/books/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(book),
    });
    var result = await response.json();

    if (!result.success) {
      showMessage(result.message, false);
      button.disabled = false;
      return;
    }

    window.location.href = "/book-list.html";
  } catch (error) {
    console.error(error);
    showMessage("Something went wrong", false);
    button.disabled = false;
  }
}

function showMessage(text, isSuccess) {
  var box = document.getElementById("formMessage");
  box.textContent = text;
  box.className = isSuccess ? "alert alert-success" : "alert alert-danger";
  box.style.display = "block";
}