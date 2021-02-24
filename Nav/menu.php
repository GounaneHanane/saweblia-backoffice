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
})
 
</script>
<div class="main-wrapper">
<div class="header">
	<div class="header-left">
		<a href="https://truelysell.com/dashboard" class="logo">
			<img src="https://truelysell.com/uploads/logo/1579702346_1561615644_download.png" width="140" height="46" alt="">
		</a>
		<a href="https://truelysell.com/dashboard" class="logo logo-small">
			<img src="https://truelysell.com/uploads/logo/1579702346_1561615644_download.png" alt="Logo" width="30" height="30">
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
				  					<img class="rounded-circle" src="https://truelysell.com/assets/img/user.jpg" width="40" alt="Admin">
				</span>
			</a>
			<div class="dropdown-menu dropdown-menu-right">
				<a class="dropdown-item" href="https://truelysell.com/admin-profile">Profile</a>
				<a class="dropdown-item" href="https://truelysell.com/admin/logout">Logout</a>
			</div>
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
            <li hidden>
            <a href="../Devis/devis.php">
             
              <span>Devis</span>
            </a>
          </li>
          <li >
            <a  href="../Client/clients.php">
             
              <span>Clients</span>
            </a>
          </li>
          <a >
			
			</a>
          <li class="dropdown">
            <a  class="dropdown-toggle" id="dropPers" role="button" aria-expanded="true" data-toggle="dropdown" href="" >
             
              <span>Collaborateurs</span>
            </a>
            <ul class="dropdown-menu " aria-labelledby="dropPers" role="menu" style="">
				<a class="dropdown-item" href="../Personnel/coordinateurs.php">Coordinateurs</a>
				<a class="dropdown-item" href="../Personnel/personnels.php">Artisans</a>
</ul>
          </li>
          
          <li  class="dropdown">
            <a class="dropdown-toggle" id="dropPers" role="button"  data-toggle="dropdown" href="">
             
              <span>Fournitures</span>
            </a>
			<ul class="dropdown-menu " aria-labelledby="dropPers" role="menu" style="">
				<a class="dropdown-item" href="../Fourniture/fourniture.php">Fourniture</a>
				<a class="dropdown-item" href="../Fourniture/fournisseurs.php">Fournisseur</a>
</ul>
          </li>
          <li class="dropdown">
            <a class="dropdown-toggle" id="dropPers" role="button"  data-toggle="dropdown" href="">
             
              <span>Services</span>
            </a>
			   <ul class="dropdown-menu " aria-labelledby="dropPers" role="menu" style="">
				<a class="dropdown-item" href="../Service/categorie.php">Catégories</a>
				<a class="dropdown-item" href="../Service/services.php">Services</a>
				<a class="dropdown-item" href="../Service/prestation.php">Prestations</a>
</ul>
          </li>
          <li >
            <a  href="../Utilisateur/utilisateurs.php" >
            
              <span>Paramètres</span>
            </a>
          </li>
          <li  class="dropdown">
            <a  class="dropdown-toggle" id="dropPers" role="button"  data-toggle="dropdown" href="">
            
              <span>Partenaire</span>
            </a>
			<ul class="dropdown-menu " aria-labelledby="dropPers" role="menu" style="">
				<a class="dropdown-item" href="../Partenaire/jumia.php">Prestation Jumia</a>
				<a class="dropdown-item" href="../Partenaire/commandeJumia.php">Commande Jumia</a>
</ul>
          </li>

			</ul>
		</div>
	</div><div class="slimScrollBar" style="background: rgb(204, 204, 204); width: 7px; position: absolute; top: 0px; opacity: 0.4; display: none; border-radius: 7px; z-index: 99; right: 1px; height: 969px;"></div><div class="slimScrollRail" style="width: 7px; height: 100%; position: absolute; top: 0px; display: none; border-radius: 7px; background: rgb(51, 51, 51); opacity: 0.2; z-index: 90; right: 1px;"></div></div>
</div>

