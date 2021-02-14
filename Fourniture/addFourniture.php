<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fourniture.js"></script>
<script>
    $(document).ready(function(){
         $('.js-example-basic-single').select2();
          $.getJSON('http://webapp.saweblia.ma/fournisseurs', function(data) {
       
         var i;
        for (i = 0; i < data.Fournisseurs.length; i++) {
            $('#fournisseurs').append("<option value='"+data.Fournisseurs[i].Fournisseur+"'>" + data.Fournisseurs[i].NomFournisseur + "</option>")
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
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Libelle</label>
                                                <input id="libelle" type="text" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Prix Achat</label>
                                                <input pattern="[0-9]+" id="prixAchat" type="text" class="form-control">
                                            </div>
                                        </div>
                                        <div class="col-md-2">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Prix Vente</label>
                                                <input pattern="[0-9]+" id="prixVente" type="text" class="form-control" required>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group ">
                                            <div class="row">
                                                <label class="bmd-label-floating">Fournisseur</label>
                                                <div class="float-right"><input type="checkbox" id="add-fournisseur" style="margin-right:4px"><label>  Nouveau fournisseur</label></div>
                                              </div>
                                               <div class="fournisseurArea row">
                                                    <select id="fournisseurs"  class="form-control js-example-basic-single" >
                                                    </select>
                                               </div>
                                            </div>
                                        </div>
                                        <div class="col-md-3">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Media</label>
                                                <input type="file" onchange="document.getElementById('output').src = window.URL.createObjectURL(this.files[0])" class="form-control" id="fournitureImage" name="filename">
                                            </div>
                                        </div>
                                    </div>
                                    <div class="row">
                                        
                                      
                                        
                                        <div class="col-md-4">
                                            <div class="form-group">
                                                <label class="bmd-label-floating">Description</label>
                                                <textarea id="description" type="text" class="form-control" ></textarea>
                                            </div>
                                        </div>
                                        <div class="col-md-8">
                                        <img class="float-right" id="output" src='' width='100' height='100' />
                                        </div>
                                    </div>






                                    <button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                                     <button onclick="window.location.href='./fourniture.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                                    <div class="clearfix"></div>
                                </form>
                            </div>
                        </div>
                    </div>