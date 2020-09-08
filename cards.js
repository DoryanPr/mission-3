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






$('#searchValue').keyup(function () {
    $('#row_cards').empty();

    /**
     * @type {string} This variable is to be injected into searchRegex, hence "^" at the beginning.
     * The variable will receive user's inputs from the #searchValue bar.
     */
    let recherche = "^";
    /**
     * @type {Object} Regular Expression made to control user input before injecting it
     * into searchRegex.
     */
    let verifSearch = new RegExp('\\b(.*)a(.*)\\b');
    /**
     * @type {Object} Dynamically generated regular expression used to find matches in series database
     */
    let searchRegex;

    if (verifSearch.test($('#searchValue').val().toLowerCase())) {
        recherche += $('#searchValue').val().toLowerCase();
        searchRegex = new RegExp(recherche);
    }
    if (recherche != "^") {
        for (let y = 0; y < series.length; y++ ) {
            if (searchRegex.test(series[y].nom.toLowerCase())) {
                $('#row_cards').append('<div class="card" id="item' + i + '"><div class="card-header"><img id="toto" src="' + pathMini + '.jpg" style="width:100%" id="albumMini"></div><div class="card-body"><p id="messageId"></p><span>"' + dspSerie + '" </span><p>Auteur : "' + dspAuthor + '"</><p>Prix :  ' + dspPrice + '€ </p></div><button href="#" id="cards_btn"> Lire plus </button></div>');
            }
        }
        if ($('#row_cards').is(':empty')) {
            $('#row_cards').append('<h1> Not Found ! </h1>');
        }
    }
    else {
        defaultAffichage(1);
    }
});

































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