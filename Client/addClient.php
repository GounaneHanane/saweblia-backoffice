<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/client.js"></script>
<div class="content">
        <div class="container-fluid">
        <div class="clearfix"></div>
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
                          <input placeholder="EX : 06XXXXXXXX" id="tel" pattern="[0-9]{10}" type="tel" class="form-control" required>
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
                              <option>Appli Mobile</option>
                              <option>Facebook, Whatsapp</option>
                              <option>Site web</option>
                              <option>Autre</option>
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
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Libelle</label>
                          <input id="Libelle" type="text" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                           <div class="form-group">
                        <label class="bmd-label-floating">Ville</label>
                          
                              <select id="Ville" class="form-control">
                                  <option>Casablanca</option>
                                  <option>Rabat</option>
                                  <option>Mohemmadia</option>
                                  <option>Autre</option>
                              </select>
                        </div>
                       
                      </div>
                      <div class="col-md-4">
                           <div class="form-group">
                            
                          <label class="bmd-label-floating">Quartier</label>
                          <input id="Quartier" type="text" class="form-control">
                        </div>
                        
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                       <div class="form-group">
                          <label class="bmd-label-floating">Rue</label>
                          <input id="Rue" type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                        <div class="form-group">
                        <label class="bmd-label-floating">N°Bureau ( Client Technopark )</label>
                          <input id="NBureau" type="text" class="form-control">
                        </div>

                      </div>
                    </div>
                    <div class="row">
                      <div class="col-md-6">
                        <div class="form-group">
                          <label class="bmd-label-floating">Localisation</label>
                          <input id="Localisation" type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-6">
                           <div class="form-group">
                          <label class="bmd-label-floating">Surface Bureau ( Client Technopark )</label>
                          <input id="NSurface" type="text" class="form-control">
                        </div>
                       
                      </div>
                    </div>
                   
                    
                    <button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                    <button onclick="window.location.href='./clients.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                   
                  </form>
                </div>
              </div>
            </div>
            