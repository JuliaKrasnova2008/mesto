const editElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__close');
const popupSubmitAddElem = popupElem.querySelector('.popup__submit-btn');
const nameElem = popupElem.querySelector('.popup__name');
const aboutElem = popupElem.querySelector('.popup__about');

editElem.addEventListener('click', () => {
    popupElem.classList.add('popup_opened');
});

popupCloseElem.addEventListener('click', () => {
    popupElem.classList.remove('popup_opened');
});

popupSubmitAddElem.addEventListener('click', () => {
    let nameText = nameElem.value;
    let aboutText = aboutElem.value;
    document.querySelector('.profile__title').textContent = nameText;
    document.querySelector('.profile__subtitle').textContent = aboutText;
    popupElem.classList.remove('popup_opened');

});

popupElem.addEventListener('click', (even) => {
    if (even.target === even.currentTarget) {
        popupElem.classList.remove('popup_opened');
    }
})

const favoriteElem = document.querySelectorAll('.elements__favorite');
favoriteElem.forEach(function (favorite) {
    favorite.addEventListener('click', (event) => {
        event.target.classList.toggle('elements__favorite_active');
    });
});





