<?php 

$dir = "./Media/Fourniture/";
move_uploaded_file($_FILES["image"]["tmp_name"], $dir. $_FILES["image"]["name"]); 
