<?php 

    require("../Nav/header.php");

    require("../Nav/menu.php"); 

    ?>

<script src="../js/adresse.js"></script>

<div class="content">

        <div class="container-fluid">

          <div class="row">

            <div class="col-md-12">

              <div class="card">

                <div class="card-header card-header-primary">

                  <h4 class="card-title">Nouvelle adresse</h4>

                </div>

                <div class="card-body">

                  <form id="add-client-form">

                    <div class="row">

                      <div class="col-md-2">

                        <div class="form-group">

                          <label class="bmd-label-floating">Libelle</label>

                          <input id="Libelle" type="text" class="form-control" >

                        </div>

                      </div>

                      <div class="col-md-2">

                      

                        <div class="form-group">

                        <label class="bmd-label-floating">Ville</label>

                            <select id="Ville" class="form-control" required>

                      <option>Casablanca</option>

                      <option>Rabat</option>

                      <option>Mohemmadia</option>

                      <option>Autre</option>

                      </select>

                        </div>

                      </div>

                      <div class="col-md-2">

                      <div class="form-group">

                          <label class="bmd-label-floating">Quartier</label>

                          <input id="Quartier" type="text" class="form-control" >

                        </div>

                       

                      </div>
                      <div class="col-md-2">

                        <div class="form-group">

                            <label class="bmd-label-floating">Rue</label>

                            <input id="Rue" type="text" class="form-control">

                          </div>

                        </div>

<div class="col-md-4">

                       

                        <div class="form-group">

                          <label class="bmd-label-floating">Localisation</label>

                          <input id="Localisation" type="text" class="form-control">

                        </div>

                      </div>
                    </div>

                    <div class="row">

                    
                      <div class="col-md-3">

                        <div class="form-group">

                        <label class="bmd-label-floating">N Bureau ( Client Technopark )</label>

                          <input id="NBureau" type="text" class="form-control">

                        </div>
                        </div>


                      <div class="col-md-3">

                         <div class="form-group">

                          <label class="bmd-label-floating">Surface Bureau ( Client Technopark )</label>

                          <input id="NSurface" type="text" class="form-control">

                        </div>

                 

                      </div>

                    </div>

                    

                   

                    

                    <button id="btn-add" type="button" class="btn btn-success pull-right">Enregistrer</button>

                     <button onclick="window.location.href=document.referrer" type="button" class="btn btn-danger pull-right">Annuler</button>

                    <div class="clearfix"></div>

                  </form>

                </div>

              </div>

            </div>