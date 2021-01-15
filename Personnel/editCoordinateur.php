<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/coordinateur.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/coordinateurs/'+window.location.search.substring(1).split("?"), function (data){
        $('#Nom').val(data.Nom)
         $('#coordinateur-nom').append(data.Nom)
        $('#telephone').val(data.Telephone)
        $('#ville').val(data.Ville)
        $('#email').val(data.Email)
        $('#cin').val(data.Cin)
        $('#dispo').val(data.Disponibilite)

    });
</script>
<div class="content">

<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title"> Coordinateur : <i id="coordinateur-nom"></i></h4>
                    </div>
                    <div class="card-body">
                        <form id="editCoordinateur">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Nom</label>
                                        <input id="Nom" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Téléphone</label>
                                        <input id="telephone" pattern="[0-9]{10}" type="tel" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Ville</label>
                                       <select id="ville" class="form-control">
                                          <option>Casablanca</option>
                                          <option>Rabat</option>
                                          <option>Mohemmadia</option>
                                          <option>Autre</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">CIN</label>
                                        <input id="cin" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Email</label>
                                        <input id="email" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-3">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Disponibilité</label>
                                        <br>
                                        <label class="switch">
                                            <input id="dispo" type="checkbox" checked><span class="slider round"></span>
                                        </label>
                                    </div>
                                </div> 
                               
                            </div>




  
                            <button id="btn-edit" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                            <button onclick="window.location.href='./coordinateurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                    

                        </form>
                    </div>
                </div>
            </div>