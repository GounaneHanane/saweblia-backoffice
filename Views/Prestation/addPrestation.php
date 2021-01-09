<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/prestation.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/services', function(data) {
        console.log(data.service)
         var i;
        for (i = 0; i < data.service.Services.length; i++) {
            $('#services').append("<option>" + data.service.Services[i].Libelle + "</option>")
        } 

    });
</script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Nouvelle Prestation</h4>
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
                                        <label class="bmd-label-floating">Services</label>
                                        <select id="services" class="form-control">


                                        </select>
                                    </div>
                                </div>
                            </div>
                                <div class="row">
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Prix Achat</label>
                                            <input id="prixAchat" type="text" class="form-control">
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Prix Vente</label>
                                            <input id="prixVente" type="text" class="form-control" required>
                                        </div>
                                    </div>
                                    <div class="col-md-4">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Coefficient de remise </label>
                                            <input id="coefficientRemise" type="text" class="form-control" required>
                                        </div>
                                    </div>

                                </div>
                            






                            <button id="btn-add" type="button" class="btn btn-primary pull-right">Ajouter</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>