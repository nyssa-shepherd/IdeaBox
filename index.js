var title = $('#title-input').val();
var body = $('#body-input').val();
var numCards = 0;
qualityVariable = "swill";

// $('#title-input').on('keyup', function() {
//     if (title === "" || body === "") {
//         ;
//     }  
// })

var newCard = function(id , title , body , quality) {
    return '<div id="' + id + '"class="card-container"><h2 class="title-of-card">'  
            + title +  '</h2>'
            + '<button class="delete-button"></button>'
            +'<p class="body-of-card">'
            + body + '</p>'
            + '<button class="upvote"></button>' 
            + '<button class="downvote"></button>' 
            + '<p class="quality">' + 'quality:' + '<span class="qualityVariable">' + quality + '</span>' + '</p>'
            + '<hr>' 
            + '</div>';
};

function cardObject() {
    return {
        title: $('#title-input').val(),
        body: $('#body-input').val(),
        quality: qualityVariable
    };
}

$('.save-btn').on('click', function(event) {
    event.preventDefault();
    console.log('#body-input');
    console.log('#title-input');
    if ($('#title-input').val() === "" || $('#body-input').val() === "") {
       return false;
    };  
    numCards++;
    $( ".bottom-box" ).prepend(newCard('card' + numCards, $('#title-input').val(), $('#body-input').val(), qualityVariable)); 
    localStoreCard();
    $('form')[0].reset();
});

$.each(localStorage, function(key) {
    var cardData = JSON.parse(this);
    numCards++;
    $( ".bottom-box" ).prepend(newCard(key, cardData.title, cardData.body, cardData.quality));
});

var localStoreCard = function() {
    var cardString = JSON.stringify(cardObject());
    localStorage.setItem('card' + numCards  , cardString);
}


$(".bottom-box").on('click', function(event){
    var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
    var qualityVariable;

    // Case 1: user clicks up or down
    if (event.target.className === "upvote" || event.target.className === "downvote"){

        if (event.target.className === "upvote" && currentQuality === "plausible"){
            qualityVariable = "genius";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "upvote" && currentQuality ==="swill") {
            qualityVariable = "plausible";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
               
        } else if (event.target.className === "downvote" && currentQuality ==="plausible") {
            qualityVariable = "swill"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality ==="genius") {
            qualityVariable = "plausible"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
        }

    var cardHTML = $(event.target).closest('.card-container');
    var cardHTMLId = cardHTML[0].id;
    var cardObjectInJSON = localStorage.getItem(cardHTMLId);
    var cardObjectInJS = JSON.parse(cardObjectInJSON);

    cardObjectInJS.quality = qualityVariable;

    var newCardJSON = JSON.stringify(cardObjectInJS);
    localStorage.setItem(cardHTMLId, newCardJSON);

    }

    // Case 2: user click on delete    
     else if (event.target.className === "delete-button") {
        var cardHTML = $(event.target).closest('.card-container').remove();
        var cardHTMLId = cardHTML[0].id;
        localStorage.removeItem(cardHTMLId);
    }
});


// An event listener on the bottom half. If the target of
// the click is upvote or downvote, change the value of 
// the qualityVariable variable accordingly.


   



// $('delete-button')on.('click',function(){
//delete function goes here //
// });

// 
// User Flows
// 1. Users see a list of all existing ideas.
//     - All ideas stay on the page at refresh, including title, body, and quality.

// Adding a New Idea

// 2. The idea should be added localStorage.
//     - JSON?? Look it up!

// Deleting an Existing Idea.

// 2. The idea should be removed from localStorage.







