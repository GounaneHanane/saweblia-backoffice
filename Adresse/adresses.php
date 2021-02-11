<?php

require("../Nav/header.php");

require("../Nav/menu.php");

?>

<script src="../js/adresse.js"></script>

<style>
  .table th,
  .table td {

    border-top: 0px;

  }

  .bttn {



    margin-top: 25px;



  }
</style>

<div class="content">



  <div class="container-fluid">

    <div class="row">

      <div class="col-md-12">

        <div class="card">

          <div class="card-header card-header-primary">

            <h4>Client : <i id="nom-header"></i></h4>

          </div>

          <div class="card-body">

            <div class="row">

              <h3 class="col-md-9">Détail client</h3>

              <div class="col-md-3">

                <button id="edit-client" class="btn bttn btn-warning float-right ">Modifier le client</button>

              </div>

            </div>

            <table class="table">

              <tr>

                <td>

                  <label> <b>Nom : </b></label>



                  <label id="nom"></label>

                </td>



                <td>

                  <label><b>Email :</b> </label>

                  <label id="email"> </label>

                </td>

                <td>

                  <label><b>Type :</b> </label>

                  <label id="type"></label>

                </td>

              </tr>

              <tr>

                <td>

                  <label><b>Téléphone : </b></label>

                  <label id="tel"> </label>

                </td>





                <td colspan="2">

                  <label><b>Canal d'aquisition :</b> </label>

                  <label id="canal"></label>

                </td>

              </tr>
              <tr>







                <td colspan="3">

                  <label><b>Commentaire :</b> </label>

                  <label id="comment"></label>

                </td>

              </tr>

            </table>



            <div class="row">

              <h3 class="col-md-9">Adresses</h3>

              <div class="col-md-3">

                <button id="add-adresse" class=" btn bttn btn-primary float-right">Ajouter une adresse</button>

              </div>

            </div>

            <div class="table-responsive">



              <table class="table"  id="adresse-table" >

                <thead class=" text-primary">

                  <th>

                    Libelle

                  </th>

                  <th>

                    Quartier

                  </th>



                  <th>

                    Rue

                  </th>

                  <th>

                    Ville

                  </th>

                  <th>

                    N°Bureau

                  </th>

                  <th>

                    Surface Bureau

                  </th>

                  <th>

                    Actions

                  </th>

                </thead>




                </tbody>

              </table>

            </div>

          </div>

        </div>

      </div>