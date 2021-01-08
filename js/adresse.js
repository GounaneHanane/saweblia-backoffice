$(document).ready(function(){
    $.getJSON('http://webapp.saweblia.ma/clients/'+localStorage.getItem('idClient'), function (data){
        $('#nom').val(data.Nom)
        $('#tel').val(data.Telephone),
        $('#canal').val(data.CanalAcquisition),
        $('#email').val(data.Email),
        $('#type').val(data.Type),
        $('#comment').val(data.Comment)
    });
})