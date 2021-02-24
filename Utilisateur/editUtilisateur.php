<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/utilisateur.js"></script>
<script>
  $.ajax({
    url: 'http://webapp.saweblia.ma/utilisateurs/' + window.location.search.substring(1).split("?"),
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    type: "GET",
    success: function(data) {
      $('#nom').val(data.Nom)
      $('#user-name').append(data.Nom)
      $('#interne').attr("checked", data.Interne)
      $('#login').val(data.Login)

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

                  <h3 class="page-title">Utilisateur : <i id="user-name"></i></h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">
            <form id="editUtilisateur">
              <div class="row">
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="bmd-label-floating">Nom</label>
                    <input id="nom" type="text" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-3">
                  <div class="form-group">
                    <label class="bmd-label-floating">Login</label>
                    <input id="login" type="text" class="form-control" required>
                  </div>
                </div>
                <div class="col-md-3">

                  <div class="form-group">
                    <label class="bmd-label-floating">Mot de passe</label>
                    <input id="motdepass" type="text" class="form-control">
                  </div>
                </div>
                <div class="col-md-3">

                  <div class="form-group">
                    <label class="bmd-label-floating">Interne</label><br>
                    <label class="switch">
                      <input id="interne" type="checkbox" checked><span class="slider round"></span>
                    </label>
                  </div>
                </div>

              </div>




              <button id="btn-edit" type="submit" class="btn btn-success pull-right">Enregistrer</button>
              <button onclick="window.location.href='./utilisateurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>

            </form>
          </div>
        </div>
      </div>