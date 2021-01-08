<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/client.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/clients/'+localStorage.getItem('idClientEdited'), function (data){
        $('#nom').val(data.Nom)
        $('#tel').val(data.Telephone),
        $('#canal').val(data.CanalAcquisition),
        $('#email').val(data.Email),
        $('#type').val(data.Type),
        $('#comment').val(data.Commentaire)
    });
</script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Nouveau client</h4>
                </div>
                <div class="card-body">
                  <form id="add-client-form">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nom</label>
                          <input id="nom" type="text" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Téléphone</label>
                          <input id="tel" type="text" class="form-control" required>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Email</label>
                          <input id="email" type="email" class="form-control">
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Type</label>
                          <select id="type" class="form-control">
                              <option value="particulier">Particulier</option>
                              <option value="societe">Société</option>
                            </select>
                        </div>
                      </div>
                      <div class="col-md-6">
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
                      <div class="col-md-12">
                        <div class="form-group">
                          <label class="bmd-label-floating">Commentaire</label>
                          <textarea id="comment"  class="form-control" rows="5"></textarea>
                        </div>
                      </div>
                    </div>
                   
                    
                    <button id="btn-edit" type="button" class="btn btn-primary pull-right">Modifier</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>