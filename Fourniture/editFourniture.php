<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fourniture.js"></script>
<script>
    $(document).ready(function() {
        $('.js-example-basic-single').select2();
        $.ajax({
            url: 'http://webapp.saweblia.ma/fournisseurs',
            type: "GET",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },

            success: function(data) {

                var i;
                for (i = 0; i < data.Fournisseurs.length; i++) {
                    $('#fournisseurs').append("<option value='" + data.Fournisseurs[i].Fournisseur + "'>" + data.Fournisseurs[i].NomFournisseur + "</option>")
                }

            }
        });

        $.ajax({
            url: 'http://webapp.saweblia.ma/fournitures/' + window.location.search.substring(1).split("?"),
            type: "GET",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            success: function(data) {




                $('#libelle').val(data.Libelle)
                $('#nom-fourniture').html(data.Libelle)
                $('#description').val(data.Description)
                $('#prixAchat').val(data.PrixAchat)
                $('#prixVente').val(data.PrixVente)
                $('#image').attr("src", window.location.origin + "/saweblia-backoffice/" + data.Media)
                $("#fournitureImage").attr("alt", data.Media)
                $("#fournisseurs").val(data.FournisseurID)



            }
        })
    })
</script>
<div class="page-wrapper">

        <div class="content container-fluid">

        <div class="clearfix"></div>

          <div class="row">

            <div class="col-xl-8 offset-xl-2">

              <div class="page-header">

                <div class="row">
                  <div class="col">

                  <h3 class="page-title">Fourniture : <i id="nom-fourniture"></i></h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">

                        <form id="editFourniture">
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
                                <div class="col-md-5">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Fournisseur</label>
                                        <div class="float-right"><input type="checkbox" id="add-fournisseur" style="margin-right:4px"><label> Nouveau fournisseur</label></div>
                                        <div class="fournisseurArea row">
                                            <select id="fournisseurs" class="form-control js-example-basic-single">
                                            </select>
                                        </div>
                                    </div>
                                </div>
                                

                            </div>
                            <div class="row">
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Description</label>
                                        <textarea id="description" type="text" class="form-control"></textarea>
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">
                                        <label class="bmd-label-floating">Media</label>
                                        <input onchange="document.getElementById('image').src = window.URL.createObjectURL(this.files[0])" type="file" class="form-control" id="fournitureImage" name="filename">
                                    </div>
                                </div>
                                <div class="col-md-4">
                                    <div class="form-group">

                                        <img class="float-right" src='' width='100' height='100' id="image" />
                                    </div>
                                </div>
                            </div>




                            <button id="btn-edit" type="submit" class="btn btn-success pull-right">Enregistrer</button>
                            <button onclick="window.location.href='./fourniture.php'" type="button" class="btn btn-danger pull-right">Annuler</button>
                            <div class="clearfix"></div>
                        </form>
                    </div>
                </div>
            </div>