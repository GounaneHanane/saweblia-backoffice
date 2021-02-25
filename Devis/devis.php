<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>


  
 
    <div class="page-wrapper">

        <div class="content container-fluid">

        <div class="clearfix"></div>
<div class="page-header">
          <div class="row">

            <div class="col-md-10">

            
                  <h3 style="cursor:pointer" class="page-title">Devis</h3>
</div>
                  <div class="col-md-2 text-right">

                            <button id="add-devis" class="btn btn-primary add-button">Ajouter</button>

</div>



</div>
</div>
<ul class="nav nav-tabs menu-tabs">
			<li class="nav-item ">
				<a class="nav-link" href="https://truelysell.com/admin/total-report">Devis </a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="https://truelysell.com/admin/pending-report">Valide </a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="https://truelysell.com/admin/inprogress-report">En cours </a>
			</li>
			<li class="nav-item active">
				<a class="nav-link" href="https://truelysell.com/admin/complete-report">Terminés </a>
			</li>
			<li class="nav-item">
				<a class="nav-link" href="https://truelysell.com/admin/reject-report">Payés </a>
			</li>
		</ul>

<div class="row">






<div class="col-md-12">
<div class="card">
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