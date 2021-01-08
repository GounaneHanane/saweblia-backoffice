$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/services", function (data) {
      var i;
      var table = data.service.Services;
      
      for (i = 0; i < table.length; i++) {
        $("#service-table").append('<tr id="' + table[i].ServiceID + '">');
        if (table[i].Libelle != null)
          $("#service-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#service-table").append("<td></td>");
        if (table[i].Description != null)
          $("#service-table").append("<td>" + table[i].Description + "</td>");
        else $("#service-table").append("<td></td>");

        $.getJSON("http://webapp.saweblia.ma/categories/"+table[i].CategorieID, function (libelleCategorie){
            console.log(libelleCategorie)
            localStorage.setItem("categorie",libelleCategorie.Libelle)
        })
        $("#service-table").append(
            "<td>" + localStorage.getItem("categorie") + "</td>"
          );
        if (table[i].ServiceMedia != null)
          $("#service-table").append(
            "<td>" + table[i].ServiceMedia + "</td>"
          );
        else $("#service-table").append("<td></td>");
        
        $("#service-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteService(' +
            table[i].ServiceID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].ServiceID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-service").click(function () {
      window.location.replace("../Service/addService.php");
    });
    $("#btn-add").click(function () {
      var arr = {
        libelle:$("#libelle").val(),
        description:$("#description").val(),
        categorie_libelle:$("#typeCategorie").val()
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/services",
        type: "POST",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          alert(msg);
        },
      });
    });
    $("#btn-edit").click(function () {
      var arr = {
        serviceID: localStorage.getItem("idserviceEdited"),
        libelle: $("#libelle").val(),
        description: $("#description").val(),
      };
  
      console.log(arr["serviceID"])
      $.ajax({
        url:
          "http://webapp.saweblia.ma/services/" +
          localStorage.getItem("idserviceEdited"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          alert(msg);
        },
      });
    });
  });
  
  function deleteService(idservice) {
    if (confirm("Voulez-vous vraiment supprimer cette service ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/services/" + idservice,
        type: "DELETE",
        success: function (msg) {
          $("#message").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>'
          );
        },
      });
  }
  function modiferClientForm(idservice) {
    localStorage.setItem("idserviceEdited", idservice);
    window.location.replace("../service/editService.php");
  }
  