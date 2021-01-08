<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/client.js"></script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title ">Clients</h4>
                </div>
                <div class="card-body">
                <button id="add-client" class="btn btn-primary float-right">Ajouter un client</button>
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Nom
                        </th>
                        <th>
                          Téléphone
                        </th>
                        
                        <th>
                          Email
                        </th>
                        <th>
                          Canal d'aquisition
                        </th>
                        <th>
                          Activer/Bloquer
                        </th>
                        <th>
                          Actions
                        </th>
                      </thead>
                      <tbody id="client-table">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>