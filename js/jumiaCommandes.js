if (sessionStorage.getItem("token") == "null")
window.location.href =
  window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url: "http://webapp.saweblia.ma/fournisseurs",
    type:"GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
   success: function(data) {
      var i;
      var table = data.Fournisseurs;

      $("#jumiacommande-table").DataTable({
        data: table,
        columns: [
          { data: "NomFournisseur" },
          { data: "NomContact" },
          { data: "Telephone" },
          { data: "Adresse" },
          { data: "Email" },
          {
            data: null,
            render: function (data, row) {
              if (data.Localisation != "" && data.Localisation != null)
                return (
                  '<button onclick="deleteFournisseur(' +
                  data.Fournisseur +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                  data.Fournisseur +
                  ')"><span class="material-icons">create</span></button><a href="' +
                  data.Localisation +
                  '" class="btn btn-success action"><span class="material-icons">room</span></a>'
                );
              else
                return (
                  '<button onclick="deleteFournisseur(' +
                  data.Fournisseur +
                  ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm(' +
                  data.Fournisseur +
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
          lengthMenu: "Afficher _MENU_ enregistrements par page",
          zeroRecords: "Rien n'a été trouvé",
          info: "Affichage de la page _PAGE_ de _PAGES_",
          infoEmpty: "Aucun enregistrement disponible",
          infoFiltered: "(filtré à partir de _MAX_ enregistrements au total)",
          search: "Recherche :",
        },
      });
    },
  });
});
