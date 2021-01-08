<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/adresse.js"></script>
<style>
 .row label{
     color:white;
 }
</style>
<div class="content">

        <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <button id="edit-client" class="btn btn-primary float-right">Modifier le client</button>
            </div>
        </div>
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                    <div class="container">
                        <div class="row" style="color:white">
                            <div class="col-md-4">
                                <label>Nom : </label>
                                <label id="nom"></label>
                            </div>
                            <div class="col-md-4">
                                <label>Email : </label>
                                <label id="email"> </label>
                            </div>
                            <div class="col-md-4">
                                <label>Téléphone : </label>
                                <label id="tel"> </label>
                            </div>
                        </div>
                        <div class="row" style="color:white">
                           
                            <div class="col-md-6">
                                <label>Canal d'aquisition : </label>
                                <label id="canal"></label>
                            </div>
                            <div class="col-md-6">
                                <label>Type : </label>
                                <label id="type"></label>
                            </div>
                        </div>
                        <div class="row" style="color:white">
                            
                            <div class="col-md-6">
                                <label>Commentaire : </label>
                                <label id="comment"></label>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="card-body">
                 <h3>Adresses</h3>
                 <button id="add-adresse" class="btn btn-primary float-right">Ajouter une adresse</button>
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Libelle
                        </th>
                        <th>
                          Quartier
                        </th>
                        
                        <th>
                          Rue
                        </th>
                        <th>
                          Ville
                        </th>
                        <th>
                          N°Bureau
                        </th>
                        <th>
                          N°Surface
                        </th>
                        <th>
                          Actions
                        </th>
                      </thead>
                      <tbody id="adresse-table">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>