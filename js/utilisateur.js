if (sessionStorage.getItem("token") == "null")
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/utilisateurs",
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var table = data.Utilisateurs;
      $("#client-table").DataTable({
        data: table,
        columns: [
          { data: "Nom" },
          { data: "Login" },
          {
            data: "Interne",
            render: function (data) {
              if (data == true) return "Interne";
              else return "Externe";
            },
          },
          {
            data: "Activer",
            render: function (data, type, row) {
              if (data == true)
                return (
                  '<label class="switch"><input id="check' +
                  row.UtilisateurID +
                  '" onchange="block(' +
                  row.UtilisateurID +
                  ')" type="checkbox" checked><span class="slider round"></span></label>'
                );
              else
                return (
                  '<label class="switch"><input id="check' +
                  row.UtilisateurID +
                  '" onchange="block(' +
                  row.UtilisateurID +
                  ')" type="checkbox"><span class="slider round"></span></label>'
                );
            },
          },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deleteClient(' +
                data.UtilisateurID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferUtilisateurForm(' +
                data.UtilisateurID +
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
  $("#add-utilisateur").click(function () {
    window.location.href = "../Utilisateur/addUtilisateur.php";
  });
  $("#addUtilisateur").submit(function (e) {
    var arr = {
      nom: $("#nom").val(),
      interne: $("#interne").is(":checked"),
      login: $("#login").val(),
      mot_de_passe: $("#mot_de_passe").val(),
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/utilisateurs",
      type: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'utilisateur est ajouté avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Utilisateur/utilisateurs.php";
        }, 1000);
      },
      error: function () {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'utilisateur est ajouté avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Utilisateur/utilisateurs.php";
        }, 1000);
      },
    });
    e.preventDefault();
  });
  $("#editUtilisateur").submit(function (e) {
    var arr = {
      nom: $("#nom").val(),
      interne: $("#interne").is(":checked"),
      login: $("#login").val(),
      mot_de_passe: $("#motdepass").val(),
    };

    $.ajax({
      url:
        "http://webapp.saweblia.ma/utilisateurs/" +
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
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'utilisateur est modifier avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Utilisateur/utilisateurs.php";
        }, 1000);
      },
    });
    e.preventDefault();
  });
});
function deleteClient(idUser) {
  if (confirm("Voulez-vous vraiment supprimer cet utilisateur ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/utilisateurs/" + idUser,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'utilisateur est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Utilisateur/utilisateurs.php";
        }, 1000);
      },
      error: function () {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'utilisateur est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Utilisateur/utilisateurs.php";
        }, 1000);
      },
    });
}
function block(UserId) {
  var arr = {};
  var checkbox = $("#check" + UserId).is(":checked");
  $.ajax({
    url: "http://webapp.saweblia.ma/utilisateurs/" + UserId,
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      arr = {
        UtilisateurID: UserId,
        nom: data.Nom,
        interne: data.Interne,
        login: data.Login,
        mot_de_passe: data.MotDePasse,

        activer: checkbox,
      };
      $.ajax({
        url: "http://webapp.saweblia.ma/utilisateurs/" + UserId,
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
      });
    },
  });
}
function modiferUtilisateurForm(idUser) {
  window.location.href = "../Utilisateur/editUtilisateur.php?" + idUser;
}
