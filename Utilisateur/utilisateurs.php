<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../js/utilisateur.js"></script>


<div class="page-wrapper">

<div class="content container-fluid">

<div class="clearfix"></div>
<div class="page-header">
  <div class="row">

    <div class="col-md-10">

    
          <h3 style="cursor:pointer" class="page-title">Utilisateur</h3>
</div>
                  <div class="col-md-2 text-right">

                            <button id="add-utilisateur" class="btn btn-primary add-button">Ajouter</button>

</div>



</div>
</div>

<div class="row">






<div class="col-md-12">
<div class="card">
<div class="card-body">
<div class="table-responsive">
                    <table class="table" id="client-table">
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
                          
                        </th>
                      </thead>
                      <tbody id="client-table">
                        
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </div>