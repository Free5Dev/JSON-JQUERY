$.get('article.json', function(data){
    console.log(data);
});

$.ajax({
    url: 'article.json',
    dataType: 'json',
    type: 'get', 
    cache: false,
    success: function(data){
        $(data.articles).each(function(index, value){
            // var response=JSON.stringify(value);
            // console.log(JSON.parse(response).name);
            $("#tdata").append("<tr>"+
                "<td>"+value.id+"</td>"+
                "<td>"+value.name+"</td>"
            +"</tr>");
            console.log(value.name)
        });
        
    }
});