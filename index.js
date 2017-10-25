var numCards = 0;
$('.save-btn').on('click', function() {
    var title = $('#title-input').val();
    var body = $('#body-input').val();

    $( ".bottom-box" ).prepend( 
        '<div id="card' + numCards + '"class="card-container"><h2 class="title-of-card">'  
        + $('#title-input').val() + '</h2>'
        + '<p class="body-of-card">'
        + $('#body-input').val() + '</p>'
        + '<button class="delete-button"></button>'
        + '<button class="upvote"></button>' 
        + '<button class="downvote"></button>' 
        + '<p class="quality"> quality: <span class="qualityVariable">swill</span> </p>'
        + '<hr>' 
        + '</div>'
    )

        numCards++;
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

// 
// User Flows
// 1. Users see a list of all existing ideas.
//     - All ideas stay on the page at refresh, including title, body, and quality.

// Adding a New Idea

// 2. The idea should be added localStorage.
//     - JSON?? Look it up!

// Deleting an Existing Idea.

// 2. The idea should be removed from localStorage.







