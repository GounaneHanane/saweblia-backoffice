<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>





<div class="page-wrapper">

    <?php
    require("../Devis/menuDevisEtat.php")
    ?>

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