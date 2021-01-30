
$(document).ready(function () {
    ////
    //// Display Data
    ////
    $.getJSON("http://webapp.saweblia.ma/fournitures?p="+window.location.search.substring(1).split("?"), function (data) {
      $(".pagination-fourniture").append('<li class="page-item"><a class="page-link " href="../Fourniture/fourniture.php?'+data.previouspage+'">Précédent</a></li>')
      var j
      for(j=1;j<=data.lastpage;j++) {
          if(window.location.search.substring(1).split("?")==j)
          $(".pagination-fourniture").append('<li class="page-item active"><a class="page-link " href="../Fourniture/fourniture.php?'+j+'">'+j+'</a></li>')
          else $(".pagination-fourniture").append('<li class="page-item "><a class="page-link " href="../Fourniture/fourniture.php?'+j+'">'+j+'</a></li>')
          
     
      }
      $(".pagination-fourniture").append('<li class="page-item"><a class="page-link " href="../Fourniture/fourniture.php?'+data.nextpage+'">Suivant</a></li>')
      
      var i;
      var table = data.fournitures.Fournitures;
     
      
      for (i = 0; i < table.length; i++) {
        $("#fourniture-table").append('<tr id="' + table[i].FournitureID + '">');
        if (table[i].Libelle != null)
          $("#fourniture-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Description != null)
          $("#fourniture-table").append("<td>" + table[i].Description + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Media != null)
          $("#fourniture-table").append("<td><img width='60' height='60'src='"+window.location.origin+"/saweblia-backoffice/"+  table[i].Media + "'/></td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixAchat != null)
          $("#fourniture-table").append("<td>" + table[i].PrixAchat + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixVente != null)
          $("#fourniture-table").append("<td>" + table[i].PrixVente + "</td>");
        else $("#fourniture-table").append("<td></td>");
   
      if(table[i].Fournisseur.NomFournisseur!=null)
         $("#fourniture-table").append(
            "<td>" + table[i].Fournisseur.NomFournisseur + "</td>"
          ); 
          else $("#fourniture-table").append(
            "<td></td>"
          ); 
          if(table[i].Fournisseur.Telephone!=null)
        $("#fourniture-table").append(
            "<td>" + table[i].Fournisseur.Telephone + "</td>"
          ); 
          else  $("#fourniture-table").append(
            "<td></td>"
          ); 
        
        $("#fourniture-table").append(
          '<td><button onclick="deleteFourniture(' +
            table[i].FournitureID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
            table[i].FournitureID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    ////
    //// add fournisseur checkbox in add fourniture
    ////
    $('#add-fournisseur').change(function() {

        if($(this).is(":checked")) {
             $(".fournisseurArea").html("")
             $(".fournisseurArea").append('<div class="row"><input placeholder="Nom du fournisseur" id="nom_fournisseur" type="text" class="form-control col-md-6" required><input  placeholder="Téléphone du fournisseur" id="tel_fournisseur" type="tel" pattern="[0-9]{10}" class="form-control col-md-6" required></div>')
        } else {
            
             $(".fournisseurArea").html("")
             
          $.getJSON('http://webapp.saweblia.ma/fournisseurs', function(data) {
       
         var i;
        for (i = 0; i < data.fournisseurs.Fournisseurs.length; i++) {
            $('#fournisseurs').append("<option value='"+data.fournisseurs.Fournisseurs[i].Fournisseur+"'>" + data.fournisseurs.Fournisseurs[i].NomFournisseur + "</option>")
            } })
             $(".fournisseurArea").append(' <select id="fournisseurs"  class="form-control js-example-basic-single" ></select>')
       $('.js-example-basic-single').select2();
        }
           

}); 
    $("#add-fourniture").click(function () {
      window.location.href="../Fourniture/addFourniture.php";
    });
    ///
    /// Search by name (button click)
    ///
    $('#searchbynamefourniture').click(function(){
         $("#fourniture-table").html("")
      $.getJSON('http://webapp.saweblia.ma/fournitures/'+$('#name-searchfourniture').val(), function (data){
        $(".pagination-fourniture").html("")
        var i;
      var table = data.fournitures.Fournitures;
     
      
      for (i = 0; i < table.length; i++) {
        $("#fourniture-table").append('<tr id="' + table[i].FournitureID + '">');
        if (table[i].Libelle != null)
          $("#fourniture-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Description != null)
          $("#fourniture-table").append("<td>" + table[i].Description + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Media != null)
          $("#fourniture-table").append("<td><img width='60' height='60'src='"+window.location.origin+"/saweblia-backoffice/"+  table[i].Media + "'/></td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixAchat != null)
          $("#fourniture-table").append("<td>" + table[i].PrixAchat + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixVente != null)
          $("#fourniture-table").append("<td>" + table[i].PrixVente + "</td>");
        else $("#fourniture-table").append("<td></td>");
        var jsonIssues
        $.ajax({
          url: "http://webapp.saweblia.ma/fournisseurs/"+table[i].FournisseurID,
          async: false,
          dataType: 'json',
          success: function(libellefournisseur) {
              telephone = libellefournisseur.Telephone;
               nom = libellefournisseur.NomFournisseur;
          }
      });
      if(nom!=null)
         $("#fourniture-table").append(
            "<td>" + nom + "</td>"
          ); 
          else $("#fourniture-table").append(
            "<td></td>"
          ); 
          if(telephone!=null)
        $("#fourniture-table").append(
            "<td>" + telephone + "</td>"
          ); 
          else  $("#fourniture-table").append(
            "<td></td>"
          ); 
        
        $("#fourniture-table").append(
          '<td><button onclick="deleteFourniture(' +
            table[i].FournitureID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
            table[i].FournitureID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
      });
  })
    ///
    /// Search by name (enter)
    ///
    $('#name-searchfourniture').keydown(function (e){
        if(e.keyCode == 13){
             $("#fourniture-table").html("")
      $.getJSON('http://webapp.saweblia.ma/fournitures/'+$('#name-searchfourniture').val(), function (data){
        $(".pagination-fourniture").html("")
    
       var i;
      var table = data.fournitures.Fournitures;
     
      
      for (i = 0; i < table.length; i++) {
        $("#fourniture-table").append('<tr id="' + table[i].FournitureID + '">');
        if (table[i].Libelle != null)
          $("#fourniture-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Description != null)
          $("#fourniture-table").append("<td>" + table[i].Description + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].Media != null)
          $("#fourniture-table").append("<td><img width='60' height='60'src='"+window.location.origin+"/saweblia-backoffice/"+  table[i].Media + "'/></td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixAchat != null)
          $("#fourniture-table").append("<td>" + table[i].PrixAchat + "</td>");
        else $("#fourniture-table").append("<td></td>");
        if (table[i].PrixVente != null)
          $("#fourniture-table").append("<td>" + table[i].PrixVente + "</td>");
        else $("#fourniture-table").append("<td></td>");
        var jsonIssues
        $.ajax({
          url: "http://webapp.saweblia.ma/fournisseurs/"+table[i].FournisseurID,
          async: false,
          dataType: 'json',
          success: function(libellefournisseur) {
              telephone = libellefournisseur.Telephone;
               nom = libellefournisseur.NomFournisseur;
          }
      });
      if(nom!=null)
         $("#fourniture-table").append(
            "<td>" + nom + "</td>"
          ); 
          else $("#fourniture-table").append(
            "<td></td>"
          ); 
          if(telephone!=null)
        $("#fourniture-table").append(
            "<td>" + telephone + "</td>"
          ); 
          else  $("#fourniture-table").append(
            "<td></td>"
          ); 
        
        $("#fourniture-table").append(
          '<td><button onclick="deleteFourniture(' +
            table[i].FournitureID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
            table[i].FournitureID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
      });
        }
  })
  ///
  /// add form submit
  ///
    $("#addFourniture").submit(function (e) {
        e.preventDefault()
      uploadImageResult=uploadFile( $("#fournitureImage"));
      if(uploadImageResult=="success") {
          var media
       if($("#fournitureImage")[0].files[0]==undefined)
            media=$("#fournitureImage").attr("alt")
        else media='Media/Fourniture/'+ $("#fournitureImage")[0].files[0].name
          if($("#add-fournisseur").is(":checked"))
          {
               var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          telephone_fournisseur:$("#tel_fournisseur").val(),
          nom_fournisseur:$("#nom_fournisseur").val(),
          fourniture_media:media
        };
          } else {
                      var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          fournisseurId:$("#fournisseurs").val(),
          fourniture_media:media
        };
          }
       
        $.ajax({
          url: "http://webapp.saweblia.ma/fournitures",
          type: "POST",
          data: JSON.stringify(arr),
          contentType: "application/json; charset=utf-8",
          dataType: "json",
          async: false,
          success: function (msg) {
            $('.clearfix').html("")
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est ajoutée avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Fourniture/fourniture.php"
              }, 1000);
          },error:function(){
            $('.clearfix').html("")
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est ajoutée avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Fourniture/fourniture.php"
              }, 1000);
          }
          
        });
      } else if (uploadImageResult=='Not a valid image!')
      {
        $('.clearfix').html("")
        $('.clearfix').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>')
        
      }
      
        }
    );
    ///
    /// Edit fourniture form submit
    ///
    $("#editFourniture").submit(function (e) {
      e.preventDefault();
      uploadImageResult=uploadFile( $("#fournitureImage"));
      //alert(uploadImageResult)
      if(uploadImageResult=="success") {
        var media
       if($("#fournitureImage")[0].files[0]==undefined)
            media=$("#fournitureImage").attr("alt")
        else media='Media/Fourniture/'+ $("#fournitureImage")[0].files[0].name
          if($("#add-fournisseur").is(":checked"))
          {
               var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          telephone_fournisseur:$("#tel_fournisseur").val(),
          nom_fournisseur:$("#nom_fournisseur").val(),
          fourniture_media:media
        };
          } else {
                      var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          fournisseurId:$("#fournisseurs").val(),
          fourniture_media:media
        };
          }
    
     
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
        },error:function(){
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est modifiée avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Fourniture/fourniture.php"
            }, 1000);
        }
      });
    } else if (uploadImageResult=='Not a valid image!')
    {
      $('.clearfix').html("")
      $('.clearfix').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>')
      
    }
       e.preventDefault();
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
  function uploadFile(imageFile){
 
    var result="success"
 
    var input = imageFile;
    file = input[0].files[0];
    if(file != undefined){
      formData= new FormData();
      if(!!file.type.match(/image.*/)){
        formData.append("image", file);
        
        $.ajax({
          url: "../uploadImageFourniture.php",
          type: "POST",
          data: formData,
          processData: false,
          contentType: false,
          success: function(data){
              
             
          },error: function(msg){
            
          }
        });
      }else{
        result = 'Not a valid image!';
      }
    
     
    }
    return result
  }
  function deleteFourniture(idfourniture) {
    if (confirm("Voulez-vous vraiment supprimer ce fourniture ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/fournitures/" + idfourniture,
        type: "DELETE",
        success: function (msg) {
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La fourniture est supprimée avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Fourniture/fourniture.php"
            }, 1000);
        },
      });
  }
  function modiferFournitureForm(idfourniture) {
    window.location.href="../Fourniture/editFourniture.php?"+idfourniture
  }
  