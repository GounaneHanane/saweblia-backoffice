$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/prestations", function (data) {
      var i;
      var table = data.prestations.Prestations;
     
      for (i = 0; i < table.length; i++) {
        $("#prestation-table").append('<tr id="' + table[i].PrestationID + '">');
        console.log(table[i].Libelle)
        if (table[i].Libelle != null)
          $("#prestation-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#prestation-table").append("<td></td>");
        if (table[i].Description != null)
          $("#prestation-table").append("<td>" + table[i].Description + "</td>");
        else $("#prestation-table").append("<td></td>");
        if (table[i].PrixAchat != null)
          $("#prestation-table").append("<td>" + table[i].PrixAchat + "</td>");
        else $("#prestation-table").append("<td></td>");
        if (table[i].PrixVente != null)
          $("#prestation-table").append("<td>" + table[i].PrixVente + "</td>");
        else $("#prestation-table").append("<td></td>");
        if (table[i].CoefficientRemise != null)
          $("#prestation-table").append("<td>" + table[i].CoefficientRemise + "</td>");
        else $("#prestation-table").append("<td></td>");
       

         $.getJSON("http://webapp.saweblia.ma/services/"+table[i].ServiceID, function (libelleService){
            console.log(libelleService.Libelle)
            localStorage.setItem("service",libelleService.Libelle)
        }) 
        /* var service ;

        $.ajax({​​​​​
            url: "http://webapp.saweblia.ma/services/"+table[i].ServiceID,
            async: false,
            dataType: 'json',
            success: function(data) {​​​​​
                service = data.Libelle
            }
            ​​​​​
        }​​​​​); */
        
         $("#prestation-table").append(
            "<td>" + localStorage.getItem("service") + "</td>"
          ); 
        if (table[i].PrestationMedia != null)
          $("#prestation-table").append(
            "<td>" + table[i].PrestationMedia + "</td>"
          );
        else $("#prestation-table").append("<td></td>");
        
        $("#prestation-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteprestation(' +
            table[i].PrestationID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].PrestationID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-prestation").click(function () {
      window.location.href="../Prestation/addPrestation.php"
    });
    $("#btn-add").click(function () {
      var arr = {
        libelle:$("#libelle").val(),
        description:$("#description").val(),
        service_libelle:$("#services").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        coefficient_remise:$("#coefficientRemise").val(),

        
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/prestations",
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
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        service_libelle:$("#services").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        coefficient_remise:$("#coefficientRemise").val(),
      };
  
      console.log(arr["prestationID"])
      $.ajax({
        url:
          "http://webapp.saweblia.ma/prestations/" +
          localStorage.getItem("idprestationEdited"),
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
  
  function deleteprestation(idprestation) {
    if (confirm("Voulez-vous vraiment supprimer cette prestation ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/prestations/" + idprestation,
        type: "DELETE",
        success: function (msg) {
          $("#message").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>'
          );
        },
      });
  }
  function modiferClientForm(idprestation) {
    
    window.location.href="../Prestation/editPrestation.php?"+idprestation;
  }
  