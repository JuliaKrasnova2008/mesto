export default class Card {
    constructor(data, cardConfig, templateSelector, handleCardClick, handleDelete, getId, likeCardApi, dislikeCardApi) {
        this._data = data;
        this._name = data.name;
        this._link = data.link;
        this._templateSelector = templateSelector;
        this._titleSelector = cardConfig.titleSelector;
        this._imgSelector = cardConfig.imgSelector;
        this._btnLikeSelector = cardConfig.btnLikeSelector;
        this._btnDeleteSelector = cardConfig.btnDeleteSelector;
        this._handleCardClick = handleCardClick;
        this._handleDelete = handleDelete;
        this._getId = getId;
        this._likeCardApi = likeCardApi;
        this._dislikeCardApi = dislikeCardApi;
        this._isLike = data.likes.length !== 0 ? data.likes.find(item => item._id == this._getId()) : false;
    }
    //функция, которая генерит шаблон карточки
    _createTemplate() {
        const template = document.querySelector(this._templateSelector).content
        const card = template.querySelector(".elements__card").cloneNode(true)

        return card;
    }

    //метод для заполнения данными карточки
    _setData() {
        this._btnLike = this._cardElem.querySelector(this._btnLikeSelector)
        const title = this._cardElem.querySelector(this._titleSelector)
        this._img = this._cardElem.querySelector(this._imgSelector)

        title.textContent = this._name;
        this._img.src = this._link;
        this._img.alt = this._name;

        this._isLike ? this._btnLike.classList.add('elements__favorite_active') : null;
    }


    //метод, который удаляет карточку
    _deleteCard() {
        this._cardElem.remove()
        this._cardElem = null;
        this._btnLike = null;
        this._img = null;

    }

    //метод для проставления слушателей событий
    _setListeners() {
        this._btnLike.addEventListener('click', () => this._changeLikeApi(this._data))
        this._deleteBtn.addEventListener('click', () => this._handleDelete(this._data, this._deleteCard.bind(this)))
        this._img.addEventListener('click', () => this._handleCardClick(this._name, this._link))

    }


    //метод для получение html-элементов
    _getElements() {
        this._likesCount = this._cardElem.querySelector('.elements__favorite-num');
        this._deleteBtn = this._cardElem.querySelector(this._btnDeleteSelector);
    }


    //метод, который проверяет владельца карточки
    _isOwner(data) {
        if (data.owner._id !== this._getId()) {
            this._deleteBtn.remove();
        }

    }

    //метод, который считает кол-во лайков
    getLikesCount(data) {
        this._likesCount.textContent = data.likes.length;
    }

    //метод, который меняет состояние лайка
    changeLike(data) {
        const res = data.likes.some((elem) => {
            return elem._id === this._getId();
        })
        if (!res) {
            this._dislikeCard();
        } else {
            this._likeCard();
        }
    }
    //метод проставляет лайки
    _likeCard() {
        this._btnLike.classList.add('elements__favorite_active')
    }
    //метод удаляет лайки
    _dislikeCard() {
        this._btnLike.classList.remove('elements__favorite_active')
    }

    //метод, который меняет состояние лайка на сервере
    _changeLikeApi(data) {
        if(this._btnLike.classList.contains('elements__favorite_active')) {
            this._dislikeCardApi(data._id);
        } else {
            this._likeCardApi(data._id);
        }
    }

    //метод создания карточки из шаблона(публичный метод)
    generateCard() {
        this._cardElem = this._createTemplate();
        this._getElements();
        this._isOwner(this._data);
        this.getLikesCount(this._data);
        this._setData();
        this._setListeners();

        return this._cardElem;
    }




}