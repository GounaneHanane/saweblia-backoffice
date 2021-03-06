if (sessionStorage.getItem("token") == "null")
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/services",
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      var table = data.Services;
      $("#service-table").DataTable({
        data: table,
        columns: [
          { data: "Libelle" },
          { data: "Description" },
          { data: "Categorie.Libelle" },
          {
            data: "ServiceMedia",
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
                '<button onclick="deleteService(' +
                data.ServiceID +
                ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferServiceForm(' +
                data.ServiceID +
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
  $("#add-service").click(function () {
    window.location.href = "../Service/addService.php";
  });
  $("#btn-add").click(function () {
    uploadImageResult = uploadFile($("#serviceImage"));

    if (uploadImageResult == "success") {
      var media;
      if ($("#serviceImage")[0].files[0] == undefined) media = "";
      else media = "Media/Service/" + $("#serviceImage")[0].files[0].name;

      var arr = {
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        categorie_libelle: $("#typeCategorie").val(),
        service_media: media,
      };

      $.ajax({
        url: "http://webapp.saweblia.ma/services",
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
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le service est ajouté avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Service/services.php";
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
  $("#btn-edit").click(function () {
    uploadImageResult = uploadFile($("#fournitureImage"));
    if (uploadImageResult == "success") {
      var media;

      if ($("#fournitureImage")[0].files[0] == undefined)
        media = $("#fournitureImage").attr("alt");
      else media = "Media/Service/" + $("#fournitureImage")[0].files[0].name;

      var arr = {
        serviceID: localStorage.getItem("idserviceEdited"),
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        service_media: media,
      };

      $.ajax({
        url:
          "http://webapp.saweblia.ma/services/" +
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
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le service est modifié avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Service/services.php";
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
  $(".mdc-tab").click(function (event) {
    $(".mdc-tab ").removeClass("mdc-tab--active");
    $(this).addClass("mdc-tab--active");
    $("span.mdc-tab-indicator--active").removeClass(
      "mdc-tab-indicator--active"
    );
    $(this)
      .find("span.mdc-tab-indicator")
      .addClass("mdc-tab-indicator--active");

    $(".tab").attr("hidden", true);
    $("#" + $(this).attr("name")).attr("hidden", false);
  });
});

function deleteService(idservice) {
  if (confirm("Voulez-vous vraiment supprimer cette service ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/services/" + idservice,
      type: "DELETE",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      success: function (msg) {
        $(".clearfix").html("");
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le service est supprimée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Service/services.php";
        }, 1000);
      },
    });
}
function modiferServiceForm(idservice) {
  window.location.href = "../Service/editService.php?" + idservice;
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
        url: "../uploadImageService.php",
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
