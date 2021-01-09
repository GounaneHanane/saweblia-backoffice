<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/utilisateur.js"></script>

<div class="content">
<div class="clearfix"></div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
               
                  <h4 class="card-title ">Utilisateur</h4>
                </div>
                <div class="card-body">
                <button id="add-utilisateur" class="btn btn-primary float-right">Ajouter un utilisateur</button>
                  <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>
                          Nom
                        </th>
                        <th>
                          Login
                        </th>
                        <th>
                          Interne/Externe
                        </th>
                        
                        <th>
                          Active/Bloquer
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