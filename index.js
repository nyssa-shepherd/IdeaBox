var numCards = 0;

var newCard = function(card) {
    $( ".bottom-box" ).prepend(
                '<div id="' + card.id + '"class="card-container"><h2 class="title-of-card">'  
                + card.title +  '</h2>'
                + '<button class="delete-button"></button>'
                +'<p class="body-of-card">'
                + card.body + '</p>'
                + '<button class="upvote"></button>' 
                + '<button class="downvote"></button>' 
                + '<p class="quality">' + 'quality:' + '<span class="qualityVariable">' + card.quality + '</span>' + '</p>'
                + '<hr>' 
                + '</div>'
        )
};

function CardObject(id, title, body) {
    this.id = id;
    this.title = title;
    this.body = body;
    this.quality = 'swill'
}

$.each(localStorage, function(index, value) {
    newCard(JSON.parse(value));
});

var localStoreCard = function(card) {
    localStorage.setItem(card.id, JSON.stringify(card));
}

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    if ($('#title-input').val() === "" || $('#body-input').val() === "") {
       return false;
    };  

    numCards++;
    var card = new CardObject('card' + numCards, $('#title-input').val(), $('#body-input').val());
    newCard(card); 
    localStoreCard(card);
    $('form')[0].reset();
});

$(".bottom-box").on('click', function(event){
    var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
    var qualityVariable;

    if (event.target.className === "upvote" || event.target.className === "downvote"){

        if (event.target.className === "upvote" && currentQuality === "plausible"){
            qualityVariable = "genius";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "upvote" && currentQuality === "swill") {
            qualityVariable = "plausible";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "downvote" && currentQuality === "plausible") {
            qualityVariable = "swill"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality === "genius") {
            qualityVariable = "plausible"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality === "swill") {
            qualityVariable = "swill";
        
        } else if (event.target.className === "upvote" && currentQuality === "genius") {
            qualityVariable = "genius";
        }

    var cardHTML = $(event.target).closest('.card-container');
    var cardHTMLId = cardHTML[0].id;
    var cardObjectInJSON = localStorage.getItem(cardHTMLId);
    var cardObjectInJS = JSON.parse(cardObjectInJSON);

    cardObjectInJS.quality = qualityVariable;

    var newCardJSON = JSON.stringify(cardObjectInJS);
    localStorage.setItem(cardHTMLId, newCardJSON);
    }
   
    else if (event.target.className === "delete-button") {
        var cardHTML = $(event.target).closest('.card-container').remove();
        var cardHTMLId = cardHTML[0].id;
        localStorage.removeItem(cardHTMLId);
    }
});