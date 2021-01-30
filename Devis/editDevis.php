<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>
<script>
    $.getJSON('http://webapp.saweblia.ma/utilisateurs/' + window.location.search.substring(1).split("?"), function(data) {
        $('#nom').val(data.Nom)
        $('#user-name').append(data.Nom)
        $('#interne').attr("checked", data.Interne)
        $('#login').val(data.Login)

    });
</script>
<div class="content">
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Utilisateur : <i id="user-name"></i></h4>
                    </div>
                    <div class="card-body">
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body">
                                    <h3 class="card-title" style="margin-bottom: 15px;">Information Devis</h3>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Date de commande</label>
                                                <input id="nom" type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Date d'intervention</label>
                                                <input id="login" type="date" class="form-control">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Date de debut d'intervention</label>
                                                <input id="nom" type="date" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Date de fin d'itervention</label>
                                                <input id="login" type="date" class="form-control">
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Mode de payement</label>
                                                <select id="typeCategorie" class="form-control">
                                                    <option>mode 1</option>
                                                    <option>mode 2</option>
                                                    <option>mode 3</option>


                                                </select>
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Date de payement</label>
                                                <input id="dateDePayement" type="date" class="form-control">
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Statut</label>
                                                <select id="typeCategorie" class="form-control">
                                                    <option>Status 1</option>
                                                    <option>status 2</option>
                                                    <option>statut 3</option>


                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Client</label>
                                                <input id="client" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Coordinateur</label>
                                                <input id="coordinateur" type="text" class="form-control">
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body">
                                    <h3 class="card-title" style="margin-bottom: 15px;">Adresse </h3>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Nom : </label>
                                                <label class="bmd-label-floating">Cliznt 1 </label>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Telephone : </label>
                                                <label class="bmd-label-floating">0612457896</label>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Commentaire : </label>
                                                <label class="bmd-label-floating">Commentaire1</label>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">

                                                <label class="bmd-label-floating">Adresse</label>
                                                <select id="typeCategorie" class="form-control">
                                                    <option>adresse 1</option>
                                                    <option>adresse 2</option>
                                                    <option>adresse 3</option>


                                                </select>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Libelle : </label>
                                                <label class="bmd-label-floating">Libelle1</label>
                                            </div>
                                        </div>

                                    </div>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Localisation : </label>
                                                <label class="bmd-label-floating">https://g.page/villagedusoir?share</label>
                                                <a>
                                                    <button type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button></a>

                                            </div>
                                        </div>

                                    </div>


                                </div>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Prestation / Artisant </h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">Enregistrer</button>
                                        </div>

                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Prestation </label>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <select id="typeCategorie" class="form-control">
                                                            <option>adresse 1</option>
                                                            <option>adresse 2</option>
                                                            <option>adresse 3</option>


                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="PUVente" type="text" class="form-control" placeholder="P.U.Vente">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="quantité" type="text" class="form-control" placeholder="Quantité">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="coifficient" type="text" class="form-control" placeholder="Coeifficient">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <input id="total" type="text" class="form-control" placeholder="Total">
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Description</label>
                                                        <textarea id="descirption" class="form-control"></textarea>

                                                    </div>
                                                </div>


                                            </div>


                                            <div class="row">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Artisant </label>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <select id="typeCategorie" class="form-control">
                                                            <option>Artisant 1</option>
                                                            <option>Artisant 2</option>
                                                            <option>Artisant 3</option>


                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="PUVente" type="text" class="form-control" placeholder="P.U.Achat">
                                                    </div>
                                                </div>


                                            </div>
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">valider</button>

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
                                                        Coefficient
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
                                                <tbody id="edit-devis-table">

                                                </tbody>
                                            </table>
                                        </div>
                                    </div>
                                </div>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body">
                                    <div class="row">

                                        <div class="col-md-8">
                                            <h3 class="card-title" style="margin-bottom: 15px;">Prestation / Artisant </h3>
                                        </div>

                                        <div class="col-md-4">
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">Enregistrer</button>
                                        </div>

                                    </div>
                                    <div class="card">
                                        <div class="card-body">
                                            <div class="row">
                                                <div class="col-md-1">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Fourniture </label>

                                                    </div>
                                                </div>
                                                <div class="col-md-3">
                                                    <div class="form-group">
                                                        <select id="typeCategorie" class="form-control">
                                                            <option>adresse 1</option>
                                                            <option>adresse 2</option>
                                                            <option>adresse 3</option>


                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="fPUVente" type="text" class="form-control" placeholder="P.U.Vente">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="fquantité" type="text" class="form-control" placeholder="Quantité">
                                                    </div>
                                                </div>
                                                
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <input id="ftotal" type="text" class="form-control" placeholder="Total">
                                                    </div>
                                                </div>

                                            </div>

                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Libelle</label>
                                                        <input id="fLibelle" type="text" class="form-control"></input>

                                                    </div>
                                                </div>


                                            </div>
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Description</label>
                                                        <textarea id="descirption" class="form-control"></textarea>

                                                    </div>
                                                </div>


                                            </div>


                                            
                                            <button id="btn-edit" type="button" class="btn btn-primary pull-right">valider</button>

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
                        </div>




                        <button id="btn-edit" type="button" class="btn btn-success pull-right">Enregistrer</button>
                        <button onclick="window.location.href='./utilisateurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>

                        </form>
                    </div>
                </div>
            </div>