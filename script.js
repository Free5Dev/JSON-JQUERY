// $.getJSON('article.json', function(data){
//     console.log(data);
// });

$.ajax({
    url: 'article.json',
    dataType: 'json',
    type: 'get',
    cache: false,
    success: function(data){
        // console.log(data);
        $(data.articles).each(function(index, value){
            console.log(value);
            console.log("Ceic est la valeur du nom: "+value.name);
            console.log("Et ceci est l'identifiant de la valeur: "+value.id);
        });
    }
});