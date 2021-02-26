$(document).ready(function(){
   $('#addDeviForm').submit(function(e) {
      var arr={} 
     if($('#add-client').is(':checked')) {
         arr={
            "Telephone":$('#client-telephone-add').val(),
            "Nom":$('#client-nom-add').val(),
            "UtilisateurID":sessionStorage.getItem("utilisateurId"),
            "CoordinateurID":$('#listeCoordinateur').val(),
         }
     } else {
      arr={
         "ClientID":$('#clients').val(),
         "UtilisateurID":sessionStorage.getItem("utilisateurId"),
         "CoordinateurID":$('#listeCoordinateur').val(),
      }
     }
     $.ajax({
      url: "http://webapp.saweblia.ma/devi",
      type: "POST",
      headers: {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
      },
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
         $(".clearfix").html("");
         $(".clearfix").append(
           '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le devi est ajouté avec succes</span></div>'
         );
         setTimeout(function () {
            $(".clearfix").html("");
         }, 2000);
         
         $("#addDeviForm").animate({
            height: 'toggle'
          });
          $('#btn-save').click()
      },
      error: function () {
      
      },
    });
    
    e.preventDefault();
   })
 
  
   $('#btn-save').click(function(){
   
      if($(this).html()=="Ajouter prestation") {
         $(this).html("Ajouter fourniture")
         $("#prestationArea").slideDown();
      }
      else if($(this).html()=="Ajouter fourniture") {
         $("#fournitureArea").slideDown();
      }
   })
})