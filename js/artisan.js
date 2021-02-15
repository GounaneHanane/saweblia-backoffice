if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/artisans",
    type:"GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success:function(data) {
      var i;
      var table = data.Artisans;
      $("#artisan-table").DataTable({
        data: table,
        columns: [
          { data: "Nom" },
          { data: "Telephone" },
          { data: "Ville" },
          { data: "SoldeArtisan" },
          { data: "SoldeSaweblia" },
          {
            data: "Disponible",
            render: function (data, type, row) {
              if (data == true)
                return (
                  '<label class="switch"><input id="check' +
                  row.ArtisanID +
                  '" onchange="blockArtisan(' +
                  row.ArtisanID +
                  ')" type="checkbox" checked><span class="slider round"></span></label>'
                );
              else
                return (
                  '<label class="switch"><input id="check' +
                  row.ArtisanID +
                  '" onchange="blockArtisan(' +
                  row.ArtisanID +
                  ')" type="checkbox"><span class="slider round"></span></label>'
                );
            },
          },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deleteartisan(' +
                data.ArtisanID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferArtisanForm(' +
                data.ArtisanID +
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
 
  $("#add-artisan").click(function () {
    window.location.href = "../Personnel/addArtisan.php";
  });
  $("#addArtisan").submit(function (e) {
    var langue = "arabe";
    if ($("#langue").is(":checked")) langue += "&français";

    var arr = {
      nom: $("#Nom").val(),
      telephone: $("#telephone").val(),
      ville: $("#ville").val(),
      cin: $("#cin").val(),
      disponible: $("#dispo").is(":checked"),
      solde_artisan: $("#SArtisan").val(),
      solde_Saweblia: $("#SSaweblia").val(),
      type: $("#type").val(),
      langue: langue,
      email: $("#email").val(),
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/artisans",
      type: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert("hello");
      },
      error: function () {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est ajouté avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/personnels.php";
        }, 2000);
      },
    });
    e.preventDefault();
  });
  $("#editArtisan").submit(function (e) {
    var langue = "arabe";
    if ($("#langue").is(":checked")) langue += "&français";
    var arr = {
      nom: $("#Nom").val(),
      telephone: $("#telephone").val(),
      type: $("#type").val(),
      ville: $("#ville").val(),
      solde_artisan: $("#SArtisan").val(),
      solde_Saweblia: $("#SSaweblia").val(),
      langue: langue,
      cin: $("#cin").val(),
      email: $("#email").val(),
      disponible: $("#dispo").is(":checked"),
    };

    $.ajax({
      url:
        "http://webapp.saweblia.ma/artisans/" +
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
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est modifié avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/personnels.php";
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

function deleteartisan(idartisan) {
  if (confirm("Voulez-vous vraiment supprimer cette artisan ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/artisans/" + idartisan,
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      type: "DELETE",
      success: function (msg) {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est supprimé avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Personnel/personnels.php";
        }, 1000);
      },
      error: function () {},
    });
}
function modiferArtisanForm(idartisan) {
  window.location.href = "../Personnel/editArtisan.php?" + idartisan;
}
function blockArtisan(ArtisanId) {
  $.ajax({
    url: "http://webapp.saweblia.ma/artisandisponible/" + ArtisanId,
    type: "PUT",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    contentType: "application/json; charset=utf-8",
    dataType: "json",
    async: false,
    success: function (msg) {},
  });
}
