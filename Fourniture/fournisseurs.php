<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fournisseur.js"></script>
<div class="content">
<div class="clearfix"></div>
     <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button onclick="window.location.href='./fourniture.php'"  role="tab"  class="mdc-tab  mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                   
                    <span class="mdc-tab__text-label">Fourniture</span>
                </span>
                <span class="mdc-tab-indicator ">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button onclick="window.location.href='./fournisseurs.php'"  role="tab" class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Fournisseurs</span>
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
    <div id ="fournisseur_button" class="container-fluid tab" >
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header card-header-primary ">
                    <div class="row">
                        <div class="col-md-10">
                            <h4 onclick="window.location.reload()" style="cursor:pointer" class="card-title col-md-11">Fournisseur</h4>
                  </div>
                  <div class="col-md-2">
                      <button type="button" id="add-fournisseur" class="btn btn-primary float-right">Ajouter  </button>
                      </div>
                            
                  </div>
                  
                </div>
                    <div class="card-body">
                        <div class="card-header">
                            
                        <div class="table-responsive">
                            <table class="table" id="fournisseur-table">
                                <thead class=" text-primary">
                                    <th>
                                        Nom fournisseur
                                    </th>
                                    <th>
                                        Nom Contact 
                                    </th>

                                    <th>
                                        Telephone
                                    </th>
                                    <th>
                                        Adresse
                                    </th>
                                   
                                    <th>
                                        Email
                                    </th>
                                
                                    <th>
                                        
                                    </th>

                                </thead>
                                <tbody >

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>