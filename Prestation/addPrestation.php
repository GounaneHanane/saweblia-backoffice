<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/prestation.js"></script>
<script>
    $(document).ready(function(){
          $.getJSON('http://webapp.saweblia.ma/services', function(data) {
        
         var i;
        for (i = 0; i < data.Services.length; i++) {
            $('#services').append("<option value='"+data.Services[i].ServiceID+"'>" + data.Services[i].Libelle + "</option>")
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
                        <h4 class="card-title">Nouvelle Prestation</h4>
                    </div>
                    <div class="card-body">
                        <form id="addPrestation">
                            <div class="row">
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Libelle</label>
                                        <input id="libelle" type="text" class="form-control" required>
                                    </div>
                                </div>
                                
                                <div class="col-md-2">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Services</label>
                                        <select style="    width: 100%;" id="services" class="js-example-basic-single form-control" required>


                                        </select>
                                    </div>
                                </div>
                                
                                    <div class="col-md-2">
                                        <div class="form-group">
                                            <label class="bmd-label-floating">Prix Achat</label>
                                            <input id="prixAchat" type="number" class="form-control">
                                        </div>
                                      
                                    </div>
                                    <div class="col-md-2">
                                          <div class="form-group">
                                            <label class="bmd-label-floating">Prix Vente</label>
                                            <input id="prixVente" type="number" class="form-control" required >
                                        </div>
                                       
                                    </div>
                                    <div class="col-md-2">
                                           <div class="form-group">
                                            <label class="bmd-label-floating">Coefficient de remise </label>
                                            <input id="coefficientRemise" step="0.01" type="number" class="form-control" >
                                        </div>  
                                        </div>
                                        <div class="col-md-2">
                                    <div class="form-group">
                                                <label class="bmd-label-floating">Media</label>
                                                <input onchange="document.getElementById('image').src = window.URL.createObjectURL(this.files[0])" type="file" class="form-control" id="fournitureImage" name="filename">
                                            </div>
                                        
                                    </div>
                              
                            </div>
                                <div class="row">
                                    
                                    
                                   
  
                                      
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Description</label>
                                        <textarea id="description" rows='5' class="form-control" ></textarea>
                                    </div>
                                </div>
                                <div class="col-md-8">
                                <img class="float-right" id="image"  src='' width='100' height='100'/>
                                </div>
                                </div>






                            <button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                            <button onclick="window.location.href='../Service/prestation.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>