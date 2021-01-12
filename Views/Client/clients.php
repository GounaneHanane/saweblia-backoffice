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
                <div class="card-header card-header-primary row">
                  <h4 onclick="window.location.reload()" class="card-title col-md-8">Clients</h4>
                  <div class="col-md-4">
                            <button id="add-client" class="btn btn-primary float-right">Ajouter</button>
                       </div>
                  
                </div>
                <div class="card-body">
                <div class="row">
                        <div class="col-md-8 row">
                          <div class="col-md-6">
                            <div class="input-group no-border">
                              <input style="margin-right:13px" id="name-search" type="text" value="" class="form-control" placeholder="Nom">
                              <button id="searchbyname" type="button" class="btn btn-dark">
                                Chercher
                              </button>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-group no-border">
                              <input style="margin-right:13px"  id="phone-search" type="text" value="" class="form-control" placeholder="Téléphone">
                              <button id="searchbyphone" type="button" class="btn btn-dark">
                            Chercher
                              </button>
                            </div>
                          </div>
                        </div>
                         
                       </div>
              
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
                    <div class="row d-flex justify-content-center">
                    <nav aria-label="Page navigation example">
                        <ul class="pagination">
                          
                          </ul>
                        </nav>
                        </div>
                  </div>
                </div>
              </div>
            </div>