document.addEventListener("DOMContentLoaded", function () {
  loadStudentFilter();
  loadBookFilter();
});

async function loadStudentFilter() {
  var select = document.querySelector("#stuName");

  try {
    var response = await fetch("/api/students");
    var result = await response.json();

    if (!result.success) {
      select.innerHTML = "<option>" + result.message + "</option>";
      return;
    }

    select.innerHTML =
      '<option value="">All Students</option>' +
      result.data
        .map(function (student) {
          return (
            '<option value="' +
            student.id +
            '">' +
            escapeHtml(student.name) +
            " (" +
            escapeHtml(student.rollno) +
            ")" +
            "</option>"
          );
        })
        .join("");
  } catch (error) {
    console.error(error);
    select.innerHTML = "<option>Could not load students</option>";
  }
}

async function loadBookFilter() {
  var select = document.querySelector("#bookName");

  try {
    var response = await fetch("/api/books");
    var result = await response.json();

    if (!result.success) {
      select.innerHTML = "<option>" + result.message + "</option>";
      return;
    }

    select.innerHTML =
      '<option value="">All Books</option>' +
      result.data
        .map(function (book) {
          return (
            '<option value="' +
            book.id +
            '">' +
            escapeHtml(book.bookname) +
            " (" +
            escapeHtml(book.isbn) +
            ")" +
            "</option>"
          );
        })
        .join("");
  } catch (error) {
    console.error(error);
    select.innerHTML = "<option>Could not load books</option>";
  }
}
