<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/categorie.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button  name="categorie_button" role="tab" onclick="window.location.href='./categorie.php'"  class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Catégories</span>
                </span>
                <span class="mdc-tab-indicator mdc-tab-indicator--active">
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
            <button   onclick="window.location.href='./prestation.php'" role="tab"  class="nav-bar mdc-tab mdc-tab--stacked" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-2">
                <span class="mdc-tab__content">
                    <span class="mdc-tab__text-label">Prestations</span>
                </span>
                <span class="mdc-tab-indicator">
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
    <div  class="container-fluid tab">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary row">
                        <h4 style="cursor: pointer;"  onclick="window.location.reload()" class="card-title col-md-8">Categories</h4>
                           <div class="col-md-4">
                            <button type="button" id="add-categorie" class="btn btn-primary float-right">Ajouter </button>
                            </div>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8">
                            <div class="input-group no-border">
                                <input style="margin-right:4px" id="name-searchcategorie" type="text" value="" class="form-control col-md-4" placeholder="Libelle">
                           
                                 <button type="button" id="searchbynamecategorie" class="btn btn-dark">
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
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="categorie-table">

                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

 