if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
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
  $.getJSON("http://webapp.saweblia.ma/prestations", function (data) {
    var i;
    for (i = 0; i < data.Prestations.length; i++) {
      $("#select-prestation").append(
        "<option value='" +
          data.Prestations[i].PrestationID +
          "'>" +
          data.Prestations[i].Libelle +
          "</option>"
      );
    }
  });
  $("#select-prestation ").on("change", function () {
    $.getJSON(
      "http://webapp.saweblia.ma/prestations/" + $(this).val(),
      function (data) {
        $("#PUVente").val(data.PrixVente);
        $("#quantité").val(data.PrixAchat);
        $("#coifficient").val(data.PrixAchat);
        $("#descirption").val(data.PrixAchat);
        $("#PUAchat").val(data.PrixAchat);
      }
    );
  });
  ////
  //// add client checkbox in add fourniture
  ////
  $("#add-client").change(function () {
    if ($(this).is(":checked")) {
      $(".clientArea").html("");
      $("#client-info-area").html("");
      $("#client-info-area").append(
        ' <h3 class="card-title" style="margin-bottom: 15px;">Nouveau Client</h3><div class="row"><div class="col-md-6"><div class="form-group"><label class="bmd-label-floating">Nom : </label><input class="form-control" id="client-nom-add" /> </div></div><div class="col-md-6"><div class="form-group"><label class="bmd-label-floating">Telephone : </label><input class="form-control" id="client-telephone-add" />       </div></div></div><div class="row"><div class="col-md-6"><div class="form-group"><label class="bmd-label-floating">Commentaire : </label><textarea class="form-control" id="client-commentaire-add" ></textarea></div> </div>  </div>'
      );
      $("#client-info-area").append(
        ' <h3>Nouvelle Adresse</h3> <div class="row"><div class="col-md-2"> <div class="form-group"><label class="bmd-label-floating">Libelle : </label>  <input class="form-control" id="client-libelle-add" />      </div> </div><div class="col-md-2"><div class="form-group"><label class="bmd-label-floating">Quartier : </label><input class="form-control" id="client-quartier-add" /> </div> </div><div class="col-md-2"><div class="form-group"> <label class="bmd-label-floating">Rue : </label>  <input class="form-control" id="client-rue-add" /> </div> </div><div class="col-md-2"> <div class="form-group"><label class="bmd-label-floating">Ville : </label><select class="form-control" id="client-ville-add" ><option>Casablanca</option><option>Mohemmadia</option><option>Rabat</option><option>Autre</option></select> </div> </div><div class="col-md-4"><label class="bmd-label-floating">Localisation : </label>  <input class="form-control" id="client-localisation-add" /></div></div></div>'
      );
    } else {
      $(".clientArea").html("");
      $("#client-info-area").html("");
      $.getJSON("http://webapp.saweblia.ma/clients", function (data) {
        var i;
        for (i = 0; i < data.Clients.length; i++) {
          $("#clients").append(
            "<option value='" +
              data.Clients[i].ClientID +
              "'>" +
              data.Clients[i].Nom +
              "</option>"
          );
        }
      });
      $(".clientArea").append(
        ' <select id="clients"  class="form-control js-example-basic-single" ></select>'
      );
      $(".js-example-basic-single").select2();
      $("#client-info-area").append(
        '       <h3 class="card-title" style="margin-bottom: 15px;">Client : <i id="client-name"> </i></h3>  <div class="row">  <div class="col-md-6">      <div class="form-group">         <label class="bmd-label-floating">Nom : </label>         <label class="bmd-label-floating">Cliznt 1 </label>   </div>      </div>      <div class="col-md-6">          <div class="form-group">              <label class="bmd-label-floating">Telephone : </label>              <label class="bmd-label-floating">0612457896</label>           </div>       </div    <div class="col-md-6">  <div class="form-group">    <label class="bmd-label-floating">Commentaire : </label>    <label class="bmd-label-floating">Commentaire1</label></div> </div </div><div class="row">  <div class="col-md-6"><div class="form-group"><label class="bmd-label-floating">Adresse</label> <select id="typeCategorie" class="form-control"><option>adresse 1</option><option>adresse 2</option> <option>adresse 3</option>  </select></div></div> <div class="col-md-6"><div class="form-group"><label class="bmd-label-floating">Libelle : </label><label class="bmd-label-floating">Libelle1</label></div></div></div> <div class="row"><div class="col-md-6"> <div class="form-group"><label class="bmd-label-floating">Localisation : </label><label class="bmd-label-floating">https://g.page/villagedusoir?share</label><a><button type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button></a></div></div> </div>'
      );
    }
  });
  $("#minimizeInfo").click(function () {
    if ($(this).html() == "minimize") {
      $(this).html("add");
    } else {
      $(this).html("minimize");
    }
  });
});
