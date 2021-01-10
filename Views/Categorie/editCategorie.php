<?php 
    require("../Nav/header.php");
    require("../Nav/menu.php"); 
    ?>
<script src="../../js/categorie.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/categories/'+window.location.search.substring(1).split("?"), function (data){
        
        $('#libelle').val(data.Libelle)
        $('#description').val(data.Description)
        $('#image').attr("src","http://localhost/sawebliabackoffice/"+data.CategorieMedia)
        $("#fournitureImage").attr("alt",data.CategorieMedia)
    });
</script>
<div class="content">
        <div class="container-fluid">
          <div class="row">
            <div class="col-md-12">
              <div class="card">
                <div class="card-header card-header-primary">
                  <h4 class="card-title">Modifier Categorie</h4>
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
                      </div>
                      <div class="">
                            <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Media</label>
                                                <input type="file" class="form-control" id="fournitureImage" name="filename">
                                            </div>
                                        </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                               
                                               <img id="image"/>
                                            </div>
                                        </div>
                                        </div>



                 
                   
                    
                    <button id="btn-edit" type="button" class="btn btn-primary pull-right">Modifier</button>
                    <div class="clearfix"></div>
                  </form>
                </div>
              </div>
            </div>