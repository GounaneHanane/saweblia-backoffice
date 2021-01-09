<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/artisan.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/artisans/'+window.location.search.substring(1).split("?"), function (data){
        $('#Nom').val(data.Nom)
        $('#telephone').val(data.Telephone)
        $('#ville').val(data.Ville)
        $('#SArtisan').val(data.SoldeArtisan)
        $('#SSaweblia').val(data.SoldeSaweblia)
        $('#langue').val(data.Langue)
        $('#cin').val(data.Cin)
        $('#email').val(data.Email)
        $('#dispo').attr('checked',data.Disponible)

    });
</script>
<div class="content">

<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Nouveau Artisan</h4>
                    </div>
                    <div class="card-body">
                        <form id="add-client-form">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Nom</label>
                                        <input id="Nom" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Téléphone</label>
                                        <input id="telephone" type="text" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Ville</label>
                                        <input id="ville" type="text" class="form-control" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Solde Artisan</label>
                                        <input id="SArtisan" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Solde Saweblia</label>
                                        <input id="SSaweblia" type="text" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Langue</label>
                                        <input id="langue" type="text" class="form-control" required>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">CIN</label>
                                        <input id="cin" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Type</label>
                                        <input id="cin" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Email</label>
                                        <input id="email" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Disponibilité</label>
                                        <br>
                                        <label class="switch">
                                            <input id="dispo" type="checkbox" checked><span class="slider round"></span>
                                        </label>
                                    </div>
                                </div>
                               
                            </div>






                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">Modifier</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>