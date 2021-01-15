<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/service.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/categories', function(data) {
        console.log(data.Categories)
        var i;
        for (i = 0; i < data.Categories.length; i++) {
            $('#typeCategorie').append("<option value='"+data.Categories[i].CategorieID+"'>" + data.Categories[i].Libelle + "</option>")
        }
    

    })
    $.getJSON('http://webapp.saweblia.ma/services/'+window.location.search.substring(1).split("?"), function (data){
        $('#libelle').val(data.Libelle)
          $('#service').val(data.Libelle)
        $('#description').val(data.Description)
        $('#typeCategorie option').filter(function() {
  //may want to use $.trim in here
            return $(this).val() == data.CategorieID;
          }).prop('selected', true);
        $('#image').attr("src",window.location.origin+"/"+data.ServiceMedia)
        $("#fournitureImage").attr("alt",data.ServiceMedia)
    });;
</script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Service : <i id="service"></i></h4>
                    </div>
                    <div class="card-body">
                        <form id="add-client-form">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Libelle</label>
                                        <input id="libelle" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Description</label>
                                        <input id="description" type="text" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Type categorie</label>
                                        <select id="typeCategorie" class="form-control">


                                        </select>
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
                                               
                                               <img width="100" height="100" id="image"/>
                                            </div>
                                        </div>
                                     






                            <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
                             <button onclick="window.location.href='./services.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>