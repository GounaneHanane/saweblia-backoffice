<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/service.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/categories', function(data) {
        console.log(data.Categories)
        var i;
        for (i = 0; i < data.Categories.length; i++) {
            $('#typeCategorie').append("<option>" + data.Categories[i].Libelle + "</option>")
        }
    

    })
    $.getJSON('http://webapp.saweblia.ma/services/'+localStorage.getItem('idserviceEdited'), function (data){
        console.log("http://webapp.saweblia.ma/services/"+localStorage.getItem('idserviceEdited'))
        $('#libelle').val(data.Libelle)
        $('#description').val(data.Description)
      
    });;
</script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Modifier Service</h4>
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






                            <button id="btn-add" type="button" class="btn btn-primary pull-right">Ajouter</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>