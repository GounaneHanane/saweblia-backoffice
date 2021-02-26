if (sessionStorage.getItem("token") == "null")
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  ////
  //// Display Data
  ////
  $.ajax({
    url: "http://webapp.saweblia.ma/fournitures",
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var i;
      var table = data.Fournitures;
      $("#fourniture-table").DataTable({
        data: table,
        columns: [
          { data: "Libelle" },
          { data: "Description" },
          {
            data: "Media",
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
          { data: "PrixAchat" },
          { data: "PrixVente" },
          { data: ".Fournisseur.NomFournisseur" },
          { data: "Fournisseur.Telephone" },
          {
            data: null,
            render: function (data) {
              return (
                '<button onclick="deleteFourniture(' +
                data.FournitureID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
                data.FournitureID +
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
          lengthMenu: "Afficher _MENU_ ",
          zeroRecords: "Rien n'a été trouvé",
          info: "",
          infoEmpty: "Aucun enregistrement disponible",
          infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
          search: "Recherche :",
        },
      });
    },
  });
  ////
  //// add fournisseur checkbox in add fourniture
  ////
  $("#add-fournisseur").change(function () {
    if ($(this).is(":checked")) {
      $(".fournisseurArea").html("");
      $(".fournisseurArea").append(
        '<input placeholder="Nom du fournisseur" id="nom_fournisseur" type="text" class="form-control col-md-6" required><input  placeholder="Téléphone du fournisseur" id="tel_fournisseur" type="tel" pattern="[0-9]{10}" class="form-control col-md-6" required>'
      );
    } else {
      $(".fournisseurArea").html("");

      $.ajax({
        url: "http://webapp.saweblia.ma/fournisseurs",
        type: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function (data) {
          console.log(data);
          var i;
          for (i = 0; i < data.Fournisseurs.length; i++) {
            $("#fournisseurs").append(
              "<option value='" +
                data.Fournisseurs[i].Fournisseur +
                "'>" +
                data.Fournisseurs[i].NomFournisseur +
                "</option>"
            );
          }
        },
      });
      $(".fournisseurArea").append(
        ' <select id="fournisseurs"  class="form-control js-example-basic-single" ></select>'
      );
      $(".js-example-basic-single").select2();
    }
  });
  $("#add-fourniture").click(function () {
    window.location.href = "../Fourniture/addFourniture.php";
  });
  ///
  /// Search by name (button click)
  ///
  $("#addFourniture").submit(function (e) {
    e.preventDefault();
    uploadImageResult = uploadFile($("#fournitureImage"));
    if (uploadImageResult == "success") {
      var media;
      if ($("#fournitureImage")[0].files[0] == undefined)
        media = $("#fournitureImage").attr("alt");
      else media = "Media/Fourniture/" + $("#fournitureImage")[0].files[0].name;
      if ($("#add-fournisseur").is(":checked")) {
        var arr = {
          libelle: $("#libelle").val(),
          description: $("#description").val(),
          prix_achat: $("#prixAchat").val(),
          prix_vente: $("#prixVente").val(),
          telephone_fournisseur: $("#tel_fournisseur").val(),
          nom_fournisseur: $("#nom_fournisseur").val(),
          fourniture_media: media,
        };
      } else {
        var arr = {
          libelle: $("#libelle").val(),
          description: $("#description").val(),
          prix_achat: $("#prixAchat").val(),
          prix_vente: $("#prixVente").val(),
          fournisseurId: $("#fournisseurs").val(),
          fourniture_media: media,
        };
      }

      $.ajax({
        url: "http://webapp.saweblia.ma/fournitures",
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
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est ajoutée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Fourniture/fourniture.php";
          }, 1000);
        },
        error: function () {
          $(".clearfix").html("");
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est ajoutée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Fourniture/fourniture.php";
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
  ///
  /// Edit fourniture form submit
  ///
  $("#editFourniture").submit(function (e) {
    e.preventDefault();
    uploadImageResult = uploadFile($("#fournitureImage"));
    //alert(uploadImageResult)
    if (uploadImageResult == "success") {
      var media;
      if ($("#fournitureImage")[0].files[0] == undefined)
        media = $("#fournitureImage").attr("alt");
      else media = "Media/Fourniture/" + $("#fournitureImage")[0].files[0].name;
      if ($("#add-fournisseur").is(":checked")) {
        var arr = {
          libelle: $("#libelle").val(),
          description: $("#description").val(),
          prix_achat: $("#prixAchat").val(),
          prix_vente: $("#prixVente").val(),
          telephone_fournisseur: $("#tel_fournisseur").val(),
          nom_fournisseur: $("#nom_fournisseur").val(),
          fourniture_media: media,
        };
      } else {
        var arr = {
          libelle: $("#libelle").val(),
          description: $("#description").val(),
          prix_achat: $("#prixAchat").val(),
          prix_vente: $("#prixVente").val(),
          fournisseurId: $("#fournisseurs").val(),
          fourniture_media: media,
        };
      }

      $.ajax({
        url:
          "http://webapp.saweblia.ma/fournitures/" +
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
          $(".clearfix").html("");
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est modifiée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Fourniture/fourniture.php";
          }, 1000);
        },
      });
    } else if (uploadImageResult == "Not a valid image!") {
      $(".clearfix").html("");
      $(".clearfix").append(
        '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>'
      );
    }
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
function uploadFile(imageFile) {
  var result = "success";

  var input = imageFile;
  file = input[0].files[0];
  if (file != undefined) {
    formData = new FormData();
    if (!!file.type.match(/image.*/)) {
      formData.append("image", file);

      $.ajax({
        url: "../uploadImageFourniture.php",
        type: "POST",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        data: formData,
        processData: false,
        contentType: false,
        success: function (data) {},
        error: function (msg) {},
      });
    } else {
      result = "Not a valid image!";
    }
  }
  return result;
}
function deleteFourniture(idfourniture) {
  if (confirm("Voulez-vous vraiment supprimer ce fourniture ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/fournitures/" + idfourniture,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est supprimée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Fourniture/fourniture.php";
        }, 1000);
      },
    });
}
function modiferFournitureForm(idfourniture) {
  window.location.href = "../Fourniture/editFourniture.php?" + idfourniture;
}
