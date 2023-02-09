import './index.css'; // добавили импорт главного файла стилей

import Card from "../components/Card.js"
import FormValidator from "../components/FormValidator.js"
import { cardConfig, config } from "../utils/data.js"
import Section from "../components/Section.js"
import PopupWithForm from "../components/PopupWithForm.js"
import PopupWithImage from "../components/PopupWithImage.js"
import UserInfo from "../components/UserInfo.js"
import Api from '../components/Api';
import PopupWithDelete from '../components/PopupWithDelete';

const popupProfileOpenButton = document.querySelector(".profile__edit-button");
const popupProfileForm = document.querySelector(".form_type_profile");
const popupAddOpenButton = document.querySelector(".profile__add-button");
const popupAddForm = document.querySelector(".form_type_add");
const btnAvatar = document.querySelector(".profile__overlay");

const api = new Api({
  baseUrl: "https://mesto.nomoreparties.co/v1/cohort-58",
  headers: {
    Authorization: "fbe25dcd-0279-4176-9c2d-7e2f0c13d1bf",
    "Content-Type": "application/json"
  }
})

Promise.all([api.getUserInfo(), api.getAllCards()]).then(([user, cards]) => {
  userInfo.setUserInfo(user)
  section.renderItems(cards)
})

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

//Открытие попапа "Изменить аватар"
btnAvatar.addEventListener("click", () => {
  popupWithAvatar.open();
})

function handleCardClick(name, link) {
  popupWithImage.open(name, link)
}

//Создание карточки
function generateCard(dataCard) {
  const newCard = new Card(dataCard, cardConfig, "#elements-template", handleCardClick, handleDelete, getId, (id) => {
    api.likeCard(id).then((res) => {
      newCard.getLikesCount(res);
      newCard.changeLike(res);
    })
      .catch((error) => {
        console.log(error);
      })
  },
    (id) => {
      api.dislikeCardç(id).then((res) => {
        newCard.getLikesCount(res);
        newCard.changeLike(res);
      })
        .catch((error) => {
          console.log(error);
        })
    })

  return newCard.generateCard();
}

function handleDelete(data, deleteCard) {
  popupWithDelete.open();
  popupWithDelete.setData(data, deleteCard);
}


//метод, который проверяет id пользователя
function getId() {
  return userInfo.getUserId();
}

const profileFormValidator = new FormValidator(config, popupProfileForm)
profileFormValidator.enableValidator();

const placeFormValidator = new FormValidator(config, popupAddForm)
placeFormValidator.enableValidator();

const section = new Section({
  renderer: (card) => {
    return generateCard(card);
    // section.addItem(generateCard(card))
  }
}, '.elements__list');
// section.renderItems();

const userInfo = new UserInfo('.profile__title', '.profile__subtitle', '.profile__avatar');
const popupWithImage = new PopupWithImage({ selector: '.popup_type_img' });
const popupFormProfile = new PopupWithForm({
  selector: '.popup_type_profile', handleSubmitForm: (data) => {
    popupFormProfile.showLoading(true);
    api.setUserInfo(data).then((res) => {
      userInfo.setUserInfo(res)
      popupFormProfile.close()
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupFormProfile.showLoading(false);
      })
  }
});
const popupFormNewCard = new PopupWithForm({
  selector: '.popup_type_add', handleSubmitForm: (data) => {
    popupFormNewCard.showLoading(true);
    api.addNewCard(data).then((res) => {
      section.addItem(res)
      popupFormNewCard.close()
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupFormNewCard.showLoading(false);
      })
  }
});

const popupWithDelete = new PopupWithDelete({
  selector: '.popup_type_delete',
  deleteCardApi: () => {
    const { data, deleteCard } = popupWithDelete.getData();

    api.deleteCard(data._id).then(() => {
      deleteCard();
      popupWithDelete.close();
    })
      .catch((error) => {
        console.log(error);
      })
  }
});

const popupWithAvatar = new PopupWithForm({
  selector: '.popup_type_avatar',
  handleSubmitForm: (data) => {
    popupWithAvatar.showLoading(true);
    api.setAvatar(data).then((res) => {
      userInfo.setUserInfo(res);
      popupWithAvatar.close();
    })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        popupWithAvatar.showLoading(false);
      })
  }
})


//чтобы проставились слушатели событий (клики и тд)
popupWithImage.setEventListeners();
popupFormNewCard.setEventListeners();
popupFormProfile.setEventListeners();
popupWithDelete.setEventListeners();
popupWithAvatar.setEventListeners();


