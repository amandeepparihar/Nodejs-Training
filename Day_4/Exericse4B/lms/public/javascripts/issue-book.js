document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("issueBookForm")
    .addEventListener("submit", IssueBook);
});

async function IssueBook(event) {
  event.preventDefault();

  var button = event.target.querySelector("button[type=submit]");
  button.disabled = true;

  var issueBook = {
    bookId: document.getElementById("bookName").value.trim(),
    studentId: document.getElementById("stuName").value.trim(),
  };

//   console.log("issuebook =>", issueBook);

  try {
    var response = await fetch("/api/issues", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(issueBook),
    });

    var result = await response.json();
    console.log("result - > ", result);

    if (!result.success) {
      showMessage(response.message, false);
      button.disabled = false;
      return;
    }

    window.location.href = "/issue-list.html";
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
