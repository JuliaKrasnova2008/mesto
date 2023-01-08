import Card from "./Card.js"
import FormValidator from "./FormValidator.js"

const cardConfig = {
  titleSelector: ".elements__title",
  imgSelector: ".elements__foto",
  btnLikeSelector: ".elements__favorite",
  btnActiveSelector: ".elements__favorite_active",
  btnDeleteSelector: ".elements__delete"
}

const config = {
  formSelector: ".form",
  inputSelector: ".form__input",
  submitButtonSelector: ".form__submit",
  submitButtonSelectorDisable: "form__submit_disable",
  inputErrorClass: "form__input_type_invalid",
  errorClass: "form__input-error_active",
};

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

export const popupImages = document.querySelector(".popup_type_img");
const popupImagesCloseButton = popupImages.querySelector(".popup__close-img");
export const popupImagesFotoCard = popupImages.querySelector(".popup__image-preview");
export const popupImagesTitle = popupImages.querySelector(".popup__title-img");

//Открытие и закрытие попапов
export function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEsc)
  document.addEventListener("click", closeByOverlay)
};
function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEsc);
  document.removeEventListener("mousedown", closeByOverlay);
}

function closeByEsc(evt) {
  if (evt.key === ESC_CODE) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

function closeByOverlay(evt) {
  if (evt.target === evt.currentTarget) {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
};

//Добавление карточек с использованием template-тегов

//Дом узлы карточки
const elemContainer = document.querySelector(".elements__list");

//Закрытие попапа "Картинка"
popupImagesCloseButton.addEventListener("click", () => {
  closePopup(popupImages);
});
popupImages.addEventListener("click", closeByOverlay);

function handleAddNewElement(event) {
  event.preventDefault()
  const card = {
    name: popupAddFormTitle.value,
    link: popupAddFormLink.value
  }
  renderCard(card);
  popupAddForm.reset();
  closePopup(popupAdd);
}

//Создание карточки
function generateCard(dataCard) {
  const newCard = new Card(dataCard, cardConfig, "#elements-template")

  return newCard.generateCard();
}

//prepend - метод добавления в род.элемент и сюда добавляем карточку, которая будет сгенерированна функцией generateCard
const renderCard = (dataCard) => {
  elemContainer.prepend(generateCard(dataCard));
};

function renderCardList() {
  initialCards.forEach((dataCard) => {
    renderCard(dataCard);

  });
}
renderCardList();

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
  handleAddNewElement(event);
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

function handleChangeProfile (event) {
  event.preventDefault();
  profileTitleCard.textContent = popupProfileFormName.value;
  profileSubtitleCard.textContent = popupProfileFormAbout.value;
  closePopup(popupProfile);
}

//Внесение и сохрание изменений "Редактировать"
popupProfileForm.addEventListener("submit", (event) => {
  handleChangeProfile(event);
});
popupProfile.addEventListener("click", closeByOverlay);

const profileFormValidator = new FormValidator(config, popupProfileForm)
profileFormValidator.enableValidator();

const placeFormValidator = new FormValidator(config, popupAddForm)
placeFormValidator.enableValidator();