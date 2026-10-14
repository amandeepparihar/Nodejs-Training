document.addEventListener("DOMContentLoaded", function () {
  loadBooks();
});

async function loadBooks() {
  var tbody = document.querySelector("#simpletable tbody");

  try {
    var response = await fetch("/api/books");
    var result = await response.json();

    if (!result.success) {
      tbody.innerHTML = '<tr><td colspan="5">' + result.message + "</td></tr>";
      return;
    }

    var books = result.data;

    if (books.length === 0) {
      tbody.innerHTML = '<tr><td colspan="5">No books found</td></tr>';
      return;
    }

    tbody.innerHTML = books.map(buildRow).join("");

    if ($.fn.DataTable.isDataTable("#simpletable")) {
      $("#simpletable").DataTable().destroy();
    }
    $("#simpletable").DataTable();
  } catch (error) {
    console.error(error);
    tbody.innerHTML = '<tr><td colspan="5">Could not load books</td></tr>';
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
    '<td><a href="/edit-book.html?id=' +
    book.id +
    '" title="Edit">' +
    '<i class="feather icon-edit"></i></a></td>' +
    '<td><a href="#" class="delete-link text-danger" data-id="' +
    book.id +
    '" data-name="' +
    escapeHtml(book.bookname) +
    '" title="Delete">' +
    '<i class="feather icon-trash-2"></i></a></td>' +
    "</tr>"
  );
}

function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text == null ? "" : text;
  return div.innerHTML;
}

document.addEventListener("click", async function (event) {
  var link = event.target.closest(".delete-link");

  if (!link) {
    return;
  }

  event.preventDefault();

  if (!confirm('Delete "' + link.dataset.name + '"?')) {
    return;
  }

  try {
    var response = await fetch("/api/books/" + link.dataset.id, {
      method: "DELETE",
    });
    var result = await response.json();

    if (!result.success) {
      alert(result.message);
      return;
    }

    loadBooks();
  } catch (error) {
    console.error(error);
    alert("Could not delete the book");
  }
});
