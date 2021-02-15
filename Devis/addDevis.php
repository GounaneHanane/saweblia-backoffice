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
                                    <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Client</label>
                                                <div class="float-right"><input type="checkbox" id="add-client" style="margin-right:4px"><label>  Nouveau Client</label></div>
                                               <div class="clientArea">
                                                    <select id="clients"  class="form-control js-example-basic-single" >
                                                    </select>
                                               </div>
                                            </div>
                                        </div>

                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Coordinateur</label>
                                                 <select id="listeCoordinateur" class="js-example-basic-single form-control">
                                                

                                                </select>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                        </div>
                        <div class="card border">
                            <form id="add-client-form">
                                <div class="card-body" id="client-info-area">
                                    <h3 class="card-title" style="margin-bottom: 15px;">Client : <i id="client-name"> </h3>

                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Nom : </label>
                                                <label id="nom-client" class="bmd-label-floating"></label>

                                            </div>
                                        </div>
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Telephone : </label>
                                                <label id="tel-client" class="bmd-label-floating"></label>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-6">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Commentaire : </label>
                                                <label id="comment-client" class="bmd-label-floating"></label>
                                            </div>
                                        </div>


                                    </div>
                                    <div class="row">
                                        <div class="col-md-1">
                                            <div class="form-group">

                                                <label class="bmd-label-floating ">Adresse</label>
                                                

                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">

                                        <select id="listeAdresse" class="form-control js-example-basic-single">
                                        <option disabled value="">--- Adresses ---</option>

                                                </select>
                                                </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Libelle : </label>
                                                <label class="bmd-label-floating" id="libelle-adresse">Libelle1</label>
                                            </div>
                                        </div>
                                        <div class="col-md-5">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Localisation : </label>
                                                <label class="bmd-label-floating"id="localisation-adresse">https://g.page/villagedusoir?share</label>
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
                                                        <select id="select-prestation" class="form-control js-example-basic-single">
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
                                                        <select id="listeArtisans" class="form-control js-example-basic-single">
                                                           

                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="PUAchat" type="text" class="form-control" placeholder="P.U.Achat">
                                                    </div>
                                                </div>


                                            </div>
                                            <button id="valider-prestation" type="button" class="btn btn-primary pull-right">valider</button>

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
                                                        Artisan
                                                    </th>
                                                    <th>
                                                        Actions
                                                    </th>
                                                </thead>
                                                <tbody id="table-prestation">

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
                                            <h3 class="card-title" style="margin-bottom: 15px;">Fourniture </h3>
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
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <select id="listeFourniture" class="form-control js-example-basic-single">
                                                            

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
                  
                                                <div class="col-md-3">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Fournisseur : </label>
                                                        <label  id="fFournisseur"></label>

                                                    </div>
                                                </div>

                                            </div>

                                           
                                            <div class="row">
                                                <div class="col-md-12">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Description</label>
                                                        <textarea id="fdescription" class="form-control"></textarea>

                                                    </div>
                                                </div>


                                            </div>


                                            
                                            <button id="valider-fourniture" type="button" class="btn btn-primary pull-right">valider</button>

                                        </div>

                                    </div>
                                    <div class="card-body">
                                        <div class="table-responsive">
                                            <table class="table"  id="table-fourniture">
                                                <thead class=" text-primary">
                                                    <th>
                                                        Fourniture
                                                    </th>


                                                    <th>
                                                        Fournisseur
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
                                                <tbody >

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