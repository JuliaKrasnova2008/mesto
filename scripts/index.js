const editElem = document.querySelector('.profile__edit-button');
const popupElem = document.querySelector('.popup');
const popupCloseElem = popupElem.querySelector('.popup__close');
const popupForm = document.querySelector('.popup__form');
const nameElem = popupElem.querySelector('.popup__text_type_name');
const aboutElem = popupElem.querySelector('.popup__text_type_about');
const titleElem = document.querySelector('.profile__title');
const subtitleElem = document.querySelector('.profile__subtitle');

const addElem = document.querySelector('.profile__add-button');
const popupAddElem = document.querySelector('.popup-add');
const popupAddCloseElem = popupAddElem.querySelector('.popup-add__close');
const popupAddForm = document.querySelector('.popup-add__form');
const titleAddElem = popupAddElem.querySelector('.popup-add__text_type_title');
const linkAddElem = popupAddElem.querySelector('.popup-add__text_type_link');
const titleElemCard = document.querySelector('.elements__title');
const linkElemCard = document.querySelector('.elements__foto');

const popupImgElem = document.querySelector('.popup-img');
const popupImgCloseElem = popupImgElem.querySelector('.popup-img__close');
const linkImgElem = popupImgElem.querySelector('.popup-img__image');
const titleImgElem = popupImgElem.querySelector('.popup-img__title');
const popupImgForm = popupImgElem.querySelector('.popup-img__content');


//Массив
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

//Добавление карточек с использованием template-тегов

//Дом узлы карточки
const elemContainer = document.querySelector('.elements__list');

//Шаблон карточки
const cardTemplate = document.querySelector('#elements-template').content.querySelector('.elements__card');

//Генерация карточки
const handleDeleteCard = (event) => {
    event.target.closest('.elements__card').remove(); //target - конккретный элемент, к которому привязано событие
};  //closest - метод, как querySelector, т.е.находит самый ближ элемент по селектору 

const handleLikeCard = (event) => {
    event.target.classList.toggle('elements__favorite_active');
};

//Открытие попапа "Картинка"
const popupImgOpen = (event) => {
    linkImgElem.src = event.target.src; //в переменную "картинка попапа" я добавляю картинку из карточки (нашла событие(картинка),ссылку на картинку)

    titleImgElem.textContent = event.target.closest('.elements__card').querySelector('.elements__title').textContent;

    popupImgElem.classList.toggle('popup-img_opened');
}

//Закрытие попапа "Картинка"
popupImgCloseElem.addEventListener('click', () => {
    popupImgElem.classList.toggle('popup-img_opened');
});

//Генерация карточки
const generateCard = (dataCard) => {
    const newCard = cardTemplate.cloneNode(true); //cloneNode(true)- копирует элем со всеми вложенными дочерними элементами, (folse) - копирует без внутренних лементов, только родителя

    const name = newCard.querySelector('.elements__title');
    const link = newCard.querySelector('.elements__foto');
    name.textContent = dataCard.name; //обращаюсь к данными через точку объявляю параметр, который мне нужно забрать
    link.src = dataCard.link;


    //реализация "удалить" в карточке
    const deleteElem = newCard.querySelector('.elements__delete');
    deleteElem.addEventListener('click', handleDeleteCard); //вешаю на кнопку событие(handleDeleteCard) по клику

    //реализация лайков
    const favoriteElem = newCard.querySelector('.elements__favorite');
    favoriteElem.addEventListener('click', handleLikeCard);

    //открытие попапа "Картинка" по клику на картинку
    const openPopupImg = newCard.querySelector('.elements__foto');
    openPopupImg.addEventListener('click', popupImgOpen);

    return newCard; //возвращает результат выполнения функции generateCard
}


//prepend - метод добавления в род.элемент и сюда добавляем карточку, которая будет сгенерированна функцией generateCard
const renderCard = (dataCard) => {
    elemContainer.prepend(generateCard(dataCard))
};

initialCards.forEach((dataCard) => {
    renderCard(dataCard);
});

/*Добавление карточки без использования template
const renderCard = (dataCard) => {
    elemContainer.insertAdjacentHTML('afterbegin',
        `<li class="elements__card">
        <button class="elements__delete" type="button" aria-label="Удалить"></button>
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
*/

/*Реализация лайков без использования template
const favoriteElem = document.querySelector('.elements__favorite');
favoriteElem.forEach(function (favorite) {
    favorite.addEventListener('click', (event) => {
        event.target.classList.toggle('elements__favorite_active');
    });
});*/



//Открытие попапа "Добавить"
function popupAddOpenClose() {
    popupAddElem.classList.toggle('popup-add_opened');
}

addElem.addEventListener('click', () => {
    titleAddElem.value;
    linkAddElem.value;
    popupAddOpenClose();
});

//Закрытие попапа "Добавить"
popupAddCloseElem.addEventListener('click', () => {
    popupAddOpenClose();
});


//Внесение и сохрание изменений "Добавить"
popupAddForm.addEventListener('submit', (event) => {
    renderCard({
        name: titleAddElem.value,
        link: linkAddElem.value
    });
    popupAddOpenClose();
    event.preventDefault(); //останавливаю событие на странице
});

//Открытие попапа "Редактировать"
function popupOpenClose() {
    popupElem.classList.toggle('popup_opened');
}

editElem.addEventListener('click', () => {
    nameElem.value = titleElem.textContent;
    aboutElem.value = subtitleElem.textContent;
    popupOpenClose();
});

//Закрытие попапа "Редактировать"
popupCloseElem.addEventListener('click', () => {
    popupOpenClose();
});

//Внесение и сохрание изменений "Редактировать"
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







