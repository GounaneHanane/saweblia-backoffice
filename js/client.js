$(document).ready(function(){
    $.getJSON('http://webapp.saweblia.ma/clients', function (data){
        var i;
        var table=data.Client.Clients;
        for (i = 0; i < table.length; i++)
        {
            $('#client-table').append('<tr>')
            if(table[i].Nom!=null)
                $('#client-table').append("<td>"+table[i].Nom+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].Telephone!=null)
                $('#client-table').append("<td>"+table[i].Telephone+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].Email!=null)
                $('#client-table').append("<td>"+table[i].Email+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].CanalAcquisition!=null)
                $('#client-table').append("<td>"+table[i].CanalAcquisition+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].Activer==true)
                $('#client-table').append('<td><label class="switch"><input id="check'+table[i].ClientID+'" onchange="block('+table[i].ClientID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
            else $('#client-table').append('<td><label class="switch"><input id="check'+table[i].ClientID+'" onchange="block('+table[i].ClientID+')" type="checkbox"><span class="slider round"></span></label></td>')
            
            $('#client-table').append('<td><button type="button" onclick="detail('+table[i].ClientID+')" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteClient('+table[i].ClientID+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm('+table[i].ClientID+')"><span class="material-icons">create</span></button></td></tr>')
          
        }
    });
    $('#add-client').click(function(){
        window.location.href="../Client/addClient.php?"+idClient
    });
    $('#btn-add').click(function(){
        var arr={nom:$('#nom').val(),
                telephone:$('#tel').val(),
                canal_acquisition:$('#canal').val(),
                email:$('#email').val(),
                type:$('#type').val(),
                comment:$('#comment').val(),
                libelle:$('#Libelle').val(),
                quartier:$('#Quartier').val(),
                rue:$('#Rue').val(),
                ville:$('#Ville').val(),
                localisation:$('#Localisation').val(),
                numero_bureau:$('#NBureau').val(),
                surface_bureau:$('#NSurface').val()}
                alert($('#Ville').val()!="")
        $.ajax({
            url: 'http://webapp.saweblia.ma/clients',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg) {
                },
            error: function(){
                $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est ajouté avec succes</span></div>')
                setTimeout(function() {
                   window.location.href="../Client/clients.php"
                  }, 1000);
            }
            
        });
       
    })
    $('#btn-edit').click(function(){
        var arr={
                ClientID:localStorage.getItem('idClientEdited'),
                nom:$('#nom').val(),
                telephone:$('#tel').val(),
                canal_acquisition:$('#canal').val(),
                email:$('#email').val(),
                type:$('#type').val(),
                comment:$('#comment').val()}
        
        $.ajax({
            url: 'http://webapp.saweblia.ma/clients/'+localStorage.getItem('idClientEdited'),
            type: 'PUT',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg) {
             
            },
            error: function (msg) {
                $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est modifié avec succes</span></div>')
                setTimeout(function() {
                   window.location.href="../Client/clients.php"
                  }, 1000);
            }
        });
       
    })
});

function deleteClient(idClient) {
    if (confirm('Voulez-vous vraiment supprimer ce client ?'))
    $.ajax({
        url: 'http://webapp.saweblia.ma/clients/'+idClient,
        type: 'DELETE',
        success: function(msg) {
            $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Le client est supprimé avec succes</span></div>')
            setTimeout(function() {
               window.location.href="../Client/clients.php"
              }, 1000);
           },
        error: function(){
           
        }
    });
}
function modiferClientForm(idClient) {
    window.location.href="../Client/editClient.php?"+idClient
}
function detail(idClient) {
    window.location.href="../Adresse/adresses.php?"+idClient
}
function block(ClientId) {
    var arr={}
   var checkbox=$('#check'+ClientId).is(":checked")
 $.getJSON('http://webapp.saweblia.ma/clients/'+ClientId, function (data){
   arr={
        ClientID:ClientId,
        nom:data.Nom,
        telephone:data.Telephone,
        canal_acquisition:data.CanalAcquisition,
        email:data.Email,
        type:data.Type,
        comment:data.Comment,
        activer:checkbox
    }
    $.ajax({
        url: 'http://webapp.saweblia.ma/clients/'+ClientId,
        type: 'PUT',
        data: JSON.stringify(arr),
        contentType: 'application/json; charset=utf-8',
        dataType: 'json',
        async: false,
        success: function(msg) {
            alert(msg);
        }
    });
    });
 

    
}