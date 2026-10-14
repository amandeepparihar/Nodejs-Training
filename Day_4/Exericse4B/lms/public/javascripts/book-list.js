document.addEventListener("DOMContentLoaded", function () {
  loadBooks();
});

async function loadBooks() {
  var tbody = document.querySelector("#simpletable tbody");

  try {
    var response = await fetch("/api/books");
    var result = await response.json();

    if (!result.success) {
      tbody.innerHTML = '<tr><td colspan="4">' + result.message + "</td></tr>";
      return;
    }

    var books = result.data;

    if (books.length === 0) {
      tbody.innerHTML = '<tr><td colspan="4">No books found</td></tr>';
      return;
    }

    tbody.innerHTML = books.map(buildRow).join("");

    $("#simpletable").DataTable();
  } catch (error) {
    console.error(error);
    tbody.innerHTML = '<tr><td colspan="4">Could not load books</td></tr>';
  }
}

function buildRow(book) {
  return (
    "<tr>" +
    "<td>" +
    escapeHtml(book.bookname) +
    "</td>" +
    "<td>" +
    escapeHtml(book.author) +
    "</td>" +
    "<td>" +
    escapeHtml(book.isbn) +
    "</td>" +
    '<td><a href="edit-book.html?id=' +
    book.id +
    '" title="Edit">' +
    '<i class="feather icon-edit"></i></a></td>' +
    "</tr>"
  );
}

function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text == null ? "" : text;
  return div.innerHTML;
}
