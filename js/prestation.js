$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/prestations", function (data) {
      $(".pagination-prestation").append('<li class="page-item"><a class="page-link btn btn-primary" href="../service/services.php?'+data.previouspage+'">Précédent</a></li>')
      var j
      for(j=1;j<=data.lastpage;j++) {
          $(".pagination-prestation").append('<li class="page-item"><a class="page-link btn btn-primary" href="../service/services.php?'+j+'">'+j+'</a></li>')
     
      }
      $(".pagination-prestation").append('<li class="page-item"><a class="page-link btn btn-primary" href="../service/services.php?'+data.nextpage+'">Suivant</a></li>')
      
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
        
        var jsonIssues
        $.ajax({
          url: "http://webapp.saweblia.ma/services/"+table[i].ServiceID,
          async: false,
          dataType: 'json',
          success: function(libellefournisseur) {
              jsonIssues = libellefournisseur.Libelle;
          }
      });
       
        $("#prestation-table").append(
            "<td>" + jsonIssues + "</td>"
          ); 
        
       
        if (table[i].PrestationMedia != null)
            $("#prestation-table").append("<td><img width='60' height='60'src='http://localhost/sawebliabackoffice/" + table[i].PrestationMedia + "'/></td>");
          else $("#prestation-table").append("<td></td>");
        
        $("#prestation-table").append(
          '<td> <button onclick="deleteprestation(' +
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
      uploadImageResult=uploadFile( $("#fournitureImage"));
      if(uploadImageResult=="success") {
      var arr = {
        libelle:$("#libelle").val(),
        description:$("#description").val(),
        service_libelle:$("#services").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        coefficient_remise:$("#coefficientRemise").val(),
        prestation_media:'Media/Prestation/'+ $("#fournitureImage")[0].files[0].name
        
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
        },error:function(){
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est ajoutée avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Service/services.php"
            }, 1000);
        }
        
      });
    } else if (uploadImageResult=='Not a valid image!')
    {
      $('.clearfix').html("")
      $('.clearfix').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>')
      
    }
    });
    $('#searchbynameprestation').click(function(){
      $.getJSON('http://webapp.saweblia.ma/prestations/'+$('#name-searchprestation').val(), function (data){
        $(".pagination-prestation").html("")
      
        var i;
        var table = data.Prestations;
        $("#prestation-table").html("")
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
          
          var jsonIssues
          $.ajax({
            url: "http://webapp.saweblia.ma/services/"+table[i].ServiceID,
            async: false,
            dataType: 'json',
            success: function(libellefournisseur) {
                jsonIssues = libellefournisseur.Libelle;
            }
        });
         
          $("#prestation-table").append(
              "<td>" + jsonIssues + "</td>"
            ); 
          
         
          if (table[i].PrestationMedia != null)
              $("#prestation-table").append("<td><img width='60' height='60'src='http://localhost/sawebliabackoffice/" + table[i].PrestationMedia + "'/></td>");
            else $("#prestation-table").append("<td></td>");
          
          $("#prestation-table").append(
            '<td> <button onclick="deleteprestation(' +
              table[i].PrestationID +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
              table[i].PrestationID +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
        }
      });
  })
    $("#btn-edit").click(function () {
      
      uploadImageResult=uploadFile( $("#fournitureImage"));
      //alert(uploadImageResult)
      if(uploadImageResult=="success") {
        var media
       if($("#fournitureImage")[0].files[0]==undefined)
            media=$("#fournitureImage").attr("alt")
        else media='Media/Prestation/'+ $("#fournitureImage")[0].files[0].name
       
      var arr = {
        libelle: $("#libelle").val(),
        description: $("#description").val(),
        service_libelle:$("#services").val(),
        prix_achat:$("#prixAchat").val(),
        prix_vente:$("#prixVente").val(),
        coefficient_remise:$("#coefficientRemise").val(),
        prestation_media:media,
        serviceId:$('#services').val()
      };
  
      $.ajax({
        url:
          "http://webapp.saweblia.ma/prestations/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          alert(msg);
        },error:function(){
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est modifiée avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Service/services.php"
            }, 1000);
        }
      });
    } else if (uploadImageResult=='Not a valid image!')
    {
      $('.clearfix').html("")
      $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est ajoutée avec succes</span></div>')
      setTimeout(function() {
         window.location.href="../Service/services.php"
        }, 1000);
    }
    });
  });
  
  function deleteprestation(idprestation) {
    if (confirm("Voulez-vous vraiment supprimer cette prestation ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/prestations/" + idprestation,
        type: "DELETE",
        success: function (msg) {
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La prestation est supprimée avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Service/services.php"
            }, 1000);
        },
      });
  }
  function modiferClientForm(idprestation) {
    
    window.location.href="../Prestation/editPrestation.php?"+idprestation;
  }
  function uploadFile(imageFile){
 
    var result="success"
 
    var input = imageFile;
    file = input[0].files[0];
    if(file != undefined){
      formData= new FormData();
      if(!!file.type.match(/image.*/)){
        formData.append("image", file);
        
        $.ajax({
          url: "../../uploadImagePrestation.php",
          type: "POST",
          data: formData,
          processData: false,
          contentType: false,
          success: function(data){
              
             
          },error: function(msg){
            alert(msg)
          }
        });
      }else{
        result = 'Not a valid image!';
      }
    
     
    }
    return result
  }