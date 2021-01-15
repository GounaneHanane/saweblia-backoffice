<?php require("header.php"); ?>
<script>
function myFunction() {
  var x = document.getElementById("myLinks");
  if (x.style.display === "block") {
    x.style.display = "none";
  } else {
    x.style.display = "block";
  }
}</script>
<div class="wrapper ">
    <div class="sidebar" data-color="purple" data-background-color="white" data-image="../assets/img/sidebar-1.jpg">
      <!--
        Tip 1: You can change the color of the sidebar using: data-color="purple | azure | green | orange | danger"

        Tip 2: you can also add an image using data-image tag
    -->
      <div class="logo"><img width="250" src="../assets/img/logo.png" class="simple-text logo-normal">
         
        </a></div>
      <div class="sidebar-wrapper">
        <ul class="nav">
          
          <li class="nav-item ">
            <a class="nav-link" href="../Client/clients.php">
             
              <p>Clients</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="../Personnel/coordinateurs.php">
             
              <p>Personnels</p>
            </a>
          </li>
          
          <li class="nav-item ">
            <a class="nav-link" href="../Fourniture/fourniture.php">
             
              <p>Fournitures</p>
            </a>
          </li>
          <li class="nav-item ">
            <a class="nav-link" href="../Service/categorie.php">
             
              <p>Services</p>
            </a>
          </li>
          <li class="nav-item ">
            <a  href="../Utilisateur/utilisateurs.php" class="nav-link" >
            
              <p>Paramètres</p>
            </a>
          </li>
          <li class="nav-item ">
            <a  href="../Partenaire/jumia.php" class="nav-link" >
            
              <p>Partenaire</p>
            </a>
          </li>
        </ul>
      </div>
    </div>
  <div class="main-panel">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">

<!-- Top Navigation Menu -->
<!-- Top Navigation Menu -->
<div class="topnav" style="display: none;">
  <a href="" class="active" ><img width="150" src="../../assets/img/logo.png" class="simple-text logo-normal"></a>
  <!-- Navigation links (hidden by default) -->
  <div id="myLinks">
    <a href="../Client/clients.php">Clients</a>
    <a href="../Personnel/personnels.php">Personnels</a>
    
    <a href="../Fourniture/fourniture.php">Fournitures</a>
    
    <a href="../Service/categorie.php">Services</a>
    <a href="../Utilisateur/utilisateurs.php">Paramètres</a>
    <a href="../Partenaire/jumia.php">Partenaire</a>
  </div>
  <!-- "Hamburger menu" / "Bar icon" to toggle the navigation links -->
  <a href="javascript:void(0);" class="icon" onclick="myFunction()">
    <i style="font-size: 34px;" class="fa fa-bars"></i>
  </a>
</div>
    