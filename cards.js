/*$(document).ready(function() {
    for (i = 1; i < albums.size; i++) {
        let album = albums.get("" + i + "");
        let pathMini = ""
        if (album === undefined) {
            dspImg = "";
            dspSerie = "";
            dspAuthor = 0;
            pathMini = "pipboy";
        } else {
            let serie = series.get(album.idSerie);
            let auteur = auteurs.get(album.idAuteur);
            // let name = series.get(series.nom)
            dspSerie = serie.nom;
            dspAuthor = auteur.nom;
            let nomFic = "image/albumsMini/" + serie.nom + "-" + album.numero + "-" + album.titre;
            let price = album.prix;
            let titre = album.titre;
            let author = auteur.nom;

            pathMini = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
            $('#row_cards').append('<div class="card" id="item' + i + '"><div class="card-header"><img id="toto" src="' + pathMini + '.jpg" style="width:100%" id="albumMini"></div><div class="card-body"><p id="messageId"></p><p>"' + titre + '" </p> <p> "---" </p><p>Auteur : "' + author + '"</p><p>Prix :  ' + price + '€ </p></div><button href="#" id="cards_btn"> Lire plus </button></div>');
        }
    }
})
*/
/***********************************************************************************/


let dspImg = $('#cover');
let dspSerie = $('#Serie');
let dspAuthor = $('#Author');
let dspPrice = $('Price');
let tableau = []

let displayCoverOnReady = function(page) {
    book = $('#bookSelect').val()
    for (i = 0; i < book; i++) {
        let album = albums.get(tableau[i]);
        let serie = series.get(album.idSerie);
        let auteur = auteurs.get(album.idAuteur);

        dspSerie = serie.nom;
        dspAuthor = auteur.nom;
        dspPrice = album.prix;

        let nomFic = "image/albumsMini/" + serie.nom + "-" + album.numero + "-" + album.titre;

        pathMini = nomFic.replace(/'|!|\?|\.|"|:|\$/g, "");
        $('#row_cards').append('<div class="card" id="item' + i + '"><div class="card-header"><img id="toto" src="' + pathMini + '.jpg" style="width:100%" id="albumMini"></div><div class="card-body"><p id="messageId"></p><span>"' + dspSerie + '" </span><p>Auteur : "' + dspAuthor + '"</><p>Prix :  ' + dspPrice + '€ </p></div><button href="#" id="cards_btn"> Lire plus </button></div>');
    }
}

let mapToArray = function() {
    let tablo = tableau
    for (i = 0; i < 630; i++) {
        let aRalbum = albums.get("" + i + "");
        if (aRalbum != undefined) {
            tablo.push('' + i + '')
        }
    }
}

$(document).ready(function() {
    mapToArray();
    displayCoverOnReady();
})

$('#bookSelect').change(function() {
    $('#row_cards').empty()
    displayCoverOnReady();
})


/********************************** EXERCICE *************************************/
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

/********************************** EXERCICE FIN *************************************/

































/*class bd {
    constructor(titre = '', nom = '') {
        this.titre = titre
        this.nom = nom
        albums.get = function() {
            return titre
        }
        series.get = function() {
            return nom
        }
    }
/*research() {
}
    $(document).ready(function(e) {
            $('#categoryFilter').keyup(function(e) {
                $('#row_cards').empty();
                var input = $(this);
                // var val = input.val()
                var regexp = '\\b(.*)a(.*)\\b';
                $('#filter').find('span').each(function() {
                    var span = $(this);
                    var resultats = span.text().match(new RegExp(regexp, 'i'));
                    console.log(resultats)
                })
            })
        }
    }*/












































/*class bd {
    constructor(item, key) {

        this.titres = titre
        this.noms = nom

        albums.get = function() {
            return titres
        }
        series.get = function() {
            return noms
        }
    }
}*/