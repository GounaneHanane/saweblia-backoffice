$(document).ready(function () {
    $.getJSON('http://webapp.saweblia.ma/utilisateurs', function (data){
        var i;
        var table=data.Utilisateurs;
        for (i = 0; i < table.length; i++)
        {
            $('#client-table').append('<tr>')
            if(table[i].Nom!=null)
                $('#client-table').append("<td>"+table[i].Nom+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].Login!=null)
                $('#client-table').append("<td>"+table[i].Login+"</td>")
            else $('#client-table').append("<td></td>")
            if(table[i].Interne==true)
            $('#client-table').append('<td>Interne</td>')
        else $('#client-table').append('<td>Externe</td>')
        
            if(table[i].Activer==true)
                $('#client-table').append('<td><label class="switch"><input id="check'+table[i].UtilisateurID+'" onchange="block('+table[i].UtilisateurID+')" type="checkbox" checked><span class="slider round"></span></label></td>')
            else $('#client-table').append('<td><label class="switch"><input id="check'+table[i].UtilisateurID+'" onchange="block('+table[i].UtilisateurID+')" type="checkbox"><span class="slider round"></span></label></td>')
            
            $('#client-table').append('<td> <button onclick="deleteClient('+table[i].UtilisateurID+')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferUtilisateurForm('+table[i].UtilisateurID+')"><span class="material-icons">create</span></button></td></tr>')
        
        }
    });
    $("#add-utilisateur").click(function () {
        window.location.replace("../Utilisateur/addUtilisateur.php");
      });
      $('#btn-add').click(function(){
          
        var arr={nom:$('#nom').val(),
                interne:$('#interne').is(":checked"),
                login:$('#login').val(),
                mot_de_passe:$('#mot_de_passe').val()}
              
        $.ajax({
            url: 'http://webapp.saweblia.ma/utilisateurs',
            type: 'POST',
            data: JSON.stringify(arr),
            contentType: 'application/json; charset=utf-8',
            dataType: 'json',
            async: false,
            success: function(msg) {
              
                
                }
            
        });
       
    })
    $('#btn-edit').click(function(){
        var arr={
                nom:$('#nom').val(),
                interne:$('#interne').is(":checked"),
                login:$('#login').val(),
                mot_de_passe:$('#mot_de_passe').val()}
        
        $.ajax({
            url: 'http://webapp.saweblia.ma/utilisateurs/'+localStorage.getItem('idUserEdited'),
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
})
function deleteClient(idUser) {
    if (confirm('Voulez-vous vraiment supprimer cet utilisateur ?'))
    $.ajax({
        url: 'http://webapp.saweblia.ma/utilisateurs/'+idUser,
        type: 'DELETE',
        success: function(msg) {
            $('#message').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button>Client supprimé avec succés</div>')
        }
    });
}
function block(UserId) {
    
    var arr={}
   var checkbox=$('#check'+UserId).is(":checked")
 $.getJSON('http://webapp.saweblia.ma/utilisateurs/'+UserId, function (data){
   arr={
    UtilisateurID:UserId,
        nom:data.Nom,
        interne:data.Interne,
        login:data.Login,
        mot_de_passe:data.MotDePasse,
       
        activer:checkbox
    }
    $.ajax({
        url: 'http://webapp.saweblia.ma/utilisateurs/'+UserId,
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
function modiferUtilisateurForm(idUser) {
    localStorage.setItem('idUserEdited', idUser)
    window.location.replace("../Utilisateur/editUtilisateur.php")
}
 