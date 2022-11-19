const editElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const nameElem = popupElem.querySelector('.popup__text_type_name');
const aboutElem = popupElem.querySelector('.popup__text_type_about');
const titleElem = document.querySelector('.profile__title');
const subtitleElem = document.querySelector('.profile__subtitle');

const initialCards = [
    {
        name: 'Архыз',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
        name: 'Челябинская область',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
        name: 'Иваново',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
        name: 'Камчатка',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
        name: 'Холмогорский район',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
        name: 'Байкал',
        link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
];

//Дом узлы
const elemContainer = document.querySelector('.elements__list');

//Добавление карточки
const renderCard = (dataCard) => {
    elemContainer.insertAdjacentHTML('afterbegin',
        `<li class="elements__card">
    <img class="elements__foto" src=${dataCard.link}>
    <div class="elements__item">
      <h2 class="elements__title">${dataCard.name}</h2>
      <button class="elements__favorite" type="button" aria-label="Нравится"></button>
    </div>
   </li>`)
};

initialCards.forEach((dataCard) => {
    renderCard(dataCard);
});





//Заготовка для карточек
/* <li class="elements__card">
 <img class="elements__foto">
 <div class="elements__item">
   <h2 class="elements__title"></h2>
   <button class="elements__favorite" type="button" aria-label="Нравится"></button>
 </div>
</li>


/*Делали с Артемом
function createCard(cardElem) {
const divElem = document.createElement('div');
}
function openCards() {
for (let i=0; i<initialCards.length; i++) {
   createCard(initialCards[i]);
}
};
window.onload = function () { 
   openCards();
};*/


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

popupForm.addEventListener('submit', (event) => {
    titleElem.textContent = nameElem.value;
    subtitleElem.textContent = aboutElem.value;
    popupOpenClose();
    event.preventDefault(); //останавливаю событие на странице
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





