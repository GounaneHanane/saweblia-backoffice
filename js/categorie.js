$(document).ready(function () {
  $.getJSON("http://webapp.saweblia.ma/categories", function (data) {
    var i;
    var table = data.Categories;
    for (i = 0; i < table.length; i++) {
      $("#categorie-table").append('<tr id="' + table[i].CategorieID + '">');
      if (table[i].Libelle != null)
        $("#categorie-table").append("<td>" + table[i].Libelle + "</td>");
      else $("#categorie-table").append("<td></td>");
      if (table[i].Description != null)
        $("#categorie-table").append("<td>" + table[i].Description + "</td>");
      else $("#categorie-table").append("<td></td>");
      if (table[i].CategorieMedia != null)
        $("#categorie-table").append(
          "<td>" + table[i].CategorieMedia + "</td>"
        );
      else $("#categorie-table").append("<td></td>");
      $("#categorie-table").append(
        '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteClient(' +
          table[i].CategorieID +
          ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
          table[i].CategorieID +
          ')"><span class="material-icons">create</span></button></td></tr>'
      );
    }
  });
  $("#add-categorie").click(function () {
    window.location.replace("../Categorie/addCategorie.php");
  });
  $("#btn-add").click(function () {
    var arr = {
      libelle: $("#libelle").val(),
      description: $("#description").val(),
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/categories",
      type: "POST",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert(msg);
      },
    });
  });
  $("#btn-edit").click(function () {
    var arr = {
      CategorieID: localStorage.getItem("idCategorieEdited"),
      libelle: $("#libelle").val(),
      description: $("#description").val(),
    };

    console.log(arr["CategorieID"])
    $.ajax({
      url:
        "http://webapp.saweblia.ma/categories/" +
        localStorage.getItem("idCategorieEdited"),
      type: "PUT",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert(msg);
      },
    });
  });
});

function deleteClient(idCategorie) {
  if (confirm("Voulez-vous vraiment supprimer cette categorie ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/categories/" + idCategorie,
      type: "DELETE",
      success: function (msg) {
        $("#message").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>'
        );
      },
    });
}
function modiferClientForm(idCategorie) {
  localStorage.setItem("idCategorieEdited", idCategorie);
  window.location.replace("../Categorie/editCategorie.php");
}
