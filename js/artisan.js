
$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/artisans", function (data) {
      var i;
      var table = data.artisan.Artisans;
      for (i = 0; i < table.length; i++) {
        $("#artisan-table").append('<tr>');
        if (table[i].Nom != null)
          $("#artisan-table").append("<td>" + table[i].Nom + "</td>");
        else $("#artisan-table").append("<td></td>");
        if (table[i].Telephone != null)
          $("#artisan-table").append("<td>" + table[i].Telephone + "</td>");
        else $("#artisan-table").append("<td></td>");
        if (table[i].Ville != null)
        $("#artisan-table").append(
          "<td>" + table[i].Ville + "</td>"
        );
      else $("#artisan-table").append("<td></td>");
        if (table[i].SoldeArtisan!= null)
        $("#artisan-table").append(
        "<td>" + table[i].SoldeArtisan + "</td>"
        );
        else $("#artisan-table").append("<td></td>");
        if (table[i].SoldeSaweblia != null)
        $("#artisan-table").append(
        "<td>" + table[i].SoldeSaweblia + "</td>"
        );
        else $("#artisan-table").append("<td></td>");
            if(table[i].Disponible==true)
            $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
        else $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox"><span class="slider round"></span></label></td>')

        $("#artisan-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteartisan(' +
            table[i].ArtisanID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferArtisanForm(' +
            table[i].ArtisanID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $('#searchbynameartisan').click(function(){
   
      $.getJSON('http://webapp.saweblia.ma/artisansbyname/'+$('#name-searchartisan').val(), function (data){
        $('#artisan-table').html("")
        alert(data)
        var i;
        var table = data.artisan.Artisans;
        for (i = 0; i < table.length; i++) {
          $("#artisan-table").append('<tr>');
          if (table[i].Nom != null)
            $("#artisan-table").append("<td>" + table[i].Nom + "</td>");
          else $("#artisan-table").append("<td></td>");
          if (table[i].Telephone != null)
            $("#artisan-table").append("<td>" + table[i].Telephone + "</td>");
          else $("#artisan-table").append("<td></td>");
          if (table[i].Ville != null)
          $("#artisan-table").append(
            "<td>" + table[i].Ville + "</td>"
          );
        else $("#artisan-table").append("<td></td>");
          if (table[i].SoldeArtisan!= null)
          $("#artisan-table").append(
          "<td>" + table[i].SoldeArtisan + "</td>"
          );
          else $("#artisan-table").append("<td></td>");
          if (table[i].SoldeSaweblia != null)
          $("#artisan-table").append(
          "<td>" + table[i].SoldeSaweblia + "</td>"
          );
          else $("#artisan-table").append("<td></td>");
              if(table[i].Disponible==true)
              $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
          else $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox"><span class="slider round"></span></label></td>')
  
          $("#artisan-table").append(
            '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteartisan(' +
              table[i].ArtisanID +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferArtisanForm(' +
              table[i].ArtisanID +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
        }
      })
  })
  $('#searchbyphoneartisan').click(function(){
   
      $('#artisan-table').html("")
      $.getJSON('http://webapp.saweblia.ma/artisansbyphone/'+$('#phone-searchartisan').val(), function (data){
        $('#artisan-table').html()
        var i;
      var table = data.artisan.Artisans;
      for (i = 0; i < table.length; i++) {
        $("#artisan-table").append('<tr>');
        if (table[i].Nom != null)
          $("#artisan-table").append("<td>" + table[i].Nom + "</td>");
        else $("#artisan-table").append("<td></td>");
        if (table[i].Telephone != null)
          $("#artisan-table").append("<td>" + table[i].Telephone + "</td>");
        else $("#artisan-table").append("<td></td>");
        if (table[i].Ville != null)
        $("#artisan-table").append(
          "<td>" + table[i].Ville + "</td>"
        );
      else $("#artisan-table").append("<td></td>");
        if (table[i].SoldeArtisan!= null)
        $("#artisan-table").append(
        "<td>" + table[i].SoldeArtisan + "</td>"
        );
        else $("#artisan-table").append("<td></td>");
        if (table[i].SoldeSaweblia != null)
        $("#artisan-table").append(
        "<td>" + table[i].SoldeSaweblia + "</td>"
        );
        else $("#artisan-table").append("<td></td>");
            if(table[i].Disponible==true)
            $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
        else $('#artisan-table').append('<td><label class="switch"><input id="check'+table[i].ArtisanID+'" onchange="blockArtisan('+table[i].ArtisanID+')" type="checkbox"><span class="slider round"></span></label></td>')

        $("#artisan-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteartisan(' +
            table[i].ArtisanID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferArtisanForm(' +
            table[i].ArtisanID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    })
  })
    $("#add-artisan").click(function () {
      window.location.href="../Personnel/addArtisan.php";
    });
    $("#btn-add").click(function () {
      var arr = {
        nom:$("#Nom").val(),
        telephone:$("#telephone").val(),
        ville:$("#ville").val(),
        cin:$("#cin").val(),
        disponible:$("#dispo").is(":checked"),
        solde_artisan:$("#SArtisan").val(),
        solde_Saweblia:$("#SSaweblia").val(),
        type:$("#type").val(),
        langue:$("#langue").val(),
        email:$("#email").val()
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/artisans",
        type: "POST",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          
        },
        error: function(){
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est ajouté avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Personnel/personnels.php"
              }, 1000);
        }
      });
    });
    $("#btn-edit").click(function () {
      var arr = {
       nom: $('#Nom').val(),
        telephone:$('#telephone').val(),
        type:$('#type').val(),
        ville:$('#ville').val(),
        solde_artisan:$('#SArtisan').val(),
        solde_Saweblia:$('#SSaweblia').val(),
        langue:$('#langue').val(),
        cin:$('#cin').val(),
        email:$('#email').val(),
        disponible:$('#dispo').is(":checked")
      };
  
      $.ajax({
        url:
          "http://webapp.saweblia.ma/artisans/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
         
        },
        error: function(){
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est modifié avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Personnel/personnels.php"
              }, 1000);
        }
      });
    });
    $('.mdc-tab').click(function(event){
      $(".mdc-tab ").removeClass('mdc-tab--active')
      $(this).addClass('mdc-tab--active')
      $("span.mdc-tab-indicator--active").removeClass('mdc-tab-indicator--active')
      $(this).find("span.mdc-tab-indicator").addClass('mdc-tab-indicator--active')
      console.log($(this).attr('name'))
      $('.tab').attr('hidden',true)
      $('#'+$(this).attr('name')).attr('hidden',false)
    })
  });
  
  function deleteartisan(idartisan) {
    if (confirm("Voulez-vous vraiment supprimer cette artisan ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/artisans/" + idartisan,
        type: "DELETE",
        success: function (msg) {
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> L\'artisan est supprimé avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Personnel/personnels.php"
              }, 1000);
        },
        error:function(){
           
        }
      });
  }
  function modiferArtisanForm(idartisan) {
    window.location.href="../Personnel/editArtisan.php?"+idartisan
  }
  function blockArtisan(ArtisanId) {
    alert("hello")
    var arr={}
   var checkbox=$('#check'+ArtisanId).is(":checked")
 $.getJSON('http://webapp.saweblia.ma/artisans/'+ArtisanId, function (data){
   arr = {
    nom:data.Nom ,
     telephone:data.Telephone,
     ville:data.Ville,
     solde_artisan:data.SoldeArtisan,
     solde_Saweblia:data.SoldeSaweblia,
     langue:data.Langue,
     cin:data.Cin,
     email:data.Email,
     disponible:checkbox
   };

    $.ajax({
        url: 'http://webapp.saweblia.ma/artisans/'+ArtisanId,
        type: 'PUT',
        data: JSON.stringify(arr),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            alert(msg);
        }
    });
    });
 

    
}
  