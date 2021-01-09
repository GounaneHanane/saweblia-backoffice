<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/coordinateur.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/coordinateurs/'+window.location.search.substring(1).split("?"), function (data){
        $('#Nom').val(data.Nom)
        $('#telephone').val(data.Telephone)
        $('#ville').val(data.Ville)
        $('#email').val(data.Email)
        $('#cin').val(data.Cin)
        $('#dispo').val(data.Disponibilite)

    });
</script>
<div class="content">

<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Modifier Coordinateur</h4>
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
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">CIN</label>
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
                        </form>
                    </div>
                </div>
            </div>