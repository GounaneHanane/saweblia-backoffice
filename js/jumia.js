if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "../jumiaData.php",
    type: "POST",
    async: false,
    data: { action: "displayData" },
    success: function (msg) {
      var data = JSON.parse(msg);
      data.forEach((jumia) => {
        $("#jumia-table").append("<tr>");
        if (jumia[1] != null)
          $("#jumia-table").append("<td>" + jumia[1] + "</td>");
        else $("#jumia-table").append("<td></td>");
        if (jumia[2] != null)
          $("#jumia-table").append(
            "<td><img src='" + jumia[2] + "' width='100' height='100'/></td>"
          );
        else $("#jumia-table").append("<td></td>");
        if (jumia[3] != null)
          $("#jumia-table").append("<td>" + jumia[3] + "</td>");
        else $("#jumia-table").append("<td></td>");
        if (jumia[4] != null)
          $("#jumia-table").append("<td>" + jumia[4] + "</td>");
        else $("#jumia-table").append("<td></td>");
        $("#jumia-table").append(
          "<td><button class='btn btn-danger action' type='button' onclick='deletePrestationJumia(" +
            jumia[0] +
            ")'><span class='material-icons'>delete_sweep</span> </button>  <button class='btn btn-warning action' type='button' onclick='editPrestationJumia(" +
            jumia[0] +
            ")'><span class='material-icons'>create</span></td>"
        );
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
