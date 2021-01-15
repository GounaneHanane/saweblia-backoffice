<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fournisseur.js"></script>
 <script>
  /*   $.getJSON('http://webapp.saweblia.ma/categories', function(data) {
        console.log(data.Categories)
        var i;
        for (i = 0; i < data.Categories.length; i++) {
            $('#typeCategorie').append("<option>" + data.Categories[i].Libelle + "</option>")
        }

    }); */
    $.getJSON('http://webapp.saweblia.ma/fournisseurs/'+window.location.search.substring(1).split("?"), function (data){
        
       $('#fournisseur').append(data.NomFournisseur)
        $('#nomFournisseur').val(data.NomFournisseur)
        $('#nomContact').val(data.NomContact)
        $('#telephone').val(data.Telephone)
        $('#adresse').val(data.Adresse)
        $('#localisation').val(data.Localisation)
        $('#email').val(data.Email)
      
    });;
</script> 
<div class="content">
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <h4 class="card-title">Fournisseur <i id="fournisseur"></i></h4>
                    </div>
                    <div class="card-body">
                        <form id="editFournisseur">
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Nom Fournisseur</label>
                                        <input id="nomFournisseur" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Nom Contact</label>
                                        <input id="nomContact" type="text" class="form-control" required>
                                    </div>
                                </div>
                                
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Telephone</label>
                                        <input id="telephone" type="tel" pattern="[0-9]{10}" placeholder="EX : 06XXXXXXXX" class="form-control" required>
                                    </div>
                                </div>
                                
                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Adresse</label>
                                        <input id="adresse" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Localisation</label>
                                        <input id="localisation" type="text" class="form-control">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Email</label>
                                        <input id="email" type="email" class="form-control" required>
                                    </div>
                                </div>
                                
                            </div>






                            <button id="btn-edit" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                            <button onclick="window.location.href='./fournisseurs.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>