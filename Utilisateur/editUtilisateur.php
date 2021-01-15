<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../js/utilisateur.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/utilisateurs/'+window.location.search.substring(1).split("?"), function (data){
    $('#nom').val(data.Nom)
    $('#user-name').append(data.Nom)
    $('#interne').attr("checked",data.Interne)
    $('#login').val(data.Login)
               
    });
    </script>
<div class="content">
<div class="clearfix"></div>
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Utilisateur : <i id="user-name"></i></h4>
                </div>
                <div class="card-body">
                  <form id="add-client-form">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nom</label>
                          <input id="nom" type="text" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-4">
                       <div class="form-group">
                          <label class="bmd-label-floating">Login</label>
                          <input id="login" type="text" class="form-control">
                        </div>
                      </div>
                      <div class="col-md-4">
                        
                        <div class="form-group">
                          <label class="bmd-label-floating">Mot de passe</label>
                          <input id="motdepass" type="text" class="form-control" >
                        </div>
                      </div>
                    </div>
                     <div class="row">
                      <div class="col-md-4">
                        
                         <div class="form-group">
                          <label class="bmd-label-floating">Interne</label><br>
                          <label class="switch">
                          <input id="interne" type="checkbox" checked><span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                      
                      </div>
                    
                      
                  
                    <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
                     <button onclick="window.location.href='./utilisateurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                 
                                     </form>
                </div>
              </div>
            </div>
            