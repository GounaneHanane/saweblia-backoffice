if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.getJSON(
    "http://webapp.saweblia.ma/clients/" +
      window.location.search.substring(1).split("?"),
    function (data) {
      $("#nom").append(data.Nom);
      $("#tel").append(data.Telephone), $("#nom-header").append(data.Nom);
      $("#canal").append(data.CanalAcquisition),
        $("#email").append(data.Email),
        $("#type").append(data.Type),
        $("#comment").append(data.Comment);
    }
  );
  $.getJSON(
    "http://webapp.saweblia.ma/adresse_client/" +
      window.location.search.substring(1).split("?"),
    function (data) {
      var table = data.Adresses;
      $("#adresse-table").DataTable({
        data: table,

        columns: [
          { data: "Libelle" },
          { data: "Quartier" },
          { data: "Rue" },
          { data: "Ville" },
          { data: "OfficeNumber" },
          { data: "OfficeNumber" },
          {
            data: null,
            orderable: false,
            render: function (data, type, row) {
              if (data.Localisation != "")
                return (
                  '<button onclick="deleteadresse(' +
                  data.AdressID +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferAdresseForm(' +
                  data.AdressID +
                  ')"><span class="material-icons">create</span></button><a href="' +
                  data.Localisation +
                  '" class="btn btn-success action"><span class="material-icons">room</span></a>'
                );
              else
                return (
                  '<button onclick="deleteadresse(' +
                  data.AdressID +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferAdresseForm(' +
                  data.AdressID +
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
    }
  );
  $("#edit-client").click(function () {
    window.location.href =
      "../Client/editClient.php?" +
      window.location.search.substring(1).split("?");
  });
  $("#add-adresse").click(function () {
    window.location.href =
      "../Adresse/addAdresse.php?" +
      window.location.search.substring(1).split("?");
  });
  $("#btn-add").click(function () {
    var arr = {
      libelle: $("#Libelle").val(),
      quartier: $("#Quartier").val(),
      rue: $("#Rue").val(),
      ville: $("#Ville").val(),
      localisation: $("#Localisation").val(),
      numero_bureau: $("#NBureau").val(),
      surface_bureau: $("#NSurface").val(),
      clientId: window.location.search.substring(1).split("?")[0],
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/adresses",
      type: "POST",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {},
      error: function () {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'adresse est ajoutée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href =
            "../Adresse/adresses.php?" +
            window.location.search.substring(1).split("?")[0];
        }, 1000);
      },
    });
  });
  $("#btn-edit").click(function () {
    var arr = {
      libelle: $("#Libelle").val(),
      quartier: $("#Quartier").val(),
      rue: $("#Rue").val(),
      ville: $("#Ville").val(),
      localisation: $("#Localisation").val(),
      numero_bureau: $("#NBureau").val(),
      surface_bureau: $("#NSurface").val(),
      clientId: window.location.search.substring(1).split("?")[0],
    };

    $.ajax({
      url:
        "http://webapp.saweblia.ma/adresses/" +
        window.location.search.substring(1).split("?")[1],
      type: "PUT",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {},
      error: function () {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'adresse est modifiée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href =
            "../Adresse/adresses.php?" +
            window.location.search.substring(1).split("?")[0];
        }, 1000);
      },
    });
  });
});
function modiferAdresseForm(idAdresse) {
  window.location.href =
    "../Adresse/editAdresse.php?" +
    window.location.search.substring(1).split("?") +
    "?" +
    idAdresse;
}
function deleteadresse(idAdresse) {
  if (confirm("Voulez-vous vraiment supprimer cette adresse ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/adresses/" + idAdresse,
      type: "DELETE",
      success: function (msg) {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.reload();
        }, 1000);
      },
      error: function () {},
    });
}
