<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>

<div class="content">
    <div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <div class="row">
                            <div class="col-md-11">
                                <h4 class="card-title ">Devis</h4>
                            </div>
                            <div class="col-md-1"> <button id="add-devis" class="btn btn-primary float-right">Ajouter</button>
                            </div>

                        </div>

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Client
                                    </th>


                                    <th>
                                        Coordinateur
                                    </th>

                                    <th>
                                        Date de commande
                                    </th>
                                    <th>
                                        Date debut d'intervention
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </thead>
                                <tbody id="devis-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>