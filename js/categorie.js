$(document).ready(function () {
  $.getJSON("http://webapp.saweblia.ma/categories", function (data) {
    var i;
    var table = data.Categories;
    $('#categorie-table').DataTable({
      data: table,
      columns: [
        {data: "Libelle"},
        {data: "Description"},
        {
          data: "CategorieMedia",
          render: function(data){
            if (data != null && data !="")
              return "<img width='60' height='60'src='" +window.location.origin +"/saweblia-backoffice/" +data + "'/>"
            else return ""
          }
        },
        {
          data: null,
          render: function(data,row) {
            return '<button onclick="deleteClient(' +
            data.CategorieID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferCategorieForm(' +
            data.CategorieID +
            ')"><span class="material-icons">create</span></button>'
          }
        }
      ],
      "order": [],
            "language": {
                "paginate": {
                  "previous": "Précédent",
                  "next":"Suivant"
                },
                "lengthMenu": "Afficher _MENU_ enregistrements par page",
                "zeroRecords": "Rien n'a été trouvé",
                "info": "Affichage de la page _PAGE_ de _PAGES_",
                "infoEmpty": "Aucun enregistrement disponible",
                "infoFiltered": "(filtré à partir de _MAX_ enregistrements au total)",
                "search": "Recherche :",
              }
    })
    
  });
  $("#add-categorie").click(function () {
    window.location.href="../Categorie/addCategorie.php";
  });
  $("#add-categorie-form").submit(function (e) {
    
  e.preventDefault()
    uploadImageResult=uploadFile( $("#categorieImage"));
    if(uploadImageResult=="success") {
     
        var media
       if($("#categorieImage")[0].files[0]==undefined)
          {  media=""
            $("#categorieImage").attr("disabled",true) }
        else media='Media/Categorie/'+ $("#categorieImage")[0].files[0].name
       
    var arr = {
      libelle: $("#libelle").val(),
      description: $("#description").val(),
      categorie_media:media
    };

    $.ajax({
      url: "http://webapp.saweblia.ma/categories",
      type: "POST",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert(msg);
      },
      error:function(){
        $('.clearfix').html("")
        $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La catégorie est ajoutée avec succes</span></div>')
        setTimeout(function() {
           window.location.href="../Service/categorie.php"
          }, 1000);
      }
    });
  } else if (uploadImageResult=='Not a valid image!')
  {
    $('.clearfix').html("")
    $('.clearfix').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>')
    
  }
  });
  $('#searchbynamecategorie').click(function(){
    $.getJSON('http://webapp.saweblia.ma/categories/'+$('#name-searchcategorie').val(), function (data){
      $("#categorie-table").html("")
      var i;
      var table = data.Categories;
      for (i = 0; i < table.length; i++) {
        $("#categorie-table").append('<tr id="' + table[i].CategorieID + '">');
        if (table[i].Libelle != null)
          $("#categorie-table").append("<td>" + table[i].Libelle + "</td>");
        else $("#categorie-table").append("<td></td>");
        if (table[i].Description != null)
          $("#categorie-table").append("<td>" + table[i].Description + "</td>");
        else $("#categorie-table").append("<td></td>");
        if (table[i].CategorieMedia != null && table[i].CategorieMedia !="")
          $("#categorie-table").append(
            "<td><img width='60' height='60'src="+window.location.origin+"/saweblia-backoffice/" + table[i].CategorieMedia + "'/></td>"
          );
        else $("#categorie-table").append("<td></td>");
        
        $("#categorie-table").append(
          '<td><button onclick="deleteClient(' +
            table[i].CategorieID +
            ')" type="button" class="btn btn-danger action"><span class="material-icons">delete_sweep</span></button><button type="button" class="btn btn-warning action" onclick="modiferCategorieForm(' +
            table[i].CategorieID +
            ')"><span class="material-icons">create</span></button></td></tr>'
        );
      }
    });
})
  $("#edit-categorie-form").submit(function (e) {
    e.preventDefault()
    uploadImageResult=uploadFile( $("#fournitureImage"));
    if(uploadImageResult=="success") {
      var media
     if($("#fournitureImage")[0].files[0]==undefined)
          media=$("#fournitureImage").attr("alt")
      else media='Media/Categorie/'+ $("#fournitureImage")[0].files[0].name
     
    var arr = {
      CategorieID: localStorage.getItem("idCategorieEdited"),
      libelle: $("#libelle").val(),
      description: $("#description").val(),
      categorie_media:media
    };
    $.ajax({
      url:
        "http://webapp.saweblia.ma/categories/" +
        window.location.search.substring(1).split("?"),
      type: "PUT",
      data: JSON.stringify(arr),
      contentType: "application/json; charset=utf-8",
      dataType: "json",
      async: false,
      success: function (msg) {
        alert(msg);
      },error:function(){
        $('.clearfix').html("")
        $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La categorie est modifiée avec succes</span></div>')
        setTimeout(function() {
           window.location.href="../Service/categorie.php"
          }, 1000);
      }
    });
  } else if (uploadImageResult=='Not a valid image!')
  {
    $('.clearfix').html("")
    $('.clearfix').append('<div class="alert alert-danger"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> Merci d\'enter une image valide </span></div>')
    
  }

});
}
)
function deleteClient(idCategorie) {
  if (confirm("Voulez-vous vraiment supprimer cette categorie ?"))
    $.ajax({
      url: "http://webapp.saweblia.ma/categories/" + idCategorie,
      type: "DELETE",
      success: function (msg) {
        $('.clearfix').html("")
        $('.clearfix').append('<div class="alert alert-success"><button type="button" class="close" data-dismiss="alert" aria-label="Close"><i class="material-icons">close</i></button><span> La categorie est supprimée avec succes</span></div>')
        setTimeout(function() {
           window.location.href="../Service/categorie.php"
          }, 1000);
      },
    });
}
function modiferCategorieForm(idCategorie) {
  window.location.href="../Categorie/editCategorie.php?"+idCategorie;
}
function uploadFile(imageFile){
 
  var result="success"

  var input = imageFile;
  file = input[0].files[0];
  if(file != undefined){
    formData= new FormData();
    if(!!file.type.match(/image.*/)){
      formData.append("image", file);
      
      $.ajax({
        url: "../uploadImageCategorie.php",
        type: "POST",
        data: formData,
        processData: false,
        contentType: false,
        success: function(data){
            
           
        },error: function(msg){
          alert(msg)
        }
      });
    }else{
      result = 'Not a valid image!';
    }
  
   
  }
  return result
}
