document.addEventListener("DOMContentLoaded", function () {
  document
    .getElementById("addStudentForm")
    .addEventListener("submit", saveStudent);
});

async function saveStudent(event) {
  event.preventDefault();

  var button = event.target.querySelector("button[type=submit]");
  button.disabled = true;

  var formData = new FormData(event.target);

  try {
    var response = await fetch("/api/students", {
      method: "POST",
      body: formData,
    });
    var result = await response.json();

    if (!result.success) {
      showMessage(result.message, false);
      button.disabled = false;
      return;
    }

    window.location.href = "/student-list.html";
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
