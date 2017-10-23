
var numCards = 0;
$('.save-btn').on('click', function() {
    var title = $('#title-input').val();
    var body = $('#body-input').val();

    $( ".bottom-box" ).prepend( 
            '<div id="card' + numCards + '" class="cardContainer"><h2 class="title-of-card"></h2>' 
            +'<p class="body-of-card"></p><hr></div>');

    $('#card' + numCards + ' .title-of-card').html(title);
    $('#card' + numCards + ' .body-of-card').html(body);

    numCards++;
});

/* Data Model

2. Add quality to each card. 
    - Concatenate in the prepend
3. Add settings to quality and make default be the lowest (swill).
    - If else, that adds a class so that the original class if the 
        click a button or removes a class if they click a button.

User Flows
1. Users see a list of all existing ideas.
    - All ideas stay on the page at refresh, including title, body, and quality.

Adding a New Idea
1. The text fields should be cleared when entering a new idea.
    - Set inner text to be an empty string on click.
2. The idea should be removed from localStorage.
    - JSON?? Look it up!

Deleting an Existing Idea.
1. Add a delete button
    - Concatenating this button to the prepend function. 
    -  With an event listener on the parent class, 
    if (event.target.className === 'delete'){
    event.target.closest('article').remove();
    countBookmarks();
2. The idea should be removed from localStorage.

Changing the quality of an idea
1. Concatenate downvote and upvote images in prepend function.
2. If else statement, upvote adds a class .plausible. if .plausible exists, add .genuis
3. If else statement, downvote removes .genuis or .plausible.

*/