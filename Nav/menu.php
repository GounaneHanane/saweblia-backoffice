<?php require("header.php"); ?>
<script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}
$(document).ready(function() {
	$('.dropdown-toggle').dropdown()
	$('.user-img').click(function(){
	
		sessionStorage.setItem("login",null);
        sessionStorage.setItem("nom", null);
        sessionStorage.setItem("token", "null");
		window.location.href="../login/login.php"
	})
	$('li').click(function(){
		$('li').removeClass("active")
		$(this).addClass("active")
		
	})
	console.log(window.location.pathname)
})
 
</script>
<div class="main-wrapper">
<div class="header">
	<div class="header-left">
		<a href="https://truelysell.com/dashboard" class="logo">
			<img src="../assets/img/logo.png" width="140" height="46" alt="">
		</a>
		<a href="https://truelysell.com/dashboard" class="logo logo-small">
			<img src="../assets/img/logo.png" alt="Logo" width="30" height="30">
		</a>
	</div>
	<a href="javascript:void(0);" id="toggle_btn">
		<i class="fas fa-align-left"></i>
	</a>
	<a class="mobile_btn" id="mobile_btn" href="javascript:void(0);">
		<i class="fas fa-align-left"></i>
	</a>
	
	<ul class="nav user-menu">
		<!-- Notifications -->
	
		<!-- /Notifications -->
		
		<li class="nav-item dropdown">
			<a href="javascript:void(0)" class="dropdown-toggle user-link  nav-link" data-toggle="dropdown">
				<span class="user-img">
				  					<img class="rounded-circle" src="https://truelysell.com/assets/img/user.jpg" width="40" alt="Admin"> Se déconnecter
				</span>
			</a>
		
		</li>
	</ul>
</div>
<div class="sidebar" id="sidebar">
	<div class="sidebar-logo">
		<a href="">
			<img src="../assets/img/logo.png" class="img-fluid" alt="">
		</a>
	</div>
	<div class="slimScrollDiv" style="position: relative; overflow: hidden; width: 100%; height: 909px;"><div class="sidebar-inner slimscroll" style="overflow: hidden; width: 100%; height: 909px;">
		<div id="sidebar-menu" class="sidebar-menu">
			<ul>
            <li id="devi">
            <a href="../Devis/devis.php">
             
              <span>Devis</span>
            </a>
          </li>
          <li id="client">
            <a  href="../Client/clients.php">
             
              <span>Clients</span>
            </a>
          </li>
		  <li id=prestation>
            <a  href="../Service/prestation.php"><span>Prestations</span></a>
          </li>
		  <li id="coordinateur">
            <a  href="../Personnel/coordinateurs.php"><span>Coordinateurs</span></a>
          </li>
		  <li id="artisan">
            <a  href="../Personnel/personnels.php"><span>Artisans</span></a>
          </li>
		  <li id="fourniture">
            <a  href="../Fourniture/fourniture.php"><span>Fourniture</span></a>
          </li>
		  <li id="fournisseur">
            <a  href="../Fourniture/fournisseurs.php"><span>Fournisseur</span></a>
          </li>
		  <li id="categorie">
            <a  href="../Service/categorie.php"><span>Catégories</span></a>
          </li>
		  <li id="service">
            <a  href="../Service/services.php"><span>Services</span></a>
          </li>
		
		  <li id="jumiapre">
            <a  href="../Partenaire/jumia.php"><span>Prestation Jumia</span></a>
          </li>
		  <li >
            <a  href="../Partenaire/commandeJumia.php"><span>Commande Jumia</span></a>
          </li>
          <li >
            <a  href="../Utilisateur/utilisateurs.php" >
            
              <span>Paramètres</span>
            </a>
          </li>
         

			</ul>
		</div>
	</div><div class="slimScrollBar" style="background: rgb(204, 204, 204); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 969px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
</div>

