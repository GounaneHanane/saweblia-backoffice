<?php

require("../Nav/header.php");

require("../Nav/menu.php");

?>

<script src="../js/client.js"></script>

<script>
  $.ajax({
    url: 'http://webapp.saweblia.ma/clients/' + window.location.search.substring(1).split("?"),
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function(data) {

      $('#nom').val(data.Nom)

      $('#tel').val(data.Telephone),



        $('#canal option').filter(function() {

          //may want to use $.trim in here

          return $(this).val() == data.CanalAcquisition;

        }).prop('selected', true);

      $('#email').val(data.Email),

        $('#type option').filter(function() {

          //may want to use $.trim in here

          return $(this).val() == data.Type;

        }).prop('selected', true);

      $('#comment').val(data.Comment)

    }
  });
</script>

<div class="page-wrapper">

        <div class="content container-fluid">

        <div class="clearfix"></div>

          <div class="row">

            <div class="col-xl-8 offset-xl-2">

              <div class="page-header">

                <div class="row">
                  <div class="col">

                  <h3 class="page-title">Modifier client</h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">
            <form id="add-client-form">

              <div class="row">

                <div class="col-md-2">

                  <div class="form-group">

                    <label class="bmd-label-floating">Nom</label>

                    <input id="nom" type="text" class="form-control">

                  </div>

                </div>

                <div class="col-md-2">

                  <div class="form-group">

                    <label class="bmd-label-floating">Téléphone</label>

                    <input placeholder="EX : 06XXXXXXXX" id="tel" pattern="[0-9]{10}" type="tel" class="form-control" required>



                  </div>

                </div>

                <div class="col-md-2">

                  <div class="form-group">

                    <label class="bmd-label-floating">Email</label>

                    <input id="email" type="email" class="form-control">

                  </div>

                </div>
                <div class="col-md-2">

                  <div class="form-group">

                    <label class="bmd-label-floating">Type</label>

                    <select id="type" class="form-control" required>

                      <option value="particulier">Particulier</option>

                      <option value="societe">Société</option>

                    </select>

                  </div>

                </div>
                <div class="col-md-2">

                  <div class="form-group">

                    <label class="bmd-label-floating">Canal d'aquisition</label>

                    <select id="canal" class="form-control">

                      <option value="Appli Mobile">Appli Mobile</option>

                      <option value="Facebook, Whatsapp">Facebook, Whatsapp</option>

                      <option value="Site web">Site web</option>

                      <option value="Autre">Autre</option>

                    </select>

                  </div>

                </div>
              </div>

              <div class="row">





              </div>

              <div class="row">

                <div class="col-md-4">

                  <div class="form-group">

                    <label class="bmd-label-floating">Commentaire</label>

                    <textarea id="comment" class="form-control" rows="5"></textarea>

                  </div>

                </div>

              </div>





              <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>

              <button onclick="window.location.href=document.referrer" type="button" class="btn btn-danger pull-right">Annuler</button>

              <div class="clearfix"></div>

            </form>

          </div>

        </div>

      </div>