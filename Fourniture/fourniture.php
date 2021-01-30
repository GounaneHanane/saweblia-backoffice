<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/fourniture.js"></script>
<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button onclick="window.location.href='./fourniture.php'"  role="tab"  class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                   
                    <span class="mdc-tab__text-label">Fourniture</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
                    <span class="mdc-tab-indicator__content
                    mdc-tab-indicator__content--underline"></span>
                </span>
    
                <span  class="mdc-tab__ripple mdc-ripple-upgraded"></span>
            </button>
    <!---->
            <button onclick="window.location.href='./fournisseurs.php'"  role="tab" class="mdc-tab mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Fournisseurs</span>
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
    <div id ="fourniture_button" class="container-fluid tab">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                <div class="card-header card-header-primary row">
                  <h4 onclick="window.location.reload()" style="cursor:pointer" class="card-title col-md-10">Fourniture</h4>
                  <div class="col-md-2">
                                <button type="button" id="add-fourniture" class="btn btn-primary float-right">Ajouter</button>
                            </div>
                </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class=" row">
                            <div class="col-md-4">
                                <div class="input-group no-border">
                                    <input style="margin-right:4px" id="name-searchfourniture" type="text" value="" class="form-control" placeholder="Libelle">
                                  
                                      <button id="searchbynamefourniture" type="button" class="btn btn-dark">
                                Chercher
                              </button>
                                </div>
                            </div>
                           
                        </div>
                    </div>
                        <div class="table-responsive">
                            <table class="table">
                                <thead class=" text-primary">
                                    <th>
                                        Libelle
                                    </th>
                                    <th>
                                        Description
                                    </th>

                                    <th>
                                        Media
                                    </th>
                                    <th>
                                        Prix Achat
                                    </th>
                                    <th>
                                        Prix Vente
                                    </th>
                                     <th>
                                        Nom Fournisseur
                                    </th>
                                    <th>
                                        Tel Fournisseur
                                    </th>
                                
                                    <th>
                                        
                                    </th>

                                </thead>
                                <tbody id="fourniture-table">

                                </tbody>
                            </table>
                            <div class="row d-flex justify-content-center">
                                <nav aria-label="Page navigation example">
                                    <ul class="pagination pagination-fourniture">
                          
                                     </ul>
                                </nav>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            </div>
            </div>
            </div>
          