<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../../js/service.js"></script>
<script src="../../js/categorie.js"></script>
<script src="../../js/prestation.js"></script>

<div class="content">
<div class="clearfix"></div>
    <div class="mdc-tab-bar" role="tablist">
      <div class="mdc-tab-scroller">
        <div class="mdc-tab-scroller__scroll-area mdc-tab-scroller__scroll-area--scroll" style="margin-bottom: 0px;">
          <div class="mdc-tab-scroller__scroll-content">
            <!---->
             <button  name="categorie_button" role="tab"  class="mdc-tab mdc-tab--active mdc-tab--stacked nav-bar" aria-selected="true" tabindex="0" id="goog_667979833-FIXED-0">
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
            <button  name="service_button"  role="tab" class="mdc-tab mdc-tab--stacked nav-bar" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-1">
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
            <button name="prestation_button" role="tab"  class="nav-bar mdc-tab mdc-tab--stacked" aria-selected="false" tabindex="-1" id="goog_667979833-FIXED-2">
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
    <div id ="service_button"  class="container-fluid tab" hidden>
        <div class="row ">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary row">
                        <h4 class="card-title  col-md-11 ">Services</h4>
                        <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8">
                            <div class="input-group no-border">
                                <input id="name-searchservice" type="text" value="" class="form-control" placeholder="Chercher avec le libelle">
                                <button id="searchbynameservice" type="button" class="btn btn-white btn-round btn-just-icon">
                                    <i class="material-icons">search</i>
                                    <div class="ripple-container"></div>
                                </button>
                            </div>
                        </div>
                        <div class="col-md-4">
                        <button type="button" id="add-service" class="btn btn-primary float-right">Ajouter un service </button>
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
                                        Categorie
                                    </th>
                                    <th>
                                        Service Media
                                    </th>
                                   
                                    <th>
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="service-table">

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
    <div id ="categorie_button"  class="container-fluid tab">
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary row">
                        <h4 class="card-title col-md-11">Categories</h4>
                        <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                        <div class="row">
                        <div class="col-md-8">
                            <div class="input-group no-border">
                                <input id="name-searchcategorie" type="text" value="" class="form-control" placeholder="Chercher avec le libelle">
                                <button id="searchbynamecategorie"  type="button" class="btn btn-white btn-round btn-just-icon">
                                    <i class="material-icons">search</i>
                                    <div class="ripple-container"></div>
                                </button>
                            </div>
                            </div>
                            <div class="col-md-4">
                            <button type="button" id="add-categorie" class="btn btn-primary float-right">Ajouter une categorie </button>
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

           
<div class="content">
    <div id="prestation_button"  class="container-fluid tab" hidden>
        <div class="row">
            <div class="col-md-12">
                <div class="card">
                    <div class="card-header card-header-primary row">
                        <h4 class="card-title col-md-11">Prestations</h4>
                        <button onclick="window.location.reload()" type="button" class="btn btn-primary btn-round btn-just-icon float-right">
                      <i class="material-icons">autorenew</i>
                      <div class="ripple-container"></div>
                  </button>
                    </div>
                    <div class="card-body">
                    <div class="card-header">
                    <div class="row">
                        <div class="col-md-8">
                            <div class="input-group no-border">
                                <input  id="name-searchprestation" type="text" value="" class="form-control" placeholder="Chercher avec le libelle">
                                <button type="button" id="searchbynameprestation" class="btn btn-white btn-round btn-just-icon">
                                    <i class="material-icons">search</i>
                                    <div class="ripple-container"></div>
                                </button>
                            </div>
                            </div>
                          
                        <div class="col-md-4">
                        <button type="button" id="add-prestation" class="btn btn-primary float-right">Ajouter une prestation </button>
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
                                        Actions
                                    </th>

                                </thead>
                                <tbody id="prestation-table">

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