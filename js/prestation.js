if (sessionStorage.getItem("token") == "null")
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $(".js-example-basic-single").select2();
  $.ajax({
    url:
      "http://webapp.saweblia.ma/prestations?p=" +
      window.location.search.substring(1).split("?"),
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var table = data.Prestations;
      $("#prestation-table").DataTable({
        data: table,
        columns: [
          { data: "Libelle" },
          { data: "Description" },
          { data: "PrixAchat" },
          { data: "PrixVente" },
          { data: "CoefficientRemise" },
          { data: "Service.Libelle" },
          {
            data: "PrestationMedia",
            render: function (data) {
              if (data != null && data != "")
                return (
                  "<img width='60' height='60'src='" +
                  window.location.origin +
                  "/saweblia-backoffice/" +
                  data +
                  "'/>"
                );
              else return "";
            },
          },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deleteprestation(' +
                data.PrestationID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                data.PrestationID +
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
  $("#add-prestation").click(function () {
    window.location.href = "../Prestation/addPrestation.php";
  });
  $("#addPrestation").submit(function (e) {
    e.preventDefault();

    uploadImageResult = uploadFile($("#fournitureImage"));
    if (uploadImageResult == "success") {
      var media;

      if ($("#fournitureImage")[0].files[0] == undefined) media = "";
      else media = "Media/Prestation/" + $("#fournitureImage")[0].files[0].name;

      var arr = {
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        serviceId: $("#services").val(),
        prix_achat: $("#prixAchat").val(),
        prix_vente: $("#prixVente").val(),
        coefficient_remise: $("#coefficientRemise").val(),
        prestation_media: media,
      };

      $.ajax({
        url: "http://webapp.saweblia.ma/prestations",
        type: "POST",
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
          $(".clearfix").html("");
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est ajoutée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Service/prestation.php";
          }, 1000);
        },
      });
    } else if (uploadImageResult == "Not a valid image!") {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>'
      );
    }
  });
  $("#editPrestation").submit(function (e) {
    e.preventDefault();
    uploadImageResult = uploadFile($("#fournitureImage"));
    //alert(uploadImageResult)
    if (uploadImageResult == "success") {
      var media;
      if ($("#fournitureImage")[0].files[0] == undefined)
        media = $("#fournitureImage").attr("alt");
      else media = "Media/Prestation/" + $("#fournitureImage")[0].files[0].name;

      var arr = {
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        service_libelle: $("#services").val(),
        prix_achat: $("#prixAchat").val(),
        prix_vente: $("#prixVente").val(),
        coefficient_remise: $("#coefficientRemise").val(),
        prestation_media: media,
        serviceId: $("#services").val(),
      };
      $.ajax({
        url:
          "http://webapp.saweblia.ma/prestations/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        async: false,
        success: function (msg) {
          alert(msg);
        },
        error: function () {
          $(".clearfix").html("");
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Service/prestation.php";
          }, 1000);
        },
      });
    } else if (uploadImageResult == "Not a valid image!") {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est ajoutée avec succes</span></div>'
      );
      setTimeout(function () {
        window.location.href = "../Service/services.php";
      }, 1000);
    }
  });
});

function deleteprestation(idprestation) {
  if (confirm("Voulez-vous vraiment supprimer cette prestation ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/prestations/" + idprestation,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est supprimée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Service/prestation.php";
        }, 1000);
      },
    });
}
function modiferClientForm(idprestation) {
  window.location.href = "../Prestation/editPrestation.php?" + idprestation;
}
function uploadFile(imageFile) {
  var result = "success";

  var input = imageFile;
  file = input[0].files[0];
  if (file != undefined) {
    formData = new FormData();
    if (!!file.type.match(/image.*/)) {
      formData.append("image", file);

      $.ajax({
        url: "../uploadImagePrestation.php",
        type: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {},
        error: function (msg) {
          alert(msg);
        },
      });
    } else {
      result = "Not a valid image!";
    }
  }
  return result;
}
