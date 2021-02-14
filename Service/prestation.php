<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/prestation.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button  name="categorie_button" role="tab" onclick="window.location.href='./categorie.php'"  class="mdc-tab  mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Catégories</span>
                </span>
                <span class="mdc-tab-indicator ">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button  onclick="window.location.href='./services.php'"  role="tab" class="mdc-tab mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                     <span class="mdc-tab__text-label">Services</span>
                </span>
                <span class="mdc-tab-indicator">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
                <span class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button  onclick="window.location.href='./prestation.php'"  role="tab"  class="nav-bar mdc-tab--active mdc-tab mdc-tab--stacked" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-2">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Prestations</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
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
    
  

           
<div class="content">
    <div id="prestation_button"  class="container-fluid tab" >
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary row">
                        <h4 style="cursor: pointer;"  onclick="window.location.reload()" class="card-title col-md-8">Prestations</h4>
                      <div class="col-md-4">
                        <button type="button" id="add-prestation" class="btn btn-primary float-right">Ajouter </button>
                        </div>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                    
                        <div class="table-responsive">
                            <table class="table" id="prestation-table">
                                <thead class=" text-primary">
                                    <th>
                                        Libelle
                                    </th>
                                    <th>
                                        Description
                                    </th>
                                    <th>
                                        Prix Achat
                                    </th>
                                    <th>
                                        Prix Vente
                                    </th>
                                    <th>
                                    Coefficient Remise
                                    </th>
                                    <th>
                                    Services
                                    </th>
                                    
                                    <th>
                                    Media 
                                    </th>

                                   
                                    <th>
                                        
                                    </th>

                                </thead>
                                <tbody >

                                </tbody>
                            </table>
                            <div class="row d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination pagination-prestation">
                          
                                     </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
 