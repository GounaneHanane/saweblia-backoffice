<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/fourniture.js"></script>
<script>
    $(document).ready(function(){
         $('.js-example-basic-single').select2();
          $.getJSON('http://webapp.saweblia.ma/fournisseurs', function(data) {
       
         var i;
        for (i = 0; i < data.fournisseurs.Fournisseurs.length; i++) {
            $('#fournisseurs').append("<option value='"+data.fournisseurs.Fournisseurs[i].Fournisseur+"'>" + data.fournisseurs.Fournisseurs[i].NomFournisseur + "</option>")
        } 

    });
    })
  
     
</script>
        <div class="content">
            <div class="container-fluid">
                <div class="row">
                    <div class="col-md-12">
                        <div class="card">
                            <div class="card-header card-header-primary">
                                <h4 class="card-title">Nouvelle fourniture</h4>
                            </div>
                            <div class="card-body">
                                <form id="addFourniture">
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Libelle</label>
                                                <input id="libelle" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Description</label>
                                                <input id="description" type="text" class="form-control" >
                                            </div>
                                        </div>

                                        <div class="col-md-4">
                                            <div class="form-group ">
                                                <label class="bmd-label-floating">Fournisseur</label>
                                                <div class="float-right"><input type="checkbox" id="add-fournisseur" style="margin-right:4px"><label>  Nouveau fournisseur</label></div>
                                               <div class="fournisseurArea">
                                                    <select id="fournisseurs"  class="form-control js-example-basic-single" >
                                                    </select>
                                               </div>
                                            </div>
                                        </div>

                                    </div>
                                    <div class="row">
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Prix Achat</label>
                                                <input id="prixAchat" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Prix Vente</label>
                                                <input id="prixVente" type="text" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Media</label>
                                                <input type="file" class="form-control" id="fournitureImage" name="filename">
                                            </div>
                                        </div>
                                       
                                    </div>






                                    <button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                                     <button onclick="window.location.href='./fourniture.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>