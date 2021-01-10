<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/artisan.js"></script>
<script src="../../js/coordinateur.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button  name="coordinateur_button" role="tab"  class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                    <i aria-hidden="true" class="material-icons mdc-tab__icon"><!---->watch_later<!----></i>
                    <span class="mdc-tab__text-label">Coordinateurs</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button  name="artisan_button"  role="tab" class="mdc-tab mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                    <i aria-hidden="true" class="material-icons mdc-tab__icon"><!---->near_me<!----></i>
                    <span class="mdc-tab__text-label">Artisans</span>
                </span>
                <span class="mdc-tab-indicator">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
  
          </div>
        </div>
      </div>
    </div>
    
    <div class="content">
    <div id ="coordinateur_button"  class="container-fluid tab" >
        <div class="row ">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header card-header-primary row">
                  <h4 class="card-title col-md-11">Coordinateur</h4>
                  <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8 row">
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input id="name-search" type="text" value="" class="form-control" placeholder="Chercher avec le nom">
                                    <button id="searchbyname" type="button" class="btn btn-white btn-round btn-just-icon">
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input id="phone-search" type="text" value="" class="form-control" placeholder="Chercher avec le numéro de téléphone">
                                    <button id="searchbyphone" type="button" class="btn btn-white btn-round btn-just-icon">
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <button type="button" id="add-coordinateur" class="btn btn-primary float-right">Ajouter un coordianteur </button>
                       </div>
                       </div>
                    </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Nom
                                    </th>
                                    <th>
                                        Téléphone
                                    </th>
                                    <th>
                                        Email
                                    </th>
                                    <th>
                                        Ville
                                    </th>
                                    <th>
                                        CIN
                                    </th>  <th>
                                        Disponibilité
                                    </th>
                                    <th>
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="coordianteur-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </div>
        </div>
    <div class="content">
    <div id ="artisan_button"  class="container-fluid tab" hidden>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header card-header-primary row">
                  <h4 class="card-title col-md-11">Artisans</h4>
                  <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8 row">
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input id="name-searchartisan" type="text" value="" class="form-control" placeholder="Chercher avec le nom">
                                    <button id="searchbynameartisan" type="button" class="btn btn-white btn-round btn-just-icon">
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input id="phone-searchartisan" type="text" value="" class="form-control" placeholder="Chercher avec le numéro de téléphone">
                                    <button id="searchbyphoneartisan" type="button" class="btn btn-white btn-round btn-just-icon">
                                        <i class="material-icons">search</i>
                                        <div class="ripple-container"></div>
                                    </button>
                                </div>
                            </div>
                        </div>
                            <div class="col-md-4">
                        <button type="button" id="add-artisan" class="btn btn-primary float-right">Ajouter un artisan </button>
                        </div>
                        </div>
                    </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Nom
                                    </th>
                                    <th>
                                        Téléphone
                                    </th>

                                 
                                    
                                    <th>
                                        Ville
                                    </th>
                                    
                                
                                    
                                    <th>
                                        Solde Artisan
                                    </th>
                                    
                                    <th>
                                        Solde Saweblia
                                    </th>
                                    
                                    <th>
                                        Disponibilité
                                    </th>
                                    <th>
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="artisan-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>