<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/coordinateur.js"></script>
<script>
    $.ajax({
        url: 'http://webapp.saweblia.ma/coordinateurs/' + window.location.search.substring(1).split("?"),
        type: "GET",
        headers: {
            Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function(data) {
            $('#Nom').val(data.Nom)
            $('#coordinateur-nom').append(data.Nom)
            $('#telephone').val(data.Telephone)
            $('#ville').val(data.Ville)
            $('#email').val(data.Email)
            $('#cin').val(data.Cin)
            $('#dispo').val(data.Disponibilite)

        }
    });
</script>
<div class="page-wrapper">

        <div class="content container-fluid">

        <div class="clearfix"></div>

          <div class="row">

            <div class="col-xl-8 offset-xl-2">

              <div class="page-header">

                <div class="row">
                  <div class="col">

                  <h3 class="page-title"> Coordinateur : <i id="coordinateur-nom"></i></h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">
                        <form id="editCoordinateur">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Nom</label>
                                        <input id="Nom" type="text" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Téléphone</label>
                                        <input id="telephone" pattern="[0-9]{10}" type="tel" class="form-control" required>
                                    </div>
                                </div>
                                <div class="col-md-2">
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
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">CIN</label>
                                        <input id="cin" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Email</label>
                                        <input id="email" type="email" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-1">
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