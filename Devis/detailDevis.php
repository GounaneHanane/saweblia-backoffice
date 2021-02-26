<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/detailsDevis.js"></script>

<div class="content">
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Devis : M. AIT ADDI Mohammed <i id="user-name"></i></h4>
                    </div>

                    <div class="card-body">
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Informations Client </h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-warning pull-right">Modifier le client</button>
                                        </div>

                                    </div>
                                    <h3 class="card-title" style="margin-bottom: 15px;"></h3>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Client : </label>
                                                <label class="bmd-label-floating" id="clientNom"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Telephone : </label>
                                                <label class="bmd-label-floating" id="clientTelephone"></label>

                                            </div>
                                        </div>



                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Adresse : </label>
                                                <label class="bmd-label-floating" id="libelle"> </label>

                                            </div>
                                        </div>




                                        <div class="col-md-8">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Rue / Adresse : </label>
                                                <label class="bmd-label-floating" id="clientAdresse"></label>

                                            </div>
                                        </div>




                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Infos importantes : </label>
                                                <label class="bmd-label-floating" id="clientComment"></label>

                                            </div>
                                        </div>




                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Localisation : </label>
                                                <label class="bmd-label-floating"id="localisation"></label>
                                                <a>
                                                    <button type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button></a>

                                            </div>
                                        </div>

                                    </div>
                                </div>










                            </form>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body" id="client-info-area">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Informations de la commande </h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-warning pull-right">Modifier la commande</button>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Status : </label>
                                                <label class="bmd-label-floating" id="status"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Coordinateur : </label>
                                                <label class="bmd-label-floating">Coordinateur 1</label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Date de Devis :</label>
                                                <label class="bmd-label-floating" id="dateDevis"></label>

                                            </div>
                                        </div>



                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Date d'intervention : </label>
                                                <label class="bmd-label-floating" id="dateIntervention"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Date debut d'intervention : </label>
                                                <label class="bmd-label-floating" id="ddi"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Date fin d'intervention : </label>
                                                <label class="bmd-label-floating" id="ddf"></label>

                                            </div>
                                        </div>



                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Mode de Payement : </label>
                                                <label class="bmd-label-floating" id="modePaiment"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Date de payement : </label>
                                                <label class="bmd-label-floating" id="datePaiment"></label>

                                            </div>
                                        </div>




                                    </div>
                                    <div class="row">
                                        <div class="col-md-12">
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-left">Debuter l'intervention</button>
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-left">Terminer l'intervention</button>
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">Encaisser le paiement</button>
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body" id="client-info-area">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Informations de la prestation</h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-warning pull-right">nouvelle Prestation</button>
                                        </div>

                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class=" text-primary">
                                                    <th>
                                                        Prestation
                                                    </th>


                                                    <th>
                                                        Prix Unitaire
                                                    </th>

                                                    <th>
                                                        Quantité
                                                    </th>
                                                    <th>
                                                        Coeifficient
                                                    </th>
                                                    <th>
                                                        Total
                                                    </th>
                                                    <th>
                                                        Artisant
                                                    </th>
                                                    <th>
                                                        Actions
                                                    </th>
                                                </thead>
                                                <tbody id="fournisseur-devis-table">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>





                                </div>
                            </form>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body" id="client-info-area">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Informations de la fourniture </h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-warning pull-right">Nouvelle fourniture</button>
                                        </div>

                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table">
                                                <thead class=" text-primary">
                                                    <th>
                                                        Fourniture
                                                    </th>


                                                    <th>
                                                        Libelle
                                                    </th>

                                                    <th>
                                                        Description
                                                    </th>
                                                    <th>
                                                        Prix Unitaire
                                                    </th>
                                                    <th>
                                                        Quantité
                                                    </th>
                                                    <th>
                                                        Total
                                                    </th>
                                                    <th>
                                                        Actions
                                                    </th>
                                                </thead>
                                                <tbody id="fournisseur-devis-table">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>



                                </div>
                            </form>
                        </div>

                        <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
                        <button onclick="window.location.href='./utilisateurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                    </div>
                </div>