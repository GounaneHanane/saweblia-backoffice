<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fournisseur.js"></script>

<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Nouveau fournisseur</h4>
                    </div>
                    <div class="card-body">
                        <form id="addFournisseur">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating"> Fournisseur</label>
                                        <input id="nomFournisseur" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating"> Contact</label>
                                        <input id="nomContact" type="text" class="form-control" >
                                    </div>
                                </div>
                                
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Telephone</label>
                                        <input id="telephone" type="tel" pattern="[0-9]{10}" placeholder="EX : 06XXXXXXXX" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Adresse</label>
                                        <input id="adresse" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Localisation</label>
                                        <input id="localisation" type="text" class="form-control" >
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Email</label>
                                        <input id="email" type="email" class="form-control" >
                                    </div>
                                </div>
                            </div>
                        



                            <button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                              <button onclick="window.location.href='./fournisseurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>