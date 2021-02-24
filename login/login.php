<?php
require("../Nav/header.php");



?>
<script src="../js/authentification.js"></script>


<div class="main-wrapper">

    <div class="login-page">

        <div class="clearfix"></div>

        <div class="login-body container">

            <div class="loginbox">

                <div class="login-right-wrap">

                    <div class="account-header">
                    <div class="account-logo text-center mb-4">
                    <a href="">
			<img src="../assets/img/logo.png" class="img-fluid" alt="">
		</a>
                    </div>
                    </div>
                    <div class="login-header">
                    <h4>Se connecter à <span>Saweblia Back Office</span></h4>
                    
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
                            <button id="btn-log" type="button" class="btn btn-success pull-right">Se connecter</button>




                        </form>
                        



                    </div>

                </div>

            </div>