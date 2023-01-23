import './styles/index.css'; // добавили импорт главного файла стилей

import Card from "./Card.js"
import FormValidator from "./FormValidator.js"
import { initialCards } from "./utils/data.js"
import Section from "./Section.js"
import PopupWithForm from "./PopupWithForm.js"
import PopupWithImage from "./PopupWithImage.js"
import UserInfo from "./UserInfo.js"

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

const popupProfileOpenButton = document.querySelector(".profile__edit-button");

const popupProfileForm = document.querySelector(".form_type_profile");

const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector(".form_type_add");

export const popupImages = document.querySelector(".popup_type_img");
export const popupImagesFotoCard = popupImages.querySelector(".popup__image-preview");
export const popupImagesTitle = popupImages.querySelector(".popup__title-img");

//Открытие попапа "Добавить"
popupAddOpenButton.addEventListener("click", () => {
  popupFormNewCard.open();
});

//Открытие попапа "Редактировать"
popupProfileOpenButton.addEventListener("click", () => {
  popupFormProfile.setInputValues(userInfo.getUserInfo())
  popupFormProfile.open();
});


function handleCardClick(name, link) {
  popupWithImage.open(name, link)
}

//Создание карточки
function generateCard(dataCard) {
  const newCard = new Card(dataCard, cardConfig, "#elements-template", handleCardClick)

  return newCard.generateCard();
}

const profileFormValidator = new FormValidator(config, popupProfileForm)
profileFormValidator.enableValidator();

const placeFormValidator = new FormValidator(config, popupAddForm)
placeFormValidator.enableValidator();

const section = new Section({
  items: initialCards, renderer: (card) => {
    section.addItem(generateCard(card))
  }
}, '.elements__list');
section.renderItems();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle');
const popupWithImage = new PopupWithImage({ selector: '.popup_type_img' });
const popupFormProfile = new PopupWithForm({
  selector: '.popup_type_profile', handleSubmitForm: (data) => {
    userInfo.setUserInfo(data);
    popupFormProfile.close();
  }
});
const popupFormNewCard = new PopupWithForm({
  selector: '.popup_type_add', handleSubmitForm: (data) => {
    const newCard = { name: data.titleForm, link: data.linkForm }
    section.addItem(generateCard(newCard));
    popupFormNewCard.close();
  }
});

//чтобы проставились слушатели событий (клики и тд)
popupWithImage.setEventListeners();
popupFormNewCard.setEventListeners();
popupFormProfile.setEventListeners();