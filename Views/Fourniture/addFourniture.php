<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/fourniture.js"></script>
< <script>
    /* $.getJSON('http://webapp.saweblia.ma/fournisseurs', function(data) {
    console.log(data.fournisseurs.Fournisseurs[1])
    var i;
    for (i = 0; i < data.fournisseurs.Fournisseurs.length; i++) { $('#fournisseurs').append("<option value="++">" + data.fournisseurs.Fournisseurs[i].NomFournisseur + "</option>")
        }

        }); */
        /* $.getJSON('http://webapp.saweblia.ma/fournitures/'+window.location.search.substring(1).split("?"), function (data){
        $.getJSON('http://webapp.saweblia.ma/fournisseurs/'+data.FournisseurID, function(datat) {
        $('#fournisseurs').val(datat.Telephone)

        });

        console.log(data)
        $('#libelle').val(data.Libelle)
        $('#description').val(data.Description)
        $('#prixAchat').val(data.PrixAchat)
        $('#prixVente').val(data.Vente)



        });; */
        </script>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header card-header-primary">
                                <h4 class="card-title">Nouvelle fourniture</h4>
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
                                                <label class="bmd-label-floating">Fournisseur</label>
                                                <input id="fournisseurs" type="text" class="form-control" required>
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


                                    </div>






                                    <button id="btn-add" type="button" class="btn btn-primary pull-right">Ajouter</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>