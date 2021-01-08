$(document).ready(function(){
   
    $.getJSON('http://webapp.saweblia.ma/clients/'+localStorage.getItem('idClient'), function (data){
        $('#nom').append(data.Nom)
        $('#tel').append(data.Telephone),
        $('#canal').append(data.CanalAcquisition),
        $('#email').append(data.Email),
        $('#type').append(data.Type),
        $('#comment').append(data.Comment)
    });
    $.getJSON('http://webapp.saweblia.ma/adresse_client/'+localStorage.getItem('idClient'), function (data){
        var i;
        var table=data.Adresses;
        for (i = 0; i < table.length; i++)
        {
            $('#adresse-table').append('<tr>')
            if(table[i].Libelle!=null)
                $('#adresse-table').append("<td>"+table[i].Libelle+"</td>")
            else $('#adresse-table').append("<td></td>")
            if(table[i].Quartier!=null)
                $('#adresse-table').append("<td>"+table[i].Quartier+"</td>")
            else $('#adresse-table').append("<td></td>")
            if(table[i].Rue!=null)
                $('#adresse-table').append("<td>"+table[i].Rue+"</td>")
            else $('#adresse-table').append("<td></td>")
            if(table[i].Ville!=null)
                $('#adresse-table').append("<td>"+table[i].Ville+"</td>")
            else $('#adresse-table').append("<td></td>")
            if(table[i].OfficeNumber!="")
            $('#adresse-table').append("<td>"+table[i].OfficeNumber+"</td>")
            else   $('#adresse-table').append("<td></td>")
            if(table[i].OfficeSurface!="")
                $('#adresse-table').append("<td>"+table[i].OfficeSurface+"</td>")
            else $('#adresse-table').append("<td></td>")
            $('#adresse-table').append('<td><button onclick="deleteadresse('+table[i].AdressID+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferAdresseForm('+table[i].AdressID+')"><span class="material-icons">create</span></button><a href="'+table[i].Localisation+'" class="btn btn-success action"><span class="material-icons">room</span></a></td></tr>')
          
        }
    });
    $('#edit-client').click(function(){
        localStorage.setItem('idClientEdited', localStorage.getItem('idClient'))
        window.location.replace("../Client/editClient.php")
    });
    $('#add-adresse').click(function(){
        window.location.replace("../Adresse/addAdresse.php")
    });idAdresse
    $('#btn-add').click(function(){
        var arr={libelle:$('#Libelle').val(),
                quartier:$('#Quartier').val(),
                rue:$('#Rue').val(),
                ville:$('#Ville').val(),
                localisation:$('#Localisation').val(),
                numero_bureau:$('#NBureau').val(),
                surface_bureau:$('#NSurface').val(),
                clientId:localStorage.getItem('idClient')
            }
        
        $.ajax({
            url: 'http://webapp.saweblia.ma/adresses',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg) {
                alert(msg);
            }
        });
       
    })
})
function modiferAdresseForm(idClient) {
    localStorage.setItem('idAdresse', idClient)
    window.location.replace("../adresse/editAdresse.php")
}