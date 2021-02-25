if (sessionStorage.getItem("token") == "null")
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/fournisseurs",
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var i;
      var table = data.Fournisseurs;

      $("#fournisseur-table").DataTable({
        data: table,
        columns: [
          { data: "NomFournisseur" },
          { data: "NomContact" },
          { data: "Telephone" },
          { data: "Adresse" },
          { data: "Email" },
          {
            data: null,
            render: function (data, row) {
              if (data.Localisation != "" && data.Localisation != null)
                return (
                  '<button onclick="deleteFournisseur(' +
                  data.Fournisseur +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                  data.Fournisseur +
                  ')"><span class="material-icons">create</span></button><a href="' +
                  data.Localisation +
                  '" class="btn btn-success action"><span class="material-icons">room</span></a>'
                );
              else
                return (
                  '<button onclick="deleteFournisseur(' +
                  data.Fournisseur +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                  data.Fournisseur +
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
  $("#add-fournisseur").click(function () {
    window.location.replace("../Fourniture/addFournisseur.php");
  });
  $("#addFournisseur").submit(function (e) {
    var arr = {
      nom: $("#nomFournisseur").val(),
      nom_contact: $("#nomContact").val(),
      telephone: $("#telephone").val(),
      adresse: $("#adresse").val(),
      localisation: $("#localisation").val(),
      email: $("#email").val(),
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/fournisseurs",
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
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est ajouté avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Fourniture/fournisseurs.php";
        }, 1000);
      },
    });
    e.preventDefault();
  });
 
  $("#editFournisseur").submit(function (e) {
    var arr = {
      nom: $("#nomFournisseur").val(),
      nom_contact: $("#nomContact").val(),
      telephone: $("#telephone").val(),
      adresse: $("#adresse").val(),
      localisation: $("#localisation").val(),
      email: $("#email").val(),
    };

    $.ajax({
      url:
        "http://webapp.saweblia.ma/fournisseurs/" +
        window.location.search.substring(1).split("?"),
      type: "PUT",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert(msg);
      },
      error: function () {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est modifié avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Fourniture/fournisseurs.php";
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
    console.log($(".tab"));
    $(".tab").attr("hidden", true);
    $("#" + $(this).attr("name")).attr("hidden", false);
  });
});

function deleteFournisseur(idfournisseur) {
  if (confirm("Voulez-vous vraiment supprimer ce fournisseur ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/fournisseurs/" + idfournisseur,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href =
            "../Fourniture/fournisseurs.php?" +
            window.location.search.substring(1).split("?")[0];
        }, 1000);
      },
    });
}
function modiferClientForm(idfournisseur) {
  window.location.href = "../Fourniture/editFournisseur.php?" + idfournisseur;
}
