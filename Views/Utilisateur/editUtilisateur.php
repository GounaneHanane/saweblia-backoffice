<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/utilisateur.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/utilisateurs/'+localStorage.getItem('idUserEdited'), function (data){
    $('#nom').val(data.Nom)
    $('#interne').attr("checked",data.Interne)
    $('#login').val(data.Login)
               
    });
    </script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Modifier l'utilisateur</h4>
                </div>
                <div class="card-body">
                  <form id="add-client-form">
                    <div class="row">
                      <div class="col-md-5">
                        <div class="form-group">
                          <label class="bmd-label-floating">Nom</label>
                          <input id="nom" type="text" class="form-control" >
                        </div>
                      </div>
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Interne</label><br>
                          <label class="switch">
                          <input id="interne" type="checkbox" checked><span class="slider round"></span>
                          </label>
                        </div>
                      </div>
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Login</label>
                          <input id="login" type="text" class="form-control">
                        </div>
                      </div>
                    </div>
                    
                      
                  
                    <button id="btn-edit" type="button" class="btn btn-primary pull-right">Modifier</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
            