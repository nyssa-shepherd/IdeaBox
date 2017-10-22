$('.save-btn').on('click', function() {
    $('#title-input').text('titleOfCard');
    $('#body-input').text('bodyOfCard');
})


$('.save-btn').on('click', function() {
    var newCard = document.createElement('article');
        newCard.classList.add('cards')
        newCard.innerHTML = `
        <p class="title">${titleOfCard.value}</p>
        <p class="url"><a target="_blank" href="${bodyOfCard.value}">${bodyOfCard.value}</a></p>
    `

        (newCard).prepend($('bottom-box'));
    }
})