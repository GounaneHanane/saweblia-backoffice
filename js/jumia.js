if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "../jumiaData.php",
    type: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    async: false,
    data: { action: "displayData" },
    success: function (msg) {
      var data = JSON.parse(msg);
      $("#jumia-table").DataTable({
        data: data,
        columns: [
          { data: 1 },
          {
            data: null,
            render: function (data) {
              return "<img src='" + data[2] + "' width='100' height='100'/>";
            },
          },
          { data: 11 },

          { data: 3 },
          { data: 4 },
          {
            data: null,
            render: function (data) {
              return (
                "<button class='btn btn-danger action' type='button' onclick='deletePrestationJumia(" +
                data[0] +
                ")'><span class='material-icons'>delete_sweep</span> </button>  <button class='btn btn-warning action' type='button' onclick='editPrestationJumia(" +
                data[0] +
                ")'><span class='material-icons'>create</span>"
              );
            },
          },
        ],
      });
    },
  });
  $("#btn-edit").click(function (e) {
    var arr = {
      libelle: $("#libelle").val(),
      prix_prestation: $("#pprestation").val(),
      prix_consultation: $("#consultation").val(),
      jumiaId: window.location.search.substring(1).split("?")[0],
    };
    $.ajax({
      url: "../jumiaData.php",
      type: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      async: false,
      data: { data: arr, action: "edit" },
      success: function (msg) {
        if (msg == "success") {
          $(".clearfix").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>'
          );
          setTimeout(function () {
            window.location.href = "../Partenaire/jumia.php";
          }, 1000);
        } else
          $(".clearfix").append(
            '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau de modification</span></div>'
          );
      },
    });
    e.preventDefault();
  });
});
function editPrestationJumia(idJumia) {
  window.location.href = "./editJumia.php?" + idJumia;
}
function deletePrestationJumia(idJumia) {
  $.ajax({
    url: "../jumiaData.php",
    type: "POST",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    async: false,
    data: { idJumia: idJumia, action: "delete" },
    success: function (msg) {
      if (msg == "success") {
        $(".clearfix").append(
          '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est supprimée avec succes</span></div>'
        );
        setTimeout(function () {
          window.location.href = "../Partenaire/jumia.php";
        }, 1000);
      } else
        $(".clearfix").append(
          '<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Il y a un erreur au niveau du suppression</span></div>'
        );
    },
  });
}
