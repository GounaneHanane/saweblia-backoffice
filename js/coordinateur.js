
$(document).ready(function () {
    $.getJSON("http://webapp.saweblia.ma/coordinateurs", function (data) {
      var i;
      var table = data.Coordinateurs;
      for (i = 0; i < table.length; i++) {
        $("#coordianteur-table").append('<tr>');
        if (table[i].Nom != null)
          $("#coordianteur-table").append("<td>" + table[i].Nom + "</td>");
        else $("#coordianteur-table").append("<td></td>");
        if (table[i].Telephone != null)
          $("#coordianteur-table").append("<td>" + table[i].Telephone + "</td>");
        else $("#coordianteur-table").append("<td></td>");

    
        if (table[i].Email != null)
          $("#coordianteur-table").append(
            "<td>" + table[i].Email + "</td>"
          );
        else $("#coordianteur-table").append("<td></td>");
        if (table[i].Ville != null)
        $("#coordianteur-table").append(
          "<td>" + table[i].Ville + "</td>"
        );
      else $("#coordianteur-table").append("<td></td>");
      if (table[i].Cin != null)
      $("#coordianteur-table").append(
        "<td>" + table[i].Cin + "</td>"
      );
    else $("#coordianteur-table").append("<td></td>");
    if(table[i].Disponible==true)
      $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox" checked><span class="slider round"></span></label></td>');
    else $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox"><span class="slider round"></span></label></td>');

        $("#coordianteur-table").append(
          '<td><button onclick="deletecoordianteur(' +
            table[i].CoordinateurID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].CoordinateurID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-coordinateur").click(function () {
      window.location.href="../Personnel/addCoordinateur.php";
    });
    $("#btn-add").click(function () {
      var arr = {
        nom:$("#Nom").val(),
        telephone:$("#telephone").val(),
        email:$("#email").val(),
        ville:$("#ville").val(),
        cin:$("#cin").val(),
        disponibilite:$("#dispo").is(":checked")
      };
  
      $.ajax({
        url: "http://webapp.saweblia.ma/coordinateurs",
        type: "POST",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
         
        }, error:function(){
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est ajouté avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Personnel/personnels.php"
            }, 1000);
        }
      });
    });
    $('#searchbyname').click(function(){
      $.getJSON('http://webapp.saweblia.ma/coordinateursbyname/'+$('#name-search').val(), function (data){
        $('#coordianteur-table').html("")
        var i;
        var table = data.Coordinateurs;
        for (i = 0; i < table.length; i++) {
          $("#coordianteur-table").append('<tr>');
          if (table[i].Nom != null)
            $("#coordianteur-table").append("<td>" + table[i].Nom + "</td>");
          else $("#coordianteur-table").append("<td></td>");
          if (table[i].Telephone != null)
            $("#coordianteur-table").append("<td>" + table[i].Telephone + "</td>");
          else $("#coordianteur-table").append("<td></td>");
  
      
          if (table[i].Email != null)
            $("#coordianteur-table").append(
              "<td>" + table[i].Email + "</td>"
            );
          else $("#coordianteur-table").append("<td></td>");
          if (table[i].Ville != null)
          $("#coordianteur-table").append(
            "<td>" + table[i].Ville + "</td>"
          );
        else $("#coordianteur-table").append("<td></td>");
        if (table[i].Cin != null)
        $("#coordianteur-table").append(
          "<td>" + table[i].Cin + "</td>"
        );
      else $("#coordianteur-table").append("<td></td>");
      if(table[i].Disponible==true)
        $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox" checked><span class="slider round"></span></label></td>');
      else $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox"><span class="slider round"></span></label></td>');
  
          $("#coordianteur-table").append(
            '<td><button onclick="deletecoordianteur(' +
              table[i].CoordinateurID +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
              table[i].CoordinateurID +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
        }
      });
  })
  $('#searchbyphone').click(function(){
   
      $('#coordianteur-table').html("")
      $.getJSON('http://webapp.saweblia.ma/coordinateursbyphone/'+$('#phone-search').val(), function (data){
        $('#coordianteur-table').html()
        var i;
        var table = data.Coordinateurs;
        for (i = 0; i < table.length; i++) {
          $("#coordianteur-table").append('<tr>');

          if (table[i].Nom != null)
            $("#coordianteur-table").append("<td>" + table[i].Nom + "</td>");
          else $("#coordianteur-table").append("<td></td>");

          if (table[i].Telephone != null)
            $("#coordianteur-table").append("<td>" + table[i].Telephone + "</td>");
          else $("#coordianteur-table").append("<td></td>");
      
          if (table[i].Email != null)
            $("#coordianteur-table").append(
              "<td>" + table[i].Email + "</td>"
            );
          else $("#coordianteur-table").append("<td></td>");

          if (table[i].Ville != null)
          $("#coordianteur-table").append("<td>" + table[i].Ville + "</td>");
          else $("#coordianteur-table").append("<td></td>");

          if (table[i].Cin != null) $("#coordianteur-table").append( "<td>" + table[i].Cin + "</td>" );
         else $("#coordianteur-table").append("<td></td>");

        if(table[i].Disponible==true)
          $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox" checked><span class="slider round"></span></label></td>');
        else $('#coordianteur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].CoordinateurID+')" type="checkbox"><span class="slider round"></span></label></td>');
  
        $("#coordianteur-table").append(
            '<td><button onclick="deletecoordianteur(' +
              table[i].CoordinateurID +
              ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
              table[i].CoordinateurID +
              ')"><span class="material-icons">create</span></button></td></tr>'
          );
        
      }
    })
  })
    $("#btn-edit").click(function () {
      var arr = {
        nom:$("#Nom").val(),
        telephone:$("#telephone").val(),
        email:$("#email").val(),
        ville:$("#ville").val(),
        cin:$("#cin").val(),
        disponibilite:$("#dispo").is(":checked")
      };
  
      $.ajax({
        url:
          "http://webapp.saweblia.ma/coordinateurs/" +
          window.location.search.substring(1).split("?"),
        type: "PUT",
        data: JSON.stringify(arr),
        contentType: "application/json; charset=utf-8",
        dataType: "json",
        async: false,
        success: function (msg) {
          
        },error: function() {
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est modifier avec succes</span></div>')
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
  
  function deletecoordianteur(idcoordianteur) {
    if (confirm("Voulez-vous vraiment supprimer cette coordianteur ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/coordinateurs/" + idcoordianteur,
        type: "DELETE",
        success: function (msg) {
          $('.clearfix').html("")
          $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est supprimé avec succes</span></div>')
          setTimeout(function() {
             window.location.href="../Personnel/personnels.php"
            }, 1000);
        },
        error: function() {
            $('.clearfix').html("")
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le coordinateur est supprimé avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Personnel/personnels.php"
              }, 1000);
        }
      });
  }
  function modiferClientForm(idcoordianteur) {
    window.location.href="../Personnel/editCoordinateur.php?"+idcoordianteur
  }
  function block(CoordinateurID) {
    var arr={}
   var checkbox=$('#check'+CoordinateurID).is(":checked")
 $.getJSON('http://webapp.saweblia.ma/coordinateurs/'+CoordinateurID, function (data){
  var arr = {
    nom:data.Nom,
    telephone:data.Telephone,
    email:data.Email,
    ville:data.Ville,
    cin:data.Cin,
    disponibilite:checkbox
  };

    $.ajax({
        url: 'http://webapp.saweblia.ma/coordinateurs/'+CoordinateurID,
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