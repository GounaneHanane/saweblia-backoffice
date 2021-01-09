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
                  <h4 class="card-title col-md-11">Clients</h4>
                  <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                </div>
                <div class="card-body">
                <div class="row">
                        <div class="col-md-8 row">
                          <div class="col-md-6">
                            <div class="input-group no-border">
                              <input id="name-search" type="text" value="" class="form-control" placeholder="Chercher avec le nom">
                              <button id="searchbyname" type="button" class="btn btn-white btn-round btn-just-icon">
                                <i class="material-icons">search</i>
                                <div class="ripple-container"></div>
                              </button>
                            </div>
                          </div>
                          <div class="col-md-6">
                            <div class="input-group no-border">
                              <input id="phone-search" type="text" value="" class="form-control" placeholder="Chercher avec le numéro de téléphone">
                              <button id="searchbyphone" type="button" class="btn btn-white btn-round btn-just-icon">
                                <i class="material-icons">search</i>
                                <div class="ripple-container"></div>
                              </button>
                            </div>
                          </div>
                        </div>
                          <div class="col-md-4">
                            <button id="add-client" class="btn btn-primary float-right">Ajouter un client</button>
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