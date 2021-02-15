<?php

$host = "saweblia.ma";
$user = "saweblia_sawebuser";
$password = "p@r@d0xait1980";
$bd = "mobilesw";

$connection = new mysqli($host, $user, $password, $bd);
$connection->set_charset("utf8");

//echo json_encode($array);

if(isset($_POST['action'])) {
    if($_POST['action']=='displayEditForm') {
        $query = "select * from Prestations where IDPrestation=".$_POST['idJumia'];
        $query_result = $connection->query($query);
        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    }
    else if($_POST['action']=='displayData') {
       
        $query = "select * from Prestations ,Services WHERE Prestations.IDService=Services.IDService";

        $query_result = $connection->query($query);

        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    }
    else if($_POST['action']=='edit') {
        $query = 'update Prestations set LibellePrestation="'.$_POST['data']['libelle'].'", PrixPrestation='.$_POST['data']['prix_prestation'].',PrixConsultation='.$_POST['data']['prix_consultation'].' where IDPrestation='.$_POST["data"]["jumiaId"];

        $query_result = $connection->query($query);

        if($query_result==true)
            echo "success";
        else echo "error";
    }
    else if($_POST['action']=='delete') {
        $query = "delete from Prestations where IDPrestation=".$_POST["idJumia"];

        $query_result = $connection->query($query);

        if($query_result==true)
            echo "success";
        else echo "error";
    }  else if($_POST['action']=='displayCommandes') {
        $query = "SELECT * FROM `CommandesJumia` as cmd,Prestations as pres,Clients_Adresses as ads WHERE cmd.IDPrestation=pres.IDPrestation and cmd.IDClientAdresses=ads.IDClientAdresses";

        $query_result = $connection->query($query);

        $array = mysqli_fetch_all($query_result);
        echo json_encode($array);
    }
}