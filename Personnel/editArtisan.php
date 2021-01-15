<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/artisan.js"></script>
<script>
$.getJSON('http://webapp.saweblia.ma/artisans/'+window.location.search.substring(1).split("?"), function (data){
    
    
        $('#nom-artisan').html(data.Nom)
        $('#Nom').val(data.Nom)
        $('#telephone').val(data.Telephone)
        $('#SArtisan').val(data.SoldeArtisan)
        $('#SSaweblia').val(data.SoldeSaweblia)
        if(data.Langue=="arabe&français")
            $('#langue').attr("checked",true)
        $('#cin').val(data.Cin)
        $('#email').val(data.Email)
         $('#ville option').filter(function() {
            
            return $(this).val() == data.Ville;
          }).prop('selected', true);
         $('#type option').filter(function() {
            
            return $(this).val() == data.Type;
          }).prop('selected', true);
        $('#dispo').attr('checked',data.Disponible)

    });
</script>
<div class="content">

<div class="clearfix"></div>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Artisan : <i id="nom-artisan"></i></h4>
                    </div>
                    <div class="card-body">
                        <form id="editArtisan">
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
                                        <input pattern="[0-9]{10}" placeholder="EX : 06XXXXXXXX" id="telephone" type="text" class="form-control" required>
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
                                <div class="col-md-4">
                                 <div class="form-group">
                                        <label class="bmd-label-floating">CIN</label>
                                        <input id="cin" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Type</label>
                                        <select id="type" class="form-control">
                                            <option value="AutoEntrepreneur">AutoEntrepreneur</option>
                                            <option value="Independant">Independant</option>
                                            <option value="Entreprise">Entreprise</option>
                                        </select>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Langue Française</label>
                                        
                                        <div class="row">
                                            <div class="col-md-2">
                                                <input id="langue" type="checkbox" class="form-control" >
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="row">
                              
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
                            <button onclick="window.location.href='./personnels.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            
                        </form>
                    </div>
                </div>
            </div>