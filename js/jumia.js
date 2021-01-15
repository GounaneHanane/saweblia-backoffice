$(document).ready(function () {
  $.ajax({
    url: "../jumiaData.php",
    type: "POST",
    async: false,
    success: function (msg) { 
        var data =JSON.parse(msg)
        data.forEach(jumia => { $('#jumia-table').append('<tr>')
        if(jumia[1]!=null)
            $('#jumia-table').append("<td>"+jumia[1]+"</td>")
        else $('#jumia-table').append("<td></td>")
        if(jumia[2]!=null)
            $('#jumia-table').append("<td>"+jumia[2]+"</td>")
        else $('#jumia-table').append("<td></td>")
        if(jumia[3]!=null)
            $('#jumia-table').append("<td>"+jumia[3]+"</td>")
        else $('#jumia-table').append("<td></td>")
        if(jumia[4]!=null)
            $('#jumia-table').append("<td>"+jumia[4]+"</td>")
        else $('#jumia-table').append("<td></td>")
        });
        console.log(data)},
  });
});
