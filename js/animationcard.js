let lastClickedCard = null;

function showPopup(card, logo, title, description) {
    let popup = document.getElementById('pop-up-animation');

    if (popup.classList.contains('active')) return;

    document.querySelectorAll('.card-animation').forEach(card => {
        card.classList.add('disabled');
    });

    lastClickedCard = card;

    card.classList.add('shrinking');

    setTimeout(() => {
        document.getElementById('popup-logo').src = logo;
        document.getElementById('popup-title').textContent = title;
        document.getElementById('popup-description').textContent = description;

        popup.classList.add('active');
    }, 500);
}

function closePopup() {
    let popup = document.getElementById('pop-up-animation');

    popup.classList.remove('active');

    if (lastClickedCard) {
        setTimeout(() => {
            lastClickedCard.classList.remove('shrinking');
        }, 500);
    }

    document.querySelectorAll('.card-animation').forEach(card => {
        card.classList.remove('disabled');
    });
}