$(document).ready(function () {

  $("#btn-log").click(function () {
    var arr = {
      login: $("#login").val(),
      mot_de_passe: $("#password").val(),
    };
    $.ajax({
      url: "http://webapp.saweblia.ma/login",
      type: "POST",
      data: JSON.stringify(arr),

      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        if (msg.code === 0) {
          sessionStorage.setItem("login", msg.info.login);
          sessionStorage.setItem("nom", msg.info.nom);
          sessionStorage.setItem("token", msg.token);

          window.location.href =
            window.location.origin + "/saweblia-backoffice/Client/clients.php";
        } else {
          alert("Votre mail ou votre mot de passe est incorrecte ! ");
        }
      },
      error: function () {
        alert("Votre mail ou votre mot de passe est incorrecte ! ");
      },
    });
  });
});
