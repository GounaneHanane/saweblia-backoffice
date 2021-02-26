<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script src="../js/devis.js"></script>
<script>
    $(document).ready(function() {
        $.ajax({
            url: 'http://webapp.saweblia.ma/devitermine',
            type: "GET",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            success: function(data) {
                console.log(data)
                var i;
                var table = data.Devis;
                $("#terminer-devis-table").DataTable({
                    data: table,
                    columns: [{
                            data: "Client.Nom"
                        },
                        {
                            data: "Coordinateur.Nom"
                        },
                        {
                            data: "DateCommande",
                        },
                        {
                            data: "DateDebutIntervention"
                        },
                        {
                            data: null,
                            render: function(data) {
                                return (
                                    '<label class="badge badge-success">'+data.Statut+'</label>'
                                );
                            },
                        },
                        {
                            data: null,
                            render: function(data) {
                                return (
                                    '<button onclick="deleteFourniture(' +
                                    data.FournitureID +
                                    ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferFournitureForm(' +
                                    data.FournitureID +
                                    ')"><span class="material-icons">create</span></button>'
                                );
                            },
                        },

                    ],
                    order: [],
                    language: {
                        paginate: {
                            previous: "Précédent",
                            next: "Suivant",
                        },
                        lengthMenu: "Afficher _MENU_ ",
                        zeroRecords: "Rien n'a été trouvé",
                        info: "",
                        infoEmpty: "Aucun enregistrement disponible",
                        infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
                        search: "Recherche :",
                    },
                });

            }
        });
    });
</script>




<div class="page-wrapper">

    <?php
    require("../Devis/menuDevisEtat.php")
    ?>

    <div class="row">






        <div class="col-md-12">
            <div class="card">
                <div class="card-body">
                    <div class="table-responsive">
                        <table class="table" id="terminer-devis-table">
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
                            <tbody>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>