
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
      if (table[i].CIN != null)
      $("#coordianteur-table").append(
        "<td>" + table[i].CIN + "</td>"
      );
    else $("#coordianteur-table").append("<td></td>");
    if(table[i].Disponibilite==true)
    $('#coordinateur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].ClientID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
else $('#coordinateur-table').append('<td><label class="switch"><input id="check'+table[i].CoordinateurID+'" onchange="block('+table[i].ClientID+')" type="checkbox"><span class="slider round"></span></label></td>')

        $("#coordianteur-table").append(
          '<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deletecoordianteur(' +
            table[i].coordianteurID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
            table[i].coordianteurID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
    $("#add-coordinateur").click(function () {
      window.location.href="../Personnel/addCoordinateur.php";
    });
    $("#btn-add").click(function () {
      var arr = {
        Nom:$("#Nom").val(),
        Telephone:$("#telephone").val(),
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
          alert(msg);
        },
      });
    });
    $("#btn-edit").click(function () {
      var arr = {
        coordianteurID: localStorage.getItem("idcoordianteurEdited"),
        Nom: $("#Nom").val(),
        Telephone: $("#Telephone").val(),
      };
  
      console.log(arr["coordianteurID"])
      $.ajax({
        url:
          "http://webapp.saweblia.ma/coordianteurs/" +
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
      console.log($(this).attr('name'))
      $('.tab').attr('hidden',true)
      $('#'+$(this).attr('name')).attr('hidden',false)
    })
  });
  
  function deletecoordianteur(idcoordianteur) {
    if (confirm("Voulez-vous vraiment supprimer cette coordianteur ?"))
      $.ajax({
        url: "http://webapp.saweblia.ma/coordianteurs/" + idcoordianteur,
        type: "DELETE",
        success: function (msg) {
          $("#message").append(
            '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>'
          );
        },
      });
  }
  function modiferClientForm(idcoordianteur) {
    window.location.href="../coordianteur/editcoordianteur.php?"+idcoordianteur
  }
  