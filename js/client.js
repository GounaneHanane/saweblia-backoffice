if (sessionStorage.getItem("token") == "null" || sessionStorage.getItem("token") == null)
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url:
      "http://webapp.saweblia.ma/clients?p=" +
      window.location.search.substring(1).split("?")[0],
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var table = data.Clients;
      $("#client-table").DataTable({
        data: table,

        columns: [
          { data: "Nom" },
          { data: "Telephone" },
          { data: "Email" },
          { data: "CanalAcquisition" },
          {
            data: "Activer",
            orderable: false,
            render: function (data, type, row) {
              if (data == true)
                return (
                  '<label class="switch client"><input  onchange="block(' +
                  row.ClientID +
                  ')" type="checkbox" checked=true><span class="slider round"></span></label>'
                );
              else
                return (
                  '<label class="switch client"><input  onchange="block(' +
                  row.ClientID +
                  ')" type="checkbox"><span class="slider round"></span></label>'
                );
            },
          },
          {
            data: null,
            orderable: false,
            render: function (data, type, row) {
              // Combine the first and last names into a single table field
              return (
                '<button type="button" onclick="detail(' +
                data.ClientID +
                ')" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteClient(' +
                data.ClientID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                data.ClientID +
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
          lengthMenu: "",
          zeroRecords: "Rien n'a été trouvé",
          info: "Affichage de la page _PAGE_ de _PAGES_",
          infoEmpty: "Aucun enregistrement disponible",
          infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
          search: "Recherche :",
        },
      });
    },
  });
  $("#add-client").click(function () {
    window.location.href = "../Client/addClient.php";
  });
  $("#add-client-form").submit(function (e) {
    if ($("#tel").val() != "") {
      var arr;
      if ($("#Ville").val() != "") {
        arr = {
          nom: $("#nom").val(),
          telephone: $("#tel").val(),
          canal_acquisition: $("#canal").val(),
          email: $("#email").val(),
          type: $("#type").val(),
          commentaire: $("#comment").val(),
          libelle_adresse: $("#Libelle").val(),
          quartier: $("#Quartier").val(),
          rue: $("#Rue").val(),
          ville: $("#Ville").val(),
          localisation: $("#Localisation").val(),
          numero_bureau: $("#NBureau").val(),
          surface_bureau: $("#NSurface").val(),
        };
      } else {
        arr = {
          nom: $("#nom").val(),
          telephone: $("#tel").val(),
          canal_acquisition: $("#canal").val(),
          email: $("#email").val(),
          type: $("#type").val(),
          commentaire: $("#comment").val(),
        };
      }

      $.ajax({
        url: "http://webapp.saweblia.ma/clients",
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
            '<div class="alert alert-success"><button type="button" class="close " data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est ajouté avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Client/clients.php";
          }, 1000);
        },
      });
    } else {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'ajouter le numéro de téléphone du client</span></div>'
      );
    }

    e.preventDefault();
  });
  $("#btn-edit").click(function () {
    if ($("#tel").val() != "") {
      var arr = {
        nom: $("#nom").val(),
        telephone: $("#tel").val(),
        canal_acquisition: $("#canal").val(),
        email: $("#email").val(),
        type: $("#type").val(),
        commentaire: $("#comment").val(),
      };

      $.ajax({
        url:
          "http://webapp.saweblia.ma/clients/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },

        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        async: false,
        success: function (msg) {},
        error: function (msg) {
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est modifié avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Client/clients.php";
          }, 1000);
        },
      });
    } else {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-warning"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'ajouter le numéro de téléphone du client</span></div>'
      );
    }
  });
});

function deleteClient(idClient) {
  if (confirm("Voulez-vous vraiment supprimer ce client ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/clients/" + idClient,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },

      success: function (msg) {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Client/clients.php";
        }, 1000);
      },
      error: function () {},
    });
}
function modiferClientForm(idClient) {
  window.location.href = "../Client/editClient.php?" + idClient;
}
function detail(idClient) {
  window.location.href = "../Adresse/adresses.php?" + idClient;
}
function block(ClientId) {
  $.ajax({
    url: " http://webapp.saweblia.ma/clientdisponible/" + ClientId,
    type: "PUT",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    contentType: "application/json; charset=utf-8",
    dataType: "json",

    success: function (msg) {
      alert(msg);
    },
  });
}
