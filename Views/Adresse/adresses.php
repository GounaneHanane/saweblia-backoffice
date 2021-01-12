<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/adresse.js"></script>
<style>
</style>
<div class="content">

  <div class="container-fluid">
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <div class="card-header card-header-primary">
            <h4>Client : <i id="nom-header"></i></h4>
          </div>
          <div class="card-body">
            <div class="row">
              <h3 class="col-md-8">Détail client</h3>
              <button id="edit-client" class="btn btn-warning float-right col-md-3">Modifier le client</button>
            </div>
            <div class="container">
              <table>
                <tr>
                  <td>
                    <label>Nom : </label>
                    <label id="nom"></label>
                  </td>
                  <td>
                    <label>Email : </label>
                    <label id="email"> </label>
                  </td>
                  <td>
                    <label>Téléphone : </label>
                    <label id="tel"> </label>
                  </td>
                </tr>
                <tr>

                  <td>
                    <label>Canal d'aquisition : </label>
                    <label id="canal"></label>
                  </td>
                  <td>
                    <label>Type : </label>
                    <label id="type"></label>
                  </td>
                </tr>
                <tr>

                  <td>
                    <label>Commentaire : </label>
                    <label id="comment"></label>
                  </td>
                </tr>
              </table>
            </div>
            <div class="row">
              <h3 class="col-md-8">Adresses</h3>
              <button id="add-adresse" class="col-md-3 btn btn-primary float-right">Ajouter une adresse</button>
            </div>
            <div class="table-responsive">

              <table class="table">
                <thead class=" text-primary">
                  <th>
                    Libelle
                  </th>
                  <th>
                    Quartier
                  </th>

                  <th>
                    Rue
                  </th>
                  <th>
                    Ville
                  </th>
                  <th>
                    N°Bureau
                  </th>
                  <th>
                    N°Surface
                  </th>
                  <th>
                    Actions
                  </th>
                </thead>
                <tbody id="adresse-table">

                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>