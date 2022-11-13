const editElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__content');
const nameElem = popupElem.querySelector('.popup__text_name');
const aboutElem = popupElem.querySelector('.popup__text_about');
const titleElem = document.querySelector('.profile__title');
const subtitleElem = document.querySelector('.profile__subtitle');

function popupOpenClose() {
    popupElem.classList.toggle('popup_opened');
}

editElem.addEventListener('click', () => {
    nameElem.value = titleElem.textContent;
    aboutElem.value = subtitleElem.textContent;
    popupOpenClose();
});

popupCloseElem.addEventListener('click', () => {
    popupOpenClose();
});

popupForm.addEventListener('submit', () => {
    titleElem.textContent = nameElem.value;
    subtitleElem.textContent = aboutElem.value;
    popupOpenClose();
});

popupElem.addEventListener('click', (even) => {
    if (even.target === even.currentTarget) {
        popupOpenClose();
    }
})

const favoriteElem = document.querySelectorAll('.elements__favorite');
favoriteElem.forEach(function (favorite) {
    favorite.addEventListener('click', (event) => {
        event.target.classList.toggle('elements__favorite_active');
    });
});





