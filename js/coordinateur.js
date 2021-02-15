if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/coordinateurs",
    type: "GET",

    success: function (data) {
      var table = data.Coordinateurs;
      $("#coordianteur-table").DataTable({
        data: table,
        columns: [
          { data: "Nom" },
          { data: "Telephone" },
          { data: "Email" },
          { data: "Ville" },
          { data: "Cin" },
          {
            data: "Disponible",
            render: function (data, type, row) {
              if (data == true)
                return (
                  '<label class="switch"><input  onchange="block(' +
                  row.CoordinateurID +
                  ')" type="checkbox" checked><span class="slider round"></span></label>'
                );
              else
                return (
                  '<label class="switch"><input  onchange="block(' +
                  row.CoordinateurID +
                  ')" type="checkbox"><span class="slider round"></span></label>'
                );
            },
          },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deletecoordianteur(' +
                data.CoordinateurID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                data.CoordinateurID +
                ')"><span class="material-icons">create</span></button>'
              );
            },
          },
        ],
        order: [],
        language: {
          paginate: {
            previous: "Précédent",
            next: "Suivant",
          },
          lengthMenu: "Afficher _MENU_ enregistrements par page",
          zeroRecords: "Rien n'a été trouvé",
          info: "Affichage de la page _PAGE_ de _PAGES_",
          infoEmpty: "Aucun enregistrement disponible",
          infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
          search: "Recherche :",
        },
      });
    },
  });
  $("#add-coordinateur").click(function () {
    window.location.href = "../Personnel/addCoordinateur.php";
  });
  $("#addCoordinateur").submit(function (e) {
    var arr = {
      nom: $("#Nom").val(),
      telephone: $("#telephone").val(),
      email: $("#email").val(),
      ville: $("#ville").val(),
      cin: $("#cin").val(),
      disponibilite: $("#dispo").is(":checked"),
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/coordinateurs",
      type: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {},
      error: function () {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est ajouté avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/coordinateurs.php";
        }, 1000);
      },
    });

    e.preventDefault();
  });

  $("#editCoordinateur").submit(function (e) {
    var arr = {
      nom: $("#Nom").val(),
      telephone: $("#telephone").val(),
      email: $("#email").val(),
      ville: $("#ville").val(),
      cin: $("#cin").val(),
      disponibilite: $("#dispo").is(":checked"),
    };

    $.ajax({
      url:
        "http://webapp.saweblia.ma/coordinateurs/" +
        window.location.search.substring(1).split("?"),
      type: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {},
      error: function () {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est modifier avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/coordinateurs.php";
        }, 1000);
      },
    });

    e.preventDefault();
  });
  $(".mdc-tab").click(function (event) {
    $(".mdc-tab ").removeClass("mdc-tab--active");
    $(this).addClass("mdc-tab--active");
    $("span.mdc-tab-indicator--active").removeClass(
      "mdc-tab-indicator--active"
    );
    $(this)
      .find("span.mdc-tab-indicator")
      .addClass("mdc-tab-indicator--active");
    console.log($(this).attr("name"));
    $(".tab").attr("hidden", true);
    $("#" + $(this).attr("name")).attr("hidden", false);
  });
});

function deletecoordianteur(idcoordianteur) {
  if (confirm("Voulez-vous vraiment supprimer cette coordianteur ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/coordinateurs/" + idcoordianteur,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/coordinateurs.php";
        }, 1000);
      },
      error: function () {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/coordinateurs.php";
        }, 1000);
      },
    });
}
function modiferClientForm(idcoordianteur) {
  window.location.href = "../Personnel/editCoordinateur.php?" + idcoordianteur;
}
function block(CoordinateurID) {
  $.ajax({
    url: "http://webapp.saweblia.ma/coordinateurdisponible/" + CoordinateurID,
    type: "PUT",
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    async: false,
    success: function (msg) {
      alert(msg);
    },
  });
}
