<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/artisan.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button role="tab" onclick='window.location.href="./coordinateurs.php"'  class="mdc-tab  mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                 
                    <span class="mdc-tab__text-label">Coordinateurs</span>
                </span>
                <span class="mdc-tab-indicator">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button onclick='window.location.href="./personnels.php"' role="tab" class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                 
                    <span class="mdc-tab__text-label">Artisans</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
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
    <div id ="artisan_button"  class="container-fluid tab" >
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header card-header-primary row">
                  <h4 class="card-title col-md-8" style="cursor:pointer" onclick="window.location.reload()">Artisans</h4>
                  <div class="col-md-4">
                           <button type="button" id="add-artisan" class="btn btn-primary float-right">Ajouter </button>
                       </div>
                </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8 row">
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input style="margin-right:13px" id="name-searchartisan" type="text" value="" class="form-control" placeholder="Nom">
                                    <button id="searchbynameartisan" type="button" class="btn btn-dark">
                                Chercher
                              </button>
                                </div>
                            </div>
                            <div class="col-md-6">
                                <div class="input-group no-border">
                                    <input style="margin-right:13px" id="phone-searchartisan" type="text" value="" class="form-control" placeholder="Téléphone">
                                 
                                    <button id="searchbyphoneartisan" type="button" class="btn btn-dark">
                                Chercher
                              </button>
                                </div>
                            </div>
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