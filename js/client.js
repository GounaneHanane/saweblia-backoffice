$(document).ready(function(){
    $.getJSON('http://webapp.saweblia.ma/clients', function (data){
        var i;
        var table=data.Client.Clients;
        for (i = 0; i < table.length; i++)
        {
            $('#client-table').append('<tr id="'+table[i].ClientID+'">')
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
            $('#client-table').append('<td><label class="switch"><input type="checkbox" checked="'+table[i].Activer+'"><span class="slider round"></span></label></td>')
            $('#client-table').append('<td><button type="button" class="btn btn-info action"><span class="material-icons">info</span></button> <button onclick="deleteClient('+table[i].ClientID+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferClientForm('+table[i].ClientID+')"><span class="material-icons">create</span></button></td></tr>')
          
        }
    });
    $('#add-client').click(function(){
        window.location.replace("../Client/addClient.php")
    });
    $('#btn-add').click(function(){
        var arr={nom:$('#nom').val(),
                telephone:$('#tel').val(),
                canal_acquisition:$('#canal').val(),
                email:$('#email').val(),
                type:$('#type').val(),
                commentaire:$('#comment').val()}
        
        $.ajax({
            url: 'http://webapp.saweblia.ma/clients',
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
    $('#btn-edit').click(function(){
        var arr={
                ClientID:localStorage.getItem('idClientEdited'),
                nom:$('#nom').val(),
                telephone:$('#tel').val(),
                canal_acquisition:$('#canal').val(),
                email:$('#email').val(),
                type:$('#type').val(),
                commentaire:$('#comment').val()}
        
        $.ajax({
            url: 'http://webapp.saweblia.ma/clients/'+localStorage.getItem('idClientEdited'),
            type: 'PUT',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg) {
                alert(msg);
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
            $('#message').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>')
        }
    });
}
function modiferClientForm(idClient) {
    localStorage.setItem('idClientEdited', idClient)
    window.location.replace("../Client/editClient.php")
}