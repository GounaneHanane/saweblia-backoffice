$(document).ready(function () {
  $("#devis-table").append('<tr id="">');

  $("#devis-table").append("<td> Client 1</td>");

  $("#devis-table").append("<td> Coordinateur 1 </td>");

  $("#devis-table").append("<td> 20-2-2020</td>");

  $("#devis-table").append("<td> 20-20-2020</td>");

  $("#devis-table").append("<td>Status </td>");

  $("#devis-table").append(
    '<td><a href="" class="btn btn-info action"><span class="material-icons">info</span></a><button onclick="deletedevis(" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button onclick="deletedevis()" type="button" class="btn btn-primary action"><span class="material-icons">assignment_turned_in</span></button><button onclick="deletedevis(" type="button" class="btn btn-light action"><span class="material-icons">content_copy</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm()"><span class="material-icons">create</span></button></td></tr>'
  );



  $("#edit-devis-table").append('<tr id="">');

  $("#edit-devis-table").append("<td> prestation1</td>");

  $("#edit-devis-table").append("<td> 100 </td>");

  $("#edit-devis-table").append("<td> 1 </td>");

  $("#edit-devis-table").append("<td> 0.2</td>");

  $("#edit-devis-table").append("<td> 100 </td>");
  $("#edit-devis-table").append("<td> artisant1 </td>");

  $("#edit-devis-table").append(
    '<td><button onclick="deletedevis(" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm()"><span class="material-icons">create</span></button></td></tr>'
  );
});
