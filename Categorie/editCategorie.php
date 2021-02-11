<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../js/categorie.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/categories/'+window.location.search.substring(1).split("?"), function (data){
        $('#categorie').append(data.Libelle)
        $('#libelle').val(data.Libelle)
        $('#description').val(data.Description)
        $('#image').attr("src",window.location.origin+"/saweblia-backoffice/"+data.CategorieMedia)
        $("#fournitureImage").attr("alt",data.CategorieMedia)
    });
</script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title"> Categorie : <i id="categorie"></i></h4>
                </div>
                <div class="card-body">
                  <form id="edit-categorie-form">
                    <div class="row">
                      <div class="col-md-3">
                        <div class="form-group">
                          <label class="bmd-label-floating">Libelle</label>
                          <input id="libelle" type="text" class="form-control" required>
                        </div>
                      </div>
                      <div class="col-md-3">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Media</label>
                                                <input onchange="document.getElementById('image').src = window.URL.createObjectURL(this.files[0])" type="file" type="file" class="form-control" id="fournitureImage" name="filename">
                                            </div>
                                        </div>
                                      
                                        <div class="col-md-6">
                                            <div class="form-group">
                                               
                                               <img id="image"  src='' width='100' height='100'/>
                                            </div>
                                        </div>
                      </div>
                      <div class="row">
                      <div class="col-md-4">
                        <div class="form-group">
                          <label class="bmd-label-floating">Description</label>
                          <textarea id="description" type="text" class="form-control"></textarea>
                        </div>
                      </div>
                      </div>

                 
                   
                    
                    <button id="btn-edit" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                     <button onclick="window.location.href='../Service/categorie.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>
