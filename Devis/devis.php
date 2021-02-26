<?php
require("../Nav/header.php");
require("../Nav/menu.php");
?>
<script>
    if (sessionStorage.getItem("token") == "null" || sessionStorage.getItem("token") == null)
        window.location.href =
        window.location.origin + "/saweblia-backoffice/login/login.php";



    function modiferClientForm(idmodif) {
        window.location.href = "./editDevis.php?" + idmodif
    }

    function deleteDevi(idDevis) {
        if (confirm("Voulez-vous vraiment supprimer ce Devi ?"))
            $.ajax({
                url: "http://webapp.saweblia.ma/devi/" + idDevis,
                type: "DELETE",
                headers: {
                    Authorization: `Bearer ${sessionStorage.getItem("token")}`,
                },
                success: function(msg) {
                    $(".clearfix").append(
                        '<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le Devi est supprimé avec succes</span></div>'
                    );
                    setTimeout(function() {
                        window.location.href =
                            "./devis.php"

                    }, 1000);
                },
            });
    }
    $(document).ready(function() {
        $.ajax({
            url: 'http://webapp.saweblia.ma/devi',
            type: "GET",
            headers: {
                Authorization: `Bearer ${sessionStorage.getItem("token")}`,
            },
            success: function(data) {

                var i;
                var table = data.Devis;
                $("#devis-table").DataTable({
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
                                var swit
                                switch (data.Statut) {
                                    case 'EnAttente':
                                        swit = '<label class="badge badge-danger">En attente </label>'
                                        break;
                                    case 'Valide':
                                        swit = '<label class="badge badge-success">Valide</label>'
                                        break;
                                    case 'EnCours':
                                        swit = '<label class="badge badge-warning">En cours </label>'
                                        break;
                                    case 'Terminer':
                                        swit = '<label class="badge badge-success">Terminer</label>'
                                        break;
                                    case 'Paye':
                                        swit = '<label class="badge badge-success">Paye</label>'
                                        break;
                                }
                                return (
                                    swit
                                );
                            },
                        },
                        {
                            data: null,
                            render: function(data) {
                                return (
                                    '<td><a href="./detailDevis.php?' + data.DeviID + '" class="btn btn-info action"><span class="material-icons">info</span></a><button onclick=deleteDevi(' + data.DeviID + ') type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button onclick="deletedevis()" type="button" class="btn btn-primary action"><span class="material-icons">assignment_turned_in</span></button><button onclick="deletedevis(" type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' + data.DeviID + ')"><span class="material-icons">create</span></button></td></tr>'

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
                        <table class="table" id="devis-table">
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