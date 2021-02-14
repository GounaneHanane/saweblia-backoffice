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
            $('#typeCategorie').append("<option>" + data.Categories[i].Libelle + "</option>")
        }

    });
</script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Nouveau Service</h4>
                    </div>
                    <div class="card-body">
                        <form id="add-client-form">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Libelle</label>
                                        <input id="libelle" type="text" class="form-control" required>
                                    </div>
                                </div>
                               
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Categorie</label>
                                        <select id="typeCategorie" class="form-control">


                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Media</label>
                                        <input onchange="document.getElementById('image').src = window.URL.createObjectURL(this.files[0])" type="file" class="form-control" id="serviceImage" name="filename">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                            <div class="form-group">
                                               
                                               <img  id="image"  src='' width='100' height='100'/>
                                            </div>
                                        </div>
                            </div>
                            <div class="row">
                            <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Description</label>
                                        <input id="description" type="text" class="form-control">
                                    </div>
                                </div>
                            </div>






                            <button id="btn-add" type="button" class="btn btn-success pull-right">Enregistrer</button>
                            <button onclick="window.location.href='./services.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>