<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/categorie.js"></script>
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title ">Categories</h4>
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
                        <button type="button" id="add-categorie" class="btn btn-primary float-right">Ajouter une categorie </button>
                        </form>
                    </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Libelle
                                    </th>
                                    <th>
                                        Description
                                    </th>

                                    <th>
                                        Media
                                    </th>
                                    <th>
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="categorie-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>