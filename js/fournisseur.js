
$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/fournisseurs", function (data) {
      var i;
      var table = data.fournisseurs.Fournisseurs;

     
      
      for (i = 0; i < table.length; i++) {
        $("#fournisseur-table").append('<tr id="' + table[i].Fournisseur + '">');
        if (table[i].NomFournisseur != null)
          $("#fournisseur-table").append("<td>" + table[i].NomFournisseur + "</td>");
        else $("#fournisseur-table").append("<td></td>");
        if (table[i].NomContact != null)
          $("#fournisseur-table").append("<td>" + table[i].NomContact + "</td>");
        else $("#fournisseur-table").append("<td></td>");
        if (table[i].Telephone != null)
          $("#fournisseur-table").append("<td>" + table[i].Telephone + "</td>");
        else $("#fournisseur-table").append("<td></td>");
        if (table[i].Adresse != null)
          $("#fournisseur-table").append("<td>" + table[i].Adresse + "</td>");
        else $("#fournisseur-table").append("<td></td>");
        
          
        if (table[i].Email != null)
          $("#fournisseur-table").append(
            "<td>" + table[i].Email + "</td>"
          );
        else $("#fournisseur-table").append("<td></td>");
        if (table[i].Localisation != "")
        $("#fournisseur-table").append(
          '<td><a href="'+table[i].Localisation+'" class="btn btn-success action"><span class="material-icons">room</span></a><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteFournisseur(' +
            table[i].Fournisseur +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].Fournisseur +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
        else  $("#fournisseur-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteFournisseur(' +
            table[i].Fournisseur +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].Fournisseur +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-fournisseur").click(function () {
      window.location.replace("../Fourniture/addFournisseur.php");
    });
    $("#btn-add").click(function () {
      var arr = {
        nom:$("#nomFournisseur").val(),
        nom_contact:$("#nomContact").val(),
        telephone:$("#telephone").val(),
        adresse:$("#adresse").val(),
        localisation:$("#localisation").val(),
        email:$("#email").val(),
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/fournisseurs",
        type: "POST",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
         
        },error:function(){
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est ajouté avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Fourniture/fourniture.php"
            }, 1000);
        }
      });
    });
    $('#searchbynamefournisseur').click(function(){
      $.getJSON('http://webapp.saweblia.ma/fournisseurs/'+$('#name-searchfournisseur').val(), function (data){
        var i;
        var table = data.fournisseurs.Fournisseurs;
  
        $("#fournisseur-table").html("")
        
        for (i = 0; i < table.length; i++) {
          $("#fournisseur-table").append('<tr id="' + table[i].Fournisseur + '">');
          if (table[i].NomFournisseur != null)
            $("#fournisseur-table").append("<td>" + table[i].NomFournisseur + "</td>");
          else $("#fournisseur-table").append("<td></td>");
          if (table[i].NomContact != null)
            $("#fournisseur-table").append("<td>" + table[i].NomContact + "</td>");
          else $("#fournisseur-table").append("<td></td>");
          if (table[i].Telephone != null)
            $("#fournisseur-table").append("<td>" + table[i].Telephone + "</td>");
          else $("#fournisseur-table").append("<td></td>");
          if (table[i].Adresse != null)
            $("#fournisseur-table").append("<td>" + table[i].Adresse + "</td>");
          else $("#fournisseur-table").append("<td></td>");
          
            
          if (table[i].Email != null)
            $("#fournisseur-table").append(
              "<td>" + table[i].Email + "</td>"
            );
          else $("#fournisseur-table").append("<td></td>");
          if (table[i].Localisation != "")
          $("#fournisseur-table").append(
            '<td><a href="'+table[i].Localisation+'" class="btn btn-success action"><span class="material-icons">room</span></a><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteFournisseur(' +
              table[i].Fournisseur +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
              table[i].Fournisseur +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
          else  $("#fournisseur-table").append(
            '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteFournisseur(' +
              table[i].Fournisseur +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
              table[i].Fournisseur +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
        }
      });
  })
    $("#btn-edit").click(function () {
      var arr = {
      
        nom:$("#nomFournisseur").val(),
        nom_contact:$("#nomContact").val(),
        telephone:$("#telephone").val(),
        adresse:$("#adresse").val(),
        localisation:$("#localisation").val(),
        email:$("#email").val(),
      };
  
      $.ajax({
        url:
          "http://webapp.saweblia.ma/fournisseurs/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          alert(msg);
        },error:function(){
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est modifié avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Fourniture/fourniture.php"
            }, 1000);
        }
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
  
  function deleteFournisseur(idfournisseur) {
    if (confirm("Voulez-vous vraiment supprimer ce fournisseur ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/fournisseurs/" + idfournisseur,
        type: "DELETE",
        success: function (msg) {
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le fournisseur est supprimé avec succes</span></div>')
                setTimeout(function() {
                   window.location.href="../Fourniture/fourniture.php?"+window.location.search.substring(1).split("?")[0]
                  }, 1000);
        },
      });
  }
  function modiferClientForm(idfournisseur) {
    window.location.href="../Fourniture/editFournisseur.php?"+idfournisseur
  }
  