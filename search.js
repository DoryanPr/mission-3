/*
console.log(albums) //permet d'accéder a album dans la console et ouvrir un menu déroulant expliquant le tableau
console.log(albums.get('8').titre) // Je récupère id 8 de l'album map / .titre = je récupere le titre. Pour récupérer l'album il faut faire une boucle
console.log(albums.get('8').idAuteur) // Pour chercher l'auteur je récupere son id = (idAuteur) = 10 dans album.js
var tutu = albums.get('8').idAuteur // Je récupère  id auteur dans une variable. id = tutu
console.log(auteurs.get(tutu).nom) //plutot que utiliser l'id j'utilise la variable
console.log(auteurs.get('10').nom) // j'utilise cet id (10) + .nom pour avoir le nom de l'auteur
var valeurs = $('#id').val() // récupéré le id décidé par l'utilisateur et lui donne une valeur
console.log(valeurs)
for (let [key, value] of series) { // boucle qui récupere l'Id et nom de chaque serie
    console.log(key);
    console.log(value.nom);

}

*/



$('#searchValue').keyup(function() {
    $('#row_cards').empty();
    for (i = 1; i < albums.size; i++) {
        var album = albums.get("" + i + "");
    }
    console.log(album)
    var serie = albums.get("" + i + "").idSerie
    var nomSerie = series.get(serie).nom
    console.log(nomSerie)

    let recherche = "^";
    let verifSearch = new RegExp('\\b(.*)a(.*)\\b');
    let searchRegex;


    if (verifSearch.test($('#searchValue').val().toLowerCase())) {
        recherche += $('#searchValue').val().toLowerCase();
        searchRegex = new RegExp(recherche);
        console.log(series)

    }
    if (recherche != "^") {
        for (let y = 0; y < series.size; y++) {
            console.log(searchRegex)
            if (searchRegex.test(serie[y].nom.toLowerCase())) {
                console.log(y)
                $('#row_cards').append('<div class="card" id="item' + y + '"><div class="card-header"><img id="toto" src="' + pathMini + '.jpg" style="width:100%" id="albumMini"></div><div class="card-body"><p id="messageId"></p><span>"' + dspSerie + '" </span><p>Auteur : "' + dspAuthor + '"</><p>Prix :  ' + dspPrice + '€ </p></div><button href="#" id="cards_btn"> Lire plus </button></div>');
            }
        }
        if ($('#row_cards').is(':empty')) {
            $('#row_cards').append('<h1> Not Found ! </h1>');
        }
    }
});















































































































/*
$(document).ready(function() {
    $('#categoryFilter').keyup(function() {
        for (i = 1; i < albums.size; i++) {
            let album = albums.get("" + i + "");
        }

      


        var regexp = '\\b(.*)a(.*)\\b';
        $('#filter').each(function() {
            var span = $(this);
            console.log(span)
            var resultats = span.text().match(new RegExp(regexp, 'i'));
            console.log(resultats)

        })

    })
})


*/















/*  $(document).ready(function() {
        $('#categoryFilter').keyup(function() {
            for (i = 1; i < albums.size; i++) {
                let album = albums.get("" + i + "");
            }




            var regexp = '\\b(.*)a(.*)\\b';
            $('#filter').each(function() {
                var span = $(this);
                console.log(span)
                var resultats = span.text().match(new RegExp(regexp, 'i'));
                console.log(resultats)
                if (resultats) {
                    var string = '';
                    for (var i in resultats) {
                        if (i>0){
                            if (i%2==0){
                                string += 
                            }
                        }
                    }
                }

            })

        })
    })

*/