<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button  name="categorie_button" role="tab" onclick="window.location.href='./categorie.php'"  class="mdc-tab  mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Devi </span>
                </span>
                <span class="mdc-tab-indicator ">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button  onclick="window.location.href='./services.php'"  role="tab" class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                     <span class="mdc-tab__text-label">Devi </span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button  onclick="window.location.href='./prestation.php'"  role="tab"  class="nav-bar mdc-tab mdc-tab--stacked" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-2">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Devi</span>
                </span>
                <span class="mdc-tab-indicator ">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
                <span  class="mdc-tab__ripple mdc-ripple-upgraded" style="--mdc-ripple-fg-size:102px; --mdc-ripple-fg-scale:1.90958; --mdc-ripple-fg-translate-start:-39.3438px, -30px; --mdc-ripple-fg-translate-end:34.0859px, -15px;"></span>
            </button>
    <!---->
          </div>
        </div>
      </div>
    </div>
    
  
 
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary">
                        <div class="row">
                            <div class="col-md-11">
                                <h4 class="card-title ">Devis</h4>
                            </div>
                            <div class="col-md-1"> <button id="add-devis" class="btn btn-primary float-right">Ajouter</button>
                            </div>

                        </div>

                    </div>
                    <div class="card-body">
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Client
                                    </th>


                                    <th>
                                        Coordinateur
                                    </th>

                                    <th>
                                        Date de commande
                                    </th>
                                    <th>
                                        Date debut d'intervention
                                    </th>
                                    <th>
                                        Status
                                    </th>
                                    <th>
                                        Actions
                                    </th>
                                </thead>
                                <tbody id="devis-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>