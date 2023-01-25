import './index.css'; // добавили импорт главного файла стилей

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { initialCards, cardConfig, config } from "../utils/data.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"

const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfileForm = document.querySelector(".form_type_profile");
const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector(".form_type_add");

//Открытие попапа "Добавить"
popupAddOpenButton.addEventListener("click", () => {
  placeFormValidator.resetValidation();
  popupFormNewCard.open();
});

//Открытие попапа "Редактировать"
popupProfileOpenButton.addEventListener("click", () => {
  popupFormProfile.setInputValues(userInfo.getUserInfo());
  profileFormValidator.resetValidation();
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