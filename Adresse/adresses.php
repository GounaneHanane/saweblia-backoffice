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





<div class="page-wrapper">

<div class="content container-fluid">

<div class="clearfix"></div>
<div class="page-header">
  <div class="row">

    <div class="col-md-10">

    
          <h3 style="cursor:pointer" class="page-title">Client : <b id="nom-header"></b></h3>
</div>
                  <div class="col-md-2 text-right">

                            <button  id="edit-client" class=" btn bttn btn-warning float-right">Modifier le client</div>



</div>
</div>

<div class="row">






<div class="col-md-12">
<div class="card">
<div class="card-body">
<div class="table-responsive">
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
</div>
</div>
</div>
</div>
</div>


<div class="page-header">
          <div class="row">

            <div class="col-md-10">

            
                  <h3 style="cursor:pointer" class="page-title">Adresses</h3>
</div>
                  <div class="col-md-2 text-right">

                            <button id="add-adresse" class="btn bttn btn-primary float-right">Ajouter une adresse</button>

</div>



</div>
</div>

<div class="row">






<div class="col-md-12">
<div class="card">
<div class="card-body">
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