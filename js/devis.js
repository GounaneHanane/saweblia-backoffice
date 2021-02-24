if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
    var fourniture=[]
    var prestation=[]
    $(document).ready(function () {
  
  displayClients()
  displayCoordinateurs()
  displayPrestation()  
  displayFourniture()   
     
        $('.js-example-basic-single').select2();
  
  $("#devis-table").append('<tr id="">');

  $("#devis-table").append("<td> Client 1</td>");

  $("#devis-table").append("<td> Coordinateur 1 </td>");

  $("#devis-table").append("<td> 20-2-2020</td>");

  $("#devis-table").append("<td> 20-20-2020</td>");

  $("#devis-table").append("<td>Status </td>");

  $("#devis-table").append(
    '<td><a href="" class="btn btn-info action"><span class="material-icons">info</span></a><button onclick="deletedevis(" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button onclick="deletedevis()" type="button" class="btn btn-primary action"><span class="material-icons">assignment_turned_in</span></button><button onclick="deletedevis(" type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm()"><span class="material-icons">create</span></button></td></tr>'
  );

  $("#edit-devis-table").append('<tr id="">');

  $("#edit-devis-table").append("<td> prestation1</td>");

  $("#edit-devis-table").append("<td> 100 </td>");

  $("#edit-devis-table").append("<td> 1 </td>");

  $("#edit-devis-table").append("<td> 0.2</td>");

  $("#edit-devis-table").append("<td> 100 </td>");
  $("#edit-devis-table").append("<td> artisant1 </td>");

  $("#edit-devis-table").append(
    '<td><button onclick="deletedevis(" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm()"><span class="material-icons">create</span></button></td></tr>'
  );

  ///
  /// select prestation
  ///
  $('#select-prestation ').on('change', function() {
     $.ajax({
    url:'http://webapp.saweblia.ma/prestations/'+$(this).val(),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
   $('#PUVente').val(data.PrixVente)
   $('#quantité').val(0)
   $('#coifficient').val(data.CoefficientRemise)
   $('#descirption').val(data.Description)
   $('#PUAchat').val(data.PrixAchat)
  }
  });
})
  ///
  /// select fourniture
  ///
  $('#listeFourniture').on('change', function() {
    
     $.ajax({
    url:'http://webapp.saweblia.ma/fournitures/'+$(this).val(),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
      $('#fPUVente').val(data.PrixVente)
      $('#fquantité').val(0)
      $('#fdescirption').val(data.Description)
     // $('#fFournisseur').val(data.Fournisseur.NomFournisseur)
   }})
  });
      ////
    //// add client checkbox in add fourniture
    ////
    $('#add-client').change(function() {
      var html=""
        if($(this).is(":checked")) {
             $(".clientArea").html("")
             $("#client-info-area").html("")
             
            html+=' <h3 class="card-title" style="margin-bottom: 15px;">Nouveau Client</h3>'
            html+='<div class="row">'
            html+='<div class="col-md-6">'
            html+='<div class="form-group">'
            html+='<label class="bmd-label-floating">Nom : </label>'
            html+='<input class="form-control" id="client-nom-add" /> '
            html+='</div>'
            html+='</div>'
            html+='<div class="col-md-6">'
            html+='<div class="form-group">'
            html+='<label class="bmd-label-floating">Telephone : </label>'
            html+='<input class="form-control" id="client-telephone-add" /> '
            html+='</div>'
            html+='</div>'
            html+='</div>'
            html+='<div class="row">'
            html+='<div class="col-md-6">'
            html+='<div class="form-group">'
            html+='<label class="bmd-label-floating">Commentaire : </label>'
            html+='<textarea class="form-control" id="client-commentaire-add" ></textarea>'
            html+='</div>'
            html+=' </div>'
            html+='  </div>'
            html+=' <h3>Nouvelle Adresse</h3>'
            html+=' <div class="row">'
            html+='<div class="col-md-2">'
            html+=' <div class="form-group">'
            html+='<label class="bmd-label-floating">Libelle : </label> '
            html+=' <input class="form-control" id="client-libelle-add" />'
            html+='      </div> '
            html+='</div>'
            html+='<div class="col-md-2">'
            html+='<div class="form-group">'
            html+='<label class="bmd-label-floating">Quartier : </label>'
            html+='<input class="form-control" id="client-quartier-add" /> '
            html+='</div>'
            html+=' </div>'
            html+='<div class="col-md-2">'
            html+='<div class="form-group">'
            html+=' <label class="bmd-label-floating">Rue : </label>'
            html+='  <input class="form-control" id="client-rue-add" /> '
            html+='</div> '
            html+='</div>'
            html+='<div class="col-md-2">'
            html+=' <div class="form-group">'
            html+='<label class="bmd-label-floating">Ville : </label>'
            html+='<select class="form-control" id="client-ville-add" >'
            html+='<option>Casablanca</option>'
            html+='<option>Mohemmadia</option>'
            html+='<option>Rabat</option>'
            html+='<option>Autre</option>'
            html+='</select>'
            html+=' </div>'
            html+=' </div>'
            html+='<div class="col-md-4">'
            html+='<label class="bmd-label-floating">Localisation : </label>  '
            html+='<input class="form-control" id="client-localisation-add" />'
            html+='</div>'
            html+='</div>' 
            html+=' <button id="add-devi" type="submit" class="btn btn-success pull-right">Enregistrer</button>'
            html+='</div>'
            html+='</form>'
            html+='</div>'
           
            } else {
            
             $(".clientArea").html("")
             $("#client-info-area").html("")
             $(".clientArea").append(' <select id="clients"  class="form-control js-example-basic-single" ></select>')
       $("#client-info-area").append('       <h3 class="card-title" style="margin-bottom: 15px;">Information Client </i></h3>  <div class="row">  <div class="col-md-6">      <div class="form-group">         <label class="bmd-label-floating">Nom : </label>         <label class="bmd-label-floating" id="nom-client"></label>   </div>      </div>      <div class="col-md-6">          <div class="form-group">              <label class="bmd-label-floating">Telephone : </label>              <label class="bmd-label-floating" id="tel-client"></label>           </div>  </div>     </div><div class="row">   <div class="col-md-6">  <div class="form-group">    <label class="bmd-label-floating">Commentaire : </label>    <label class="bmd-label-floating" id="comment-client"></label></div> </div> </div><div class="row">  <div class="col-md-1"><div class="form-group"><label class="bmd-label-floating">Adresse</label> </div></div><div class="col-md-4"><div class="form-control"><select id="listeAdresse" class="form-control js-example-basic-single"> </select></div></div> <div class="col-md-2"><div class="form-group"><label class="bmd-label-floating">Libelle : </label><label id="libelle-adresse" class="bmd-label-floating">Libelle1</label></div></div><div class="col-md-5"> <div class="form-group"><label class="bmd-label-floating" >Localisation : </label><label id="localisation-adresse" class="bmd-label-floating">https://g.page/villagedusoir?share</label><a><button type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button></a></div></div> </div>')
       $('.js-example-basic-single').select2();
       
       displayClients()
        }
        $("#client-info-area").append(html)
           

});
///
/// select a client  
///
$('#clients').change(function(){

   $.ajax({
    url:'http://webapp.saweblia.ma/clients/'+$(this).val(),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
    $('#nom-client').html(data.Nom)
    $('#tel-client').html(data.Telephone)
    $('#comment-client').html(data.Comment)
}})
 $.ajax({
    url:'http://webapp.saweblia.ma/adresse_client/'+$(this).val(),headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
  $('#listeAdresse').html('')
    
  for (i = 0; i < data.Adresses.length; i++) {
    $('#listeAdresse').append("<option value='"+data.Adresses[i].AdressID+"'>" + data.Adresses[i].Rue+" "+data.Adresses[i].Quartier+","+data.Adresses[i].Ville+ "</option>")
      
  }
}})
})
///
/// select an adresse  
///
$('#listeAdresse').change(function(){
   $.ajax({
    url:'http://webapp.saweblia.ma/adresses/'+$(this).val(),headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
    $('#libelle-adresse').val(data.Libelle)
    $('#localisation-adresse').val(data.Localisation)
}})
})
///
/// Valider une prestation 
///
$("#valider-prestation").click(function(){
  if(prestation.length==0)
    var id=1
  else var id=parseInt(prestation[prestation.length-1].id)+1
  var data={"id":id,
  "prestation":  $("#select-prestation").find(":selected").val(),
   "coifficient":$("#coifficient").val(),
 
"Artisan": $("#listeArtisans").find(":selected").val(),
"Quantite":$("#quantité").val(),
"Total":$("#total").val()
}
prestation.push(data)
  var tableau=""
  tableau+="<tr id='prestation"+id+"'>"
 tableau+="<td id='"+
      $("#select-prestation").find(":selected").val()+"'>"+
      $("#select-prestation").find(":selected").text()+"</td>"
 tableau+="<td> </td>"
 tableau+="<td> "+$("#quantité").val()+"</td>"
 tableau+="<td>"+$("#coifficient").val()+"</td>"
 tableau+="<td> "+$("#total").val()+"</td>"
 tableau+="<td id='"+$("#listeArtisans").find(":selected").val()+"'> "+ $("#listeArtisans").find(":selected").text()+"</td>"
 tableau+='<td><button onclick="removePrestation('+id+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="editPrestation('+id+')"><span class="material-icons">create</span></button></td>'
 
 tableau+="</tr>"
 $('#table-prestation').append(tableau)
})
///
/// Calculer le total de prestation
///
$('.totalPrestation').change(function(){
  $('#total').val( $('#PUVente').val()*  $('#quantité').val()* $('#coifficient').val())
    
})
$('.totalFourniture').change(function(){
  $('#ftotal').val( $('#fPUVente').val()*  $('#fquantité').val())
    
})
///
/// Valider une fourniture 
///
$("#valider-fourniture").click(function(){
  if(fourniture.length==0)
    var id=1
  else var id=parseInt(fourniture[fourniture.length-1].id)+1
  var data={"id":id,
  "fourniture": $("#listeFourniture").find(":selected").val(),
   "fournisseur":$("#fFournisseur").html(),
  "description":$("#fdescription").val(),
"PUVente": $("#fPUVente").val(),
"Quantite":$("#fquantité").val(),
"Total":$("#ftotal").val()
}
fourniture.push(data)
  var tableau=""
  tableau+="<tr id='fourniture"+id+"'>"
 tableau+="<td id='"+
      $("#listeFourniture").find(":selected").val()+"'>"+
      $("#listeFourniture").find(":selected").text()+"</td>"
 tableau+="<td> "+$("#fFournisseur").html()+"</td>"
 tableau+="<td>"+$("#fdescription").val()+"</td>"
 tableau+="<td> "+$("#fPUVente").val()+"</td>"
 tableau+="<td> "+$("#fquantité").val()+"</td>"
 tableau+="<td> "+$("#ftotal").val()+"</td>"
 tableau+='<td><button onclick="removeFourniture('+id+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="editFourniture('+ id+')"><span class="material-icons">create</span></button></td>'
 
 tableau+="</tr>"
 $('#table-fourniture').append(tableau)
})

})
function displayClients() {
  ///
  /// display clients and first client information
  ///
   $.ajax({
    url:'http://webapp.saweblia.ma/clients',headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
       /// list of clients
    var i;
    var selectedClient
   for (i = 0; i < data.Clients.length; i++) {
     if (i==0) {
      $('#clients').append("<option value='"+data.Clients[i].ClientID+"' selected='true'>" + data.Clients[i].Nom+ "</option>")
      selectedClient=data.Clients[i].ClientID
      /// first client information
      $('#nom-client').html(data.Clients[i].Nom)
        $('#tel-client').val(data.Clients[i].Telephone)
        $('#comment-client').val(data.Clients[i].Comment)
            /// first client adresses 
        $.ajax({
          url:'http://webapp.saweblia.ma/adresse_client/'+selectedClient,
          headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
          },success: function(data) {
                $('#listeAdresse').html('')
                  
                for (i = 0; i < data.Adresses.length; i++) {
                  if (i==0) { $('#listeAdresse').append("<option value='"+data.Adresses[i].AdressID+"' selected='true'>" + data.Adresses[i].Rue+" "+data.Adresses[i].Quartier+","+data.Adresses[i].Ville+ "</option>")
                  $('#libelle-adresse').val(data.Adresses[i].Libelle)
                  $('#localisation-adresse').val(data.Adresses[i].Localisation)
                
                } else $('#listeAdresse').append("<option value='"+data.Adresses[i].AdressID+"'>" + data.Adresses[i].Rue+" "+data.Adresses[i].Quartier+","+data.Adresses[i].Ville+ "</option>")
                    
                }
              }})
      } else   $('#clients').append("<option value='"+data.Clients[i].ClientID+"' >" + data.Clients[i].Nom+ "</option>")
     
      }}})
 
   
     
      }
       


    function removeFourniture(id) {
      $("#fourniture"+id).remove()
    }
   function editFourniture(line) {
     for(var i=0;i<fourniture.length;i++) {
       if(fourniture[i].id==line) {
       $('#listeFourniture').val(fourniture[i].FournitureID).trigger('change')
      //  $('#listeFourniture').empty().trigger('change');
        $("#fFournisseur").html(fourniture[i].fournisseur)
        $("#fdescription").val(fourniture[i].description)
        $("#fPUVente").val(fourniture[i].PUVente)
        $("#fquantité").val(fourniture[i].Quantite)
        $("#ftotal").val(fourniture[i].Total)
        $("#fourniture"+fourniture[i].id).remove()
       }
     }
    
   }    
   function removePrestation(id) {
     $("#prestation"+id).remove()
  }
 function editPrestation(line) {
 
   for(var i=0;i<prestation.length;i++) {
   
     if(prestation[i].id==line) {
      
      $("#select-prestation").val(prestation[i].prestation).trigger('change')
      $("#coifficient").val(prestation[i].coifficient)
      $("#listeArtisans").val(prestation[i].Artisan)
      $("#quantité").val(prestation[i].Quantite)
      $("#total").val(prestation[i].Total)
      $("#prestation"+prestation[i].id).remove()
     }
   }
  
 }    

    
      

function displayCoordinateurs() {
    ///
  /// display coordinateurs and first coordinateur information
  ///
   $.ajax({
    url:'http://webapp.saweblia.ma/coordinateurs',headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
       /// list of coordinateurs
    var i;
   for (i = 0; i < data.Coordinateurs.length; i++) {
     if (i==0)
       $('#listeCoordinateur').append("<option value='"+data.Coordinateurs[i].CoordinateurID+"' selected='true'>" + data.Coordinateurs[i].Nom+ "</option>")
      else   $('#listeCoordinateur').append("<option value='"+data.Coordinateurs[i].CoordinateurID+"' >" + data.Coordinateurs[i].Nom+ "</option>")
     
      }
    }
})
}


function displayPrestation(){
    ///
  /// display prestation and first coordinateur information
  ///
   $.ajax({
    url:'http://webapp.saweblia.ma/prestations',headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
       /// list of prestation
    var i;
   for (i = 0; i < data.Prestations.length; i++) {
     if (i==0) {
      $('#select-prestation').append("<option value='"+data.Prestations[i].PrestationID+"' selected='true'>" + data.Prestations[i].Libelle+ "</option>")
      $('#PUVente').val(data.Prestations[i].PrixVente)
      $('#quantité').val(0)
      $('#coifficient').val(data.Prestations[i].CoefficientRemise)
      $('#descirption').val(data.Prestations[i].Description)
      $('#PUAchat').val(data.Prestations[i].PrixAchat)
      $('#total').val(data.Prestations[i].PrixVente*0*data.Prestations[i].CoefficientRemise)
     }
    else    $('#select-prestation').append("<option value='"+data.Prestations[i].PrestationID+"'>" + data.Prestations[i].Libelle+ "</option>")
       
      }
}})
 $.ajax({
    url:'http://webapp.saweblia.ma/artisans',headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
       /// list of prestation
    var i;
   for (i = 0; i < data.Artisans.length; i++) {
    $('#listeArtisans').append("<option value='"+data.Artisans[i].ArtisanID+"'>" + data.Artisans[i].Nom+ "</option>")
     
   }
  }})
}
function displayFourniture(){
  ///
/// display fourniture and first information
///
 $.ajax({
    url:'http://webapp.saweblia.ma/fournitures',headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },success: function(data) {
     /// list of prestation
  var i;
 for (i = 0; i < data.Fournitures.length; i++) {
   if (i==0) {
    $('#listeFourniture').append("<option value='"+data.Fournitures[i].FournitureID+"' >" + data.Fournitures[i].Libelle+ "</option>")
    $('#fPUVente').val(data.Fournitures[i].PrixVente)
    $('#fquantité').val(0)
    $('#fFournisseur').html(data.Fournitures[i].Fournisseur.NomFournisseur)
    $('#fdescription').val(data.Fournitures[i].Description)
    $('#ftotal').val(0)
    
   }
  else    $('#listeFourniture').append("<option value='"+data.Fournitures[i].FournitureID+"'>" + data.Fournitures[i].Libelle+ "</option>")
     
    }
}})

}
