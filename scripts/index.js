const ESC_CODE = "Escape";
const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfile = document.querySelector(".popup_type_profile");
const popupProfileCloseButton = popupProfile.querySelector(
  ".popup__close-button"
);
const popupProfileForm = document.querySelector(".form_type_profile");
const popupProfileFormName = popupProfile.querySelector(
  ".form__input_type_name"
);
const popupProfileFormAbout = popupProfile.querySelector(
  ".form__input_type_about"
);
const profileTitleCard = document.querySelector(".profile__title");
const profileSubtitleCard = document.querySelector(".profile__subtitle");

const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAdd = document.querySelector(".popup_type_add");
const popupAddCloseButton = popupAdd.querySelector(".popup__close-add");
const popupAddForm = document.querySelector(".form_type_add");
const popupAddFormTitle = popupAdd.querySelector(".form__input_type_title-add");
const popupAddFormLink = popupAdd.querySelector(".form__input_type_link-add");
const elementsTitleCard = document.querySelector(".elements__title");
const elementsFotoCard = document.querySelector(".elements__foto");

const popupImages = document.querySelector(".popup_type_img");
const popupImagesCloseButton = popupImages.querySelector(".popup__close-img");
const popupImagesFotoCard = popupImages.querySelector(".popup__image-preview");
const popupImagesTitle = popupImages.querySelector(".popup__title-img");

//Открытие и закрытие попапов
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown",  closeByEsc)
  document.addEventListener("click",  closeByOverlay)

};
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown",  closeByEsc);
  document.removeEventListener("mousedown",  closeByOverlay);
}

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup); 
  }
};
function closeByOverlay (target, currentTarget, object) {
  if (target === currentTarget) {
    closePopup(object);
}
};

//Добавление карточек с использованием template-тегов

//Дом узлы карточки
const elemContainer = document.querySelector(".elements__list");

//Шаблон карточки
const cardTemplate = document
  .querySelector("#elements-template")
  .content.querySelector(".elements__card");

//Генерация карточки
const handleDeleteCard = (event) => {
  event.target.closest(".elements__card").remove(); //target - конккретный элемент, к которому привязано событие
}; //closest - метод, как querySelector, т.е.находит самый ближ элемент по селектору

const handleLikeCard = (event) => {
  event.target.classList.toggle("elements__favorite_active");
};

//Открытие попапа "Картинка"
const popupImgOpen = (event) => {
  popupImagesFotoCard.src = event.target.src; //в переменную "картинка попапа" я добавляю картинку из карточки (нашла событие(картинка),ссылку на картинку)

  popupImagesTitle.textContent = event.target
    .closest(".elements__card")
    .querySelector(".elements__title").textContent;

  popupImagesFotoCard.alt = event.target
    .closest(".elements__card")
    .querySelector(".elements__title").textContent;
  openPopup(popupImages);
};

//Закрытие попапа "Картинка"
popupImagesCloseButton.addEventListener("click", () => {
  closePopup(popupImages);
});
popupImages.addEventListener("click", closeByOverlay);

//Генерация карточки
const generateCard = (dataCard) => {
  const newCard = cardTemplate.cloneNode(true); //cloneNode(true)- копирует элем со всеми вложенными дочерними элементами, (folse) - копирует без внутренних лементов, только родителя

  const name = newCard.querySelector(".elements__title");
  const link = newCard.querySelector(".elements__foto");
  name.textContent = dataCard.name; //обращаюсь к данными через точку объявляю параметр, который мне нужно забрать
  link.src = dataCard.link;
  link.alt = dataCard.name;

  //реализация "удалить" в карточке
  const deleteElem = newCard.querySelector(".elements__delete");
  deleteElem.addEventListener("click", handleDeleteCard); //вешаю на кнопку событие(handleDeleteCard) по клику

  //реализация лайков
  const favoriteElem = newCard.querySelector(".elements__favorite");
  favoriteElem.addEventListener("click", handleLikeCard);

  //открытие попапа "Картинка" по клику на картинку
  const openPopupImg = newCard.querySelector(".elements__foto");
  openPopupImg.addEventListener("click", popupImgOpen);

  return newCard; //возвращает результат выполнения функции generateCard
};

//prepend - метод добавления в род.элемент и сюда добавляем карточку, которая будет сгенерированна функцией generateCard
const renderCard = (dataCard) => {
  elemContainer.prepend(generateCard(dataCard));
};

initialCards.forEach((dataCard) => {
  renderCard(dataCard);
});

//Открытие попапа "Добавить"
popupAddOpenButton.addEventListener("click", () => {
  openPopup(popupAdd);
});
//Закрытие попапа "Добавить"
popupAddCloseButton.addEventListener("click", () => {
  closePopup(popupAdd);
});
popupAdd.addEventListener("click", closeByOverlay);

//Внесение и сохрание изменений "Добавить"
popupAddForm.addEventListener("submit", (event) => {
  renderCard({
    name: popupAddFormTitle.value,
    link: popupAddFormLink.value,
  });
  closePopup(popupAdd);
  popupAddForm.reset(); //сбрасываю значение
  event.preventDefault(); //останавливаю событие на странице
});

//Открытие попапа "Редактировать"
popupProfileOpenButton.addEventListener("click", () => {
  popupProfileFormName.value = profileTitleCard.textContent;
  popupProfileFormAbout.value = profileSubtitleCard.textContent;
  openPopup(popupProfile);
});
//Закрытие попапа "Редактировать"
popupProfileCloseButton.addEventListener("click", () => {
  closePopup(popupProfile);
});
//Внесение и сохрание изменений "Редактировать"
popupProfileForm.addEventListener("submit", (event) => {
  profileTitleCard.textContent = popupProfileFormName.value;
  profileSubtitleCard.textContent = popupProfileFormAbout.value;
  closePopup(popupProfile);
  event.preventDefault(); //останавливаю событие на странице
});
popupProfile.addEventListener("click", closeByOverlay);
