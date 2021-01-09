<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/fournisseur.js"></script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title ">Fournisseurs</h4>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                        <form class="navbar-form">
                            <div class="input-group no-border">
                                <input type="text" value="" class="form-control" placeholder="Chercher avec le libelle">
                                <button type="submit" class="btn btn-white btn-round btn-just-icon">
                                    <i class="material-icons">search</i>
                                    <div class="ripple-container"></div>
                                </button>
                            </div>
                        <button type="button" id="add-fournisseur" class="btn btn-primary float-right">Ajouter un fournisseur </button>
                        </form>
                    </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Nom fournisseur
                                    </th>
                                    <th>
                                        Nom Contact 
                                    </th>

                                    <th>
                                        Telephone
                                    </th>
                                    <th>
                                        Adresse
                                    </th>
                                    <th>
                                        Localisation
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                
                                    <th>
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="fournisseur-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>