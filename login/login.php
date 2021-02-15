<?php
require("../Nav/header.php");



?>
<script src="../js/authentification.js"></script>


<div class="content" style="padding-top: 10%;margin-left:25%;margin-right:25%;">

    <div class="container-fluid">

        <div class="clearfix"></div>

        <div class="row">

            <div class="col-md-12">

                <div class="card">

                    <div class="card-header card-header-primary row">

                        <h4 style="cursor:pointer" class="card-title col-md-9 justify-content-center">Formulaire d'authentification</h4>

                    </div>

                    <div class="card-body">
                    <div id="notification"></div>

                        <form id="add-client-form">
                            <div class="row">

                                <div class="col-md-12">

                                    <div class="form-group">

                                        <label class="bmd-label-floating">Login</label>

                                        <input placeholder="mail@mail.com" id="login" type="text" class="form-control">

                                    </div>

                                </div>

                            </div>


                            <div class="row">
                                <div class="col-md-12">

                                    <div class="form-group">

                                        <label class="bmd-label-floating">Mot de passe</label>

                                        <input placeholder="*******" id="password" type="password" class="form-control" required>

                                    </div>

                                </div>
                            </div>
                            <button id="btn-log" type="button" class="btn btn-success pull-right">S'authentifier</button>




                        </form>
                        



                    </div>

                </div>

            </div>