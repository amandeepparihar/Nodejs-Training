document.addEventListener("DOMContentLoaded", function () {
  loadStudents();
});

async function loadStudents() {
  var tbody = document.querySelector("#simpletable tbody");

  try {
    var response = await fetch("/api/students");
    var result = await response.json();

    if (!result.success) {
      tbody.innerHTML = '<tr><td colspan="6">' + result.message + "</td></tr>";
      return;
    }

    var students = result.data;

    if (students.length === 0) {
      tbody.innerHTML = '<tr><td clospan="6">No Students found</td></tr>';
      return;
    }

    tbody.innerHTML = students.map(buildRow).join("");
    $("#simpletable").DataTable();
  } catch (error) {
    console.error(error);
    tbody.innerHTML = '<tr><td colspan="6">Could Not load students</td></tr>';
  }
}

function buildRow(student) {
  var photo = student.photo
    ? "/uploads/" + student.photo
    : "/assets/images/user/avatar-1.jpg";

  return (
    "<tr>" +
    '<td><img class="img-fluid img-radius mr-1" src="' +
    photo +
    '" alt=""></td>' +
    "<td>" +
    escapeHtml(student.id) +
    "</td>" +
    "<td>" +
    escapeHtml(student.name) +
    "</td>" +
    "<td>" +
    escapeHtml(student.rollno) +
    "</td>" +
    "<td>" +
    escapeHtml(student.phoneno) +
    "</td>" +
    '<td><a href="' +
    photo +
    '" download title="Download">' +
    '<i class="fa fa-download"></i></a></td>' +
    "</tr>"
  );
}

function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text == null ? "" : text;
  return div.innerHTML;
}
