$(document).ready(function(){
   localStorage.setItem("montant",0)
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
         localStorage.setItem("deviId",msg.DeviID)
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
   
      if($(this).attr("name")=="prestation") {
         $("#prestationArea").slideDown();
         $(this).attr("name","fourniture")
      }
      else if($(this).attr("name")=="fourniture") {
         $("#fournitureArea").slideDown();
         $(this).attr("name","save")
      } 
   })
   $('#save-prestation').click(function() {
      var lignes=$("#table-prestation tr")
      var result="true"
      for(var i=0;i<lignes.length;i++) {
         var columns=$(lignes[i]).children()
         var arr={}
         arr={
            "PrestationID":$(columns[0]).attr('id'),
            "ArtisanID":$(columns[6]).attr('id'),
            "PrixAchatPrestationDevi":$(columns[1]).html(),
            "PrixVentePrestationDevi":$(columns[2]).html(),
            "Quantite":$(columns[3]).html(),
            "Remise":$(columns[4]).html(),
            "DeviID":localStorage.getItem("deviId")
         }
         $.ajax({
            url: "http://webapp.saweblia.ma/artisan_prestation_devi",
            type: "POST",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            data: JSON.stringify(arr),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (msg) {
               localStorage.setItem("montant", parseFloat(localStorage.getItem("montant"))*parseFloat($(columns[5]).html()))
            },
            error: function () {
               alert("error")
               result="false"
            },
          });
      }
      if(result=='true') {
         $(".clearfix").html("");
         $(".clearfix").append(
           '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Les prestations sont ajoutées avec succes</span></div>'
         );
         setTimeout(function () {
            $(".clearfix").html("");
         }, 2000);
         $("#prestationArea2").animate({
            height: 'toggle'
          });
          $('#btn-save').click()
      }
   })
   $('#save-fourniture').click(function() {
      var lignes=$("#table-fourniture tr")
      var result="true"
      for(var i=0;i<lignes.length;i++) {
         var columns=$(lignes[i]).children()
         var arr={}
         arr={
            "FournitureID":$(columns[0]).attr('id'),
            "PrixAchatFourniture":$(columns[3]).html(),
            "Quantite":$(columns[4]).html(),
            "DeviID":localStorage.getItem("deviId")
         }
         $.ajax({
            url: "http://webapp.saweblia.ma/fourniture_devi",
            type: "POST",
            headers: {
              Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            data: JSON.stringify(arr),
            contentType: "application/json; charset=utf-8",
            dataType: "json",
            async: false,
            success: function (msg) {
              
               localStorage.setItem("montant", parseFloat(localStorage.getItem("montant"))*parseFloat($(columns[5]).html()))
               
            },
            error: function () {
               alert("error")
               result="false"
            },
          });
      }
      if(result=='true') {
         $(".clearfix").html("");
         $(".clearfix").append(
           '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Les prestations sont ajoutées avec succes</span></div>'
         );
         setTimeout(function () {
            $(".clearfix").html("");
         }, 2000);
         $("#fournitureArea2").animate({
            height: 'toggle'
          });
          $('#btn-save').click()
      }
   })
   $("#btn-save").click(function(){
      console.log(localStorage.getItem("montant"))
   })
})