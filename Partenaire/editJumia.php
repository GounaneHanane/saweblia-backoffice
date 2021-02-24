<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../js/jumia.js"></script>
<script>
$(document).ready(function() {
    $.ajax({
    url: "../jumiaData.php",
    type: "POST",
    headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
    data:{idJumia:window.location.search.substring(1).split("?")[0],action:"displayEditForm"},
    async: false,
    success: function(msg) {
        var data =JSON.parse(msg)
        $('#prestation').html(data[0][1])
        $('#libelle').val(data[0][1])
        $('#pprestation').val(data[0][3])
        $('#consultation').val(data[0][4])
        $('#image').attr('src',data[0][2])
    }
 })
})


    </script>
<div class="page-wrapper">

<div class="content container-fluid">

<div class="clearfix"></div>

  <div class="row">

    <div class="col-xl-8 offset-xl-2">

      <div class="page-header">

        <div class="row">
          <div class="col">

          <h3 class="page-title">Prestation : <i id="prestation"></i></h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">

                  <form id="editUtilisateur">
                    <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Libelle</label>
                          <input id="libelle" type="text" class="form-control" required>
                        </div>
                      </div>
                      <div class="col-md-4">
                       <div class="form-group">
                          <label class="bmd-label-floating">Prix de prestation :</label>
                          <input id="pprestation" type="text" class="form-control" required>
                        </div>
                      </div>
                      <div class="col-md-4">
                        
                        <div class="form-group">
                          <label class="bmd-label-floating">Prix de consultation</label>
                          <input id="consultation" type="text" class="form-control" required>
                        </div>
                      </div>
                    </div>
                     <div class="row">
                      <div class="col-md-4">
                        
                        
                      </div>
                      
                      </div>
                      <div class="">
                                    
                                    <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Media</label>
                                                        <input type="file" class="form-control" id="fournitureImage" name="filename">
                                                    </div>
                                                </div>
                                               
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                       
                                                       <img height="100" width="100" id="image"/>
                                                    </div>
                                                </div>
                                                </div>
                      
                  
                    <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
                     <button onclick="window.location.href=document.referrer" type="button" class="btn btn-danger pull-right">Annuler</button>
                 
                                     </form>
                </div>
              </div>
            </div>
            
