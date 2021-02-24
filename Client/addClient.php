<?php 

    require("../Nav/header.php");

    require("../Nav/menu.php"); 

    ?>

<script src="../js/client.js"></script>

<div class="page-wrapper">

        <div class="content container-fluid">

        <div class="clearfix"></div>

          <div class="row">

            <div class="col-xl-8 offset-xl-2">

              <div class="page-header">

                <div class="row">
                  <div class="col">

                  <h3 class="page-title">Nouveau client</h3>
                  </div>
                </div>
         
              
                </div>
                <div class="card">
                <div class="card-body">

                <form id="add-client-form">

<div class="row">

  <div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Nom</label>

      <input id="nom" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>

  </div>

  <div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Téléphone</label>

      <input placeholder="EX : 06XXXXXXXX" id="tel" pattern="[0-9]{10}" type="tel" class="form-control" required="">

    </div>

  </div>

  <div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Email</label>

      <input id="email" type="email" class="form-control">

    </div>

  </div>
<div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Type</label>

      <select id="type" class="form-control" required="">

          <option value="particulier">Particulier</option>

          <option value="societe">Société</option>

        </select>

    </div>

  </div>

  <div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Canal d'aquisition</label>

      <select id="canal" class="form-control">

          <option>Appli Mobile</option>

          <option>Facebook, Whatsapp</option>

          <option>Site web</option>

          <option>Autre</option>

        </select>

    </div>

  </div>

  

</div>



<div class="row">
<div class="col-md-4">

    <div class="form-group"><grammarly-extension data-grammarly-shadow-root="true" style="position: absolute; top: 0px; left: 0px; pointer-events: none;" class="cGcvT"></grammarly-extension>

      <label class="bmd-label-floating">Commentaire</label>

      <textarea id="comment" class="form-control" rows="5" spellcheck="false" data-ms-editor="true"></textarea>

    </div>

  </div>

</div>
<h3>Adresse</h3>
<div class="">



<div class="row">

  <div class="col-md-2">

    <div class="form-group">

      <label class="bmd-label-floating">Libelle</label>

      <input id="Libelle" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    <div class="ms-editor-squiggles-container" style="all: initial;"></div></div>

  </div>

  <div class="col-md-2">

  

    <div class="form-group">

    <label class="bmd-label-floating">Ville</label>

        <select id="Ville" class="form-control" required="">

  <option>Casablanca</option>

  <option>Rabat</option>

  <option>Mohemmadia</option>

  <option>Autre</option>

  </select>

    </div>

  </div>

  <div class="col-md-2">

  <div class="form-group">

      <label class="bmd-label-floating">Quartier</label>

      <input id="Quartier" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>

   

  </div>
<div class="col-md-2">

  <div class="form-group">

      <label class="bmd-label-floating">Rue</label>

      <input id="Rue" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>

  </div>
<div class="col-md-4">

   

    <div class="form-group">

      <label class="bmd-label-floating">Localisation</label>

      <input id="Localisation" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>

  </div>
</div>

<div class="row">

  

  <div class="col-md-4">

    <div class="form-group">

    <label class="bmd-label-floating">N Bureau ( Client Technopark )</label>

      <input id="NBureau" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>



  </div>
<div class="col-md-4">

     <div class="form-group">

      <label class="bmd-label-floating">Surface Bureau ( Client Technopark )</label>

      <input id="NSurface" type="text" class="form-control" spellcheck="false" data-ms-editor="true">

    </div>

  </div>
</div>









 












<button id="btn-add" type="submit" class="btn btn-success pull-right">Enregistrer</button>

<button onclick="window.location.href='./clients.php'" type="button" class="btn btn-danger pull-right">Annuler</button>



</form>

                </div>

              </div>

    </div>

            
    </div>
    
    </div>
    </div>