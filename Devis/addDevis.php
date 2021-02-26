<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>
<script src="../js/addDevi.js"></script>

<script>
    $.ajax({
        url: 'http://webapp.saweblia.ma/utilisateurs/' + window.location.search.substring(1).split("?"),
        type: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function(data) {
            $('#nom').val(data.Nom)
            $('#user-name').append(data.Nom)
            $('#interne').attr("checked", data.Interne)
            $('#login').val(data.Login)

        }
    });
</script>
<div class="content">
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Nouveau devi</h4>
                    </div>
                    <div class="card-body">
                        <div class="card border">

                            <div class="card-body">
                                <h3 class="card-title" style="margin-bottom: 15px;">Information Devis</h3>

                                <form id="addDeviForm">

                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Client</label>
                                                <div class="float-right"><input type="checkbox" id="add-client" style="margin-right:4px"><label> Nouveau Client</label></div>
                                                <div class="clientArea">
                                                    <select id="clients" class="form-control js-example-basic-single">
                                                    </select>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Coordinateur</label>
                                                <select id="listeCoordinateur" class="js-example-basic-single form-control">


                                                </select>
                                            </div>
                                        </div>

                                    </div>

                                    <hr>
                                    <div id="client-info-area">
                                        <h3 class="card-title" style="margin-bottom: 15px;">Client : <label id="nom-client"></label> </h3>

                                        <div class="row">

                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Telephone : </label>
                                                    <input type="text" id="tel-client" class="form-control" disabled>
                                                </div>
                                            </div>

                                            <div class="col-md-3">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating ">Adresse</label>

                                                    <select id="listeAdresse" class="form-control js-example-basic-single">
                                                        <option disabled value="">--- Adresses ---</option>

                                                    </select>
                                                </div>
                                            </div>
                                            <div class="col-md-2">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Libelle : </label>
                                                    <input type="text" class="form-control" id="libelle-adresse" disabled></input>
                                                </div>
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Localisation : </label>
                                                    <div class="row">
                                                        <input type="text" class="form-control col-md-10" id="localisation-adresse" disabled></input>

                                                        <button type="button" class="col-md-1 btn btn-light action" style="margin-left:5px"><span class="material-icons">content_copy</span></button>
                                                    </div>


                                                </div>
                                            </div>

                                        </div>
                                        <div class="row">
                                            <div class="col-md-6">
                                                <div class="form-group">
                                                    <label class="bmd-label-floating">Commentaire : </label>
                                                    <textarea id="comment-client" class="form-control"></textarea>
                                                </div>
                                            </div>


                                        </div>
                                        <button id="add-devi" type="submit" class="btn btn-success pull-right">Enregistrer</button>



                                    </div>
                                </form>
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
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Prestation </label>
                                                        <select id="select-prestation" class="form-control js-example-basic-single">
                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <label class="bmd-label-floating">P.U Vente </label>
                                                    <div class="form-group"><input id="PUVente" type="text" class="totalPrestation form-control" placeholder="P.U.Vente">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="bmd-label-floating">Quantité </label>
                                                    <div class="form-group"><input id="quantité" type="text" class=" totalPrestation form-control" placeholder="Quantité">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <label class="bmd-label-floating">Coeifficient </label>
                                                    <div class="form-group"><input id="coifficient" type="text" class="totalPrestation form-control" placeholder="Coeifficient">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Montant total </label>
                                                        <input id="total" type="text" class="form-control" placeholder="Total">
                                                    </div>
                                                </div>

                                            </div>




                                            <div class="row">
                                                <div class="col-md-4">
                                                    <div class="form-group">
                                                        <label class="bmd-label-floating">Artisant </label>
                                                        <select id="listeArtisans" class="form-control js-example-basic-single">


                                                        </select>
                                                    </div>
                                                </div>

                                                <div class="col-md-2">
                                                    <label class="bmd-label-floating">P.U Achat </label>

                                                    <div class="form-group"><input id="PUAchat" type="text" class="form-control" placeholder="P.U.Achat">
                                                    </div>
                                                </div>


                                            </div>
                                            <div class="row">
                                                <div class="col-md-6">
                                                    <div class="form-group">

                                                        <label class="bmd-label-floating">Description</label>
                                                        <textarea id="descirption" class="form-control"></textarea>

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
                                                        <select id="listeFourniture" class="form-control  js-example-basic-single">


                                                        </select>
                                                    </div>

                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="fPUVente" type="text" class=" totalFourniture form-control" placeholder="P.U.Vente">
                                                    </div>
                                                </div>
                                                <div class="col-md-2">
                                                    <div class="form-group"><input id="fquantité" type="text" class=" totalFourniture form-control" placeholder="Quantité">
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
                                                        <label id="fFournisseur"></label>

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
                                            <table class="table" id="table-fourniture">
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
                                                <tbody>

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