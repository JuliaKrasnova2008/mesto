export default class Api {
    constructor(options) {
        this._baseUrl = options.baseUrl
        this._headers = options.headers
    }
    //функция, которая обрабатывает ответ от сервера
    _handleResponse(response) { //принимает ответ от сервера
        if (response.ok) {
            return response.json(); //парсинг, переводим json в форма понятный для js
        }
        return Promise.reject(`Произошла ошибка: ${response.status}`); //отлавливаем ошибку
    }
    //функция, которая отправляет запрос на сервер
    _request(url, options) {
        //ассинхронный запрос на сервер
        return fetch(url, options).then(this._handleResponse);

    }
    //Загрузка информации о пользователе с сервера
    getUserInfo() {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'GET',
            headers: this._headers
        })
    }
    //Загрузка карточек с сервера
    getAllCards() {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'GET',
            headers: this._headers
        })
    }
    //Редактирование профиля
    setUserInfo(data) {
        return this._request(`${this._baseUrl}/users/me`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                name: data.userName,
                about: data.aboutUser
            })
        })
    }

    //Добавление новой карточки
    addNewCard(data) {
        return this._request(`${this._baseUrl}/cards`, {
            method: 'POST',
            headers: this._headers,
            body: JSON.stringify({
                name: data.titleForm,
                link: data.linkForm
            })
        })

    }

    //Удаление карточки
    deleteCard(id) {
        return this._request(`${this._baseUrl}/cards/${id}`, {
            method: 'DELETE',
            headers: this._headers
        })

    }

    //Постановка лайка
    likeCard(id) {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'PUT',
            headers: this._headers
        })
    }

    //Снятие лайка
    dislikeCard(id) {
        return this._request(`${this._baseUrl}/cards/${id}/likes`, {
            method: 'DELETE',
            headers: this._headers
        })
    }

    //Обновление аватара пользователя
    setAvatar(data) {
        return this._request(`${this._baseUrl}/users/me/avatar`, {
            method: 'PATCH',
            headers: this._headers,
            body: JSON.stringify({
                avatar: data.linkForm
            })
        })
    }
}

