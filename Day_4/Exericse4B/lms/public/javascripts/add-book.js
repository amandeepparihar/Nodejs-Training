document.addEventListener("DOMContentLoaded", function () {
  document.getElementById("addBookForm").addEventListener("submit", saveBook);
});

async function saveBook(event) {
  event.preventDefault();

  var button = event.target.querySelector("button[type=submit]");
  button.disabled = true;

  var book = {
    bookname: document.getElementById("bookname").value.trim(),
    author: document.getElementById("author").value.trim(),
    isbn: document.getElementById("isbn").value.trim(),
  };

  try {
    var response = await fetch("/api/books", {
      method: "POST",
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
