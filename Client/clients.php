<?php

require("../Nav/header.php");

require("../Nav/menu.php");

?>

<script src="../js/client.js"></script>

<div class="content">

        <div class="container-fluid">

        <div class="clearfix"></div>

          <div class="row">

            <div class="col-md-12">

              <div class="card">

                <div class="card-header card-header-primary row">

                  <h4 style="cursor:pointer" class="card-title col-md-8">Clients</h4>

                  <div class="col-md-4">

                            <button id="add-client" class="btn btn-primary float-right">Ajouter</button>

                       </div>

                  

                </div>

                <div class="card-body">

             

                      
              

                  <div class="table-responsive">

                    <table class="table" id="client-table">

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

                         

                        </th>

                      </thead>

                      <tbody id="client-body">

                        

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
