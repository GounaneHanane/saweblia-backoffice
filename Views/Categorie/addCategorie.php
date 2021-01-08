<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/categorie.js"></script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Nouvelle Categorie</h4>
                </div>
                <div class="card-body">
                  <form id="add-categorie-form">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Libelle</label>
                          <input id="libelle" type="text" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Description</label>
                          <input id="description" type="text" class="form-control" required>
                        </div>
                      </div>
                      
                   
                   
                    
                    <button  id="btn-add" type="button" class="btn btn-primary pull-right">Ajouter</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>