
$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/fournitures?p="+window.location.search.substring(1).split("?"), function (data) {
      $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+data.previouspage+'">Précédent</a></li>')
      var j
      for(j=1;j<=data.lastpage;j++) {
          $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+j+'">'+j+'</a></li>')
     
      }
      $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+data.nextpage+'">Suivant</a></li>')
      
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
          $("#fourniture-table").append("<td><img width='60' height='60'src='http://localhost/sawebliabackoffice/" + table[i].Media + "'/></td>");
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
              jsonIssues = libellefournisseur.Telephone;
          }
      });
       
        $("#fourniture-table").append(
            "<td>" + jsonIssues + "</td>"
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
    $("#add-fourniture").click(function () {
      window.location.href="../fourniture/addFourniture.php";
    });
    $('#searchbynamefourniture').click(function(){
      $.getJSON('http://webapp.saweblia.ma/fournitures/'+$('#name-searchfourniture').val(), function (data){
        $(".pagination-fourniture").html("")
      $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+data.previouspage+'">Précédent</a></li>')
        var j
        for(j=1;j<=data.lastpage;j++) {
            $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+j+'">'+j+'</a></li>')
       
        }
        $(".pagination-fourniture").append('<li class="page-item"><a class="page-link btn btn-primary" href="../fourniture/fourniture.php?'+data.nextpage+'">Suivant</a></li>')
         
      var i;
        var table = data.fournitures.Fournitures;
        console.log(table)
        $("#fourniture-table").html("")
        
        for (i = 0; i < table.length; i++) {
          $("#fourniture-table").append('<tr id="' + table[i].FournitureID + '">');
          if (table[i].Libelle != null)
            $("#fourniture-table").append("<td>" + table[i].Libelle + "</td>");
          else $("#fourniture-table").append("<td></td>");
          if (table[i].Description != null)
            $("#fourniture-table").append("<td>" + table[i].Description + "</td>");
          else $("#fourniture-table").append("<td></td>");
          if (table[i].Media != null)
            $("#fourniture-table").append("<td><img width='60' height='60'src='http://localhost/sawebliabackoffice/" + table[i].Media + "'/></td>");
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
                jsonIssues = libellefournisseur.Telephone;
            }
        });
         
          $("#fourniture-table").append(
              "<td>" + jsonIssues + "</td>"
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
    $("#btn-add").click(function () {
      uploadImageResult=uploadFile( $("#fournitureImage"));
      if(uploadImageResult=="success") {
        var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          telephone_fournisseur:$("#fournisseurs").val(),
          fourniture_media:'Media/Fourniture/'+ $("#fournitureImage")[0].files[0].name
        };
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
    $("#btn-edit").click(function () {
     
      uploadImageResult=uploadFile( $("#fournitureImage"));
      //alert(uploadImageResult)
      if(uploadImageResult=="success") {
        var media
       if($("#fournitureImage")[0].files[0]==undefined)
            media=$("#fournitureImage").attr("alt")
        else media='Media/Fourniture/'+ $("#fournitureImage")[0].files[0].name
       
        var arr = {
          libelle:$("#libelle").val(),
          description:$("#description").val(),
          prix_achat:$("#prixAchat").val(),
          prix_vente:$("#prixVente").val(),
          telephone_fournisseur:$("#fournisseurs").val(),
          fourniture_media:media
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
          url: "../../uploadImageFourniture.php",
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
    window.location.href="../fourniture/editFourniture.php?"+idfourniture
  }
  