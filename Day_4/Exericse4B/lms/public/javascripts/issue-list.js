document.addEventListener("DOMContentLoaded", function () {
  loadIssues();
});

async function loadIssues() {
  var tbody = document.querySelector("#simpletable tbody");

  try {
    var response = await fetch("/api/issues");
    var result = await response.json();

    if (!result.success) {
      tbody.innerHTML = '<tr><td colspan="6">' + result.message + "</td></tr>";
    }

    var issues = result.data;

    if (issues.length === 0) {
      tbody.innerHTML = '<tr><td colspan="6">No issues Found</td></tr>';
    }

    tbody.innerHTML = issues.map(buildRow).join("");
    $("#simpletable").DataTable();
  } catch (error) {
    console.error(error);
    tbody.innerHTML = '<tr><td colspan="6">Cloud Not load issues</td></tr>';
  }
}

function buildRow(issues) {
  var returnCell =
    issues.status === "issued"
      ? '<a href="#" class="return-link" data-id="' + issues.id + '">Return</a>'
      : "";

  return (
    "<tr>" +
    "<td>" +
    escapeHtml(issues.id) +
    "</td>" +
    "<td>" +
    escapeHtml(issues.Book.bookname) +
    "</td>" +
    "<td>" +
    escapeHtml(issues.Student.name) +
    "</td>" +
    "<td>" +
    escapeHtml(issues.issuedate) +
    "</td>" +
    "<td>" +
    escapeHtml(issues.returndate) +
    "</td>" +
    "<td>" +
    returnCell +
    "</td>" +
    "</tr>"
  );
}

function escapeHtml(text) {
  var div = document.createElement("div");
  div.textContent = text == null ? "" : text;
  return div.innerHTML;
}
