var title = $('#title-input').val();
var body = $('#body-input').val();


qualityVariable = "swill";
function UniqueCard() {
    var title = $('#title-input').val();
    var body = $('#body-input').val();
    var quality = qualityVariable;
    console.log('hello');
    console.log($('#title-input').val());

    }
// name the function and remove it from the event listener. Add the event listener to the top 
// of the code, and call the function in it. Declare the function later in the code. 
var numCards = 0;
$('.save-btn').on('click', function() {
    

    $( ".bottom-box" ).prepend( 
        '<div id="card' + numCards + '"class="card-container"><h2 class="title-of-card">'  
        + $('#title-input').val()+  '</h2>'
        + '<button class="delete-button"></button>'
        +'<p class="body-of-card">'
        + $('#body-input').val() + '</p>'
        + '<button class="upvote"></button>' 
        + '<button class="downvote"></button>' 
        + '<p class="quality">' + 'quality:' + '<span class="qualityVariable"> swill <span>' + '<p>'
        + '<hr>' 
        + '</div>')
    
    numCards++;
    UniqueCard();

console.log(UniqueCard.title)
// console.log(UniqueCard.body)
// console.log(UniqueCard.quality)

        event.preventDefault();
        $('form')[0].reset();
    });

    


    $(".bottom-box").on('click', function(event){
        var currentQuality = $($(event.target).siblings('p.quality').children()[0]).text().trim();
        var qualityVariable;
        if (event.target.className === "upvote" && currentQuality === "plausible"){
            qualityVariable = "genius";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
           
         } else if (event.target.className === "upvote" && currentQuality ==="swill") {
            qualityVariable = "plausible";
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);
           
        } else if (event.target.className === "downvote" && currentQuality ==="plausible")
            {qualityVariable = "swill"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "downvote" && currentQuality ==="genius")
            {qualityVariable = "plausible"
            $($(event.target).siblings('p.quality').children()[0]).text(qualityVariable);

        } else if (event.target.className === "delete-button") {
            $(event.target).closest('.card-container').remove();

        }
});


// An event listener on the bottom half. If the target of
// the click is upvote or downvote, change the value of 
// the qualityVariable variable accordingly.


   



// $('delete-button')on.('click',function(){
//delete function goes here //
// });

//  Data Model
// 1. Generate Unique ID for each card.
//     - Google it!
// 2. Add quality to each card. 
//     - Concatenate in the prepend
// 3. Add settings to quality and make default be the lowest (swill).
//     - If else, that adds a class so that the original class if the 
//         click a button or removes a class if they click a button.

// User Flows
// 1. Users see a list of all existing ideas.
//     - All ideas stay on the page at refresh, including title, body, and quality.

// Adding a New Idea
// 1. The text fields should be cleared when entering a new idea.
//     - Set inner text to be an empty string on click.
// 2. The idea should be removed from localStorage.
//     - JSON?? Look it up!

// Deleting an Existing Idea.
// 1. Add a delete button
//     - Concatenating this button to the prepend function. 
//     -  With an event listener on the parent class, 
//     if (event.target.className === 'delete'){
//     event.target.closest('article').remove();
//     countBookmarks();
// 2. The idea should be removed from localStorage.

// Changing the quality of an idea
// 1. Concatenate downvote and upvote images in prepend function.
// 2. If else statement, upvote adds a class .plausible. if .plausible exists, add .genuis
// 3. If else statement, downvote removes .genuis or .plausible.



