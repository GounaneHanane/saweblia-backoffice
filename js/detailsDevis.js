if (sessionStorage.getItem("token") === null)
  window.location.href =
    window.location.origin + "/saweblia-backoffice/login/login.php";
$(document).ready(function () {
  $.ajax({
    url:
      "http://webapp.saweblia.ma/devis/" +
      window.location.search.substring(1).split("?"),
    type: "GET",
    headers: {
      Authorization: `Bearer ${sessionStorage.getItem("token")}`,
    },
    success: function (data) {
      $("#dateDevis").append(data.DateCommande);
      $("#dateIntervention").append(data.DateIntervention),
      console.log(data.DateDebutIntervention)
        $("#ddi").append(data.DateDebutIntervention);
      $("#ddf").append(data.DateFinIntervention),
        $("#modePaiment").append(data.ModePaiement),
        $("#status").append(data.Statut),
        $("#datePaiment").append(data.DatePaiement);
      $.ajax({
        url: "http://webapp.saweblia.ma/clients/" + data.ClientID,
        type: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function (client) {
          $("#clientNom").append(client.Nom);
          $("#clientTelephone").append(client.Telephone);
          $("#clientComment").append(client.Comment);
        },
      });
      $.ajax({
        url: "http://webapp.saweblia.ma/adresses/" + data.AdresseID,
        type: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function (adresse) {
          $("#libelle").append(adresse.Libelle);
          $("#localisation").append(adresse.Localisation);
          $("#clientAdresse").append(adresse.Rue+adresse.Quartier+","+adresse.Ville);
        },
      });
      $.ajax({
        url: "http://webapp.saweblia.ma/coordinateurs/" + data.CoordinateurID,
        type: "GET",
        headers: {
          Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        },
        success: function (coordinateur) {
            
          $("#clientComment").append(coordinateur.Nom);
        },
      });
    },
  });
});
