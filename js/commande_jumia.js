$(document).ready(function () {
    $.ajax({
      url: "../jumiaData.php",
      type: "POST",
      async: false,
      data:{action:'displayCommandes'},
      success: function (msg) { 
          var data =JSON.parse(msg)
          $('#jumia-table').DataTable({
              data:data,
              columns: [
                  {data: 0},
                  {data: 7},
                  {data: 13},
               
                  {data: 4},
                  {data: 5},
                  {data: 6},
                  {data: 24},
                  
                  {data: 8},
              ]
          })
       
      },
    });
})