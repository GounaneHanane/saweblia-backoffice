
$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/fournitures", function (data) {
      var i;
      var table = data.fournitures.Fournitures;
      console.log(table)
     
      
      for (i = 0; i < table.length; i++) {
        $("#fourniture-table").append('<tr id="' + table[i].FournitureID + '">');
        if (table[i].Libelle != null)
          $("#fourniture-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Description != null)
          $("#fourniture-table").append("<td>" + table[i].Description + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Media != null)
          $("#fourniture-table").append("<td>" + table[i].Media + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixAchat != null)
          $("#fourniture-table").append("<td>" + table[i].PrixAchat + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixVente != null)
          $("#fourniture-table").append("<td>" + table[i].PrixVente + "</td>");
        else $("#fourniture-table").append("<td></td>");
        $.getJSON("http://webapp.saweblia.ma/fournisseurs/"+table[i].FournisseurID, function (libellefournisseur){
            console.log(libellefournisseur.NomFournisseur)
            localStorage.setItem("fourniture",libellefournisseur.NomFournisseur)
        }) 
        $("#fourniture-table").append(
            "<td>" + localStorage.getItem("fourniture") + "</td>"
          ); 
        
        $("#fourniture-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteFourniture(' +
            table[i].FournitureID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
            table[i].FournitureID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-fourniture").click(function () {
      window.location.href="../fourniture/addFourniture.php";
    });
    $("#btn-add").click(function () {
      var arr = {
        libelle:$("#libelle").val(),
        description:$("#description").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        telephone_fournisseur:$("#fournisseurs").val(),
        
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/fournitures",
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
        libelle:$("#libelle").val(),
        description:$("#description").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        telephone_fournisseur:$("#fournisseurs").val(),
      };
  
      $.ajax({
        url:
          "http://webapp.saweblia.ma/fournitures/" +
          window.location.search.substring(1).split("?"),
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
    $('.mdc-tab').click(function(event){
      $(".mdc-tab ").removeClass('mdc-tab--active')
      $(this).addClass('mdc-tab--active')
      $("span.mdc-tab-indicator--active").removeClass('mdc-tab-indicator--active')
      $(this).find("span.mdc-tab-indicator").addClass('mdc-tab-indicator--active')
      console.log( $('.tab'))
      $('.tab').attr('hidden',true)
      $('#'+$(this).attr('name')).attr('hidden',false)
    })
  });
  
  function deleteFourniture(idfourniture) {
    if (confirm("Voulez-vous vraiment supprimer ce fourniture ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/fournitures/" + idfourniture,
        type: "DELETE",
        success: function (msg) {
          $("#message").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>'
          );
        },
      });
  }
  function modiferFournitureForm(idfourniture) {
    window.location.href="../fourniture/editFourniture.php?"+idfourniture
  }
  