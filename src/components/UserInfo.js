export default class UserInfo {
    constructor(nameSelector, infoSelector, avatarSelector) {
        this._userName = document.querySelector(nameSelector);
        this._userInfo = document.querySelector(infoSelector);
        this._avatar = document.querySelector(avatarSelector)
    }
    //возвращает объект с данными о пользователе
    getUserInfo() {
        return {
            userName: this._userName.textContent,
            aboutUser: this._userInfo.textContent
        };

    }
    //принимает в себя данные и добавляет их на страницу
    setUserInfo(data) {
        this._userName.textContent = data.name ? data.name : '';
        this._userInfo.textContent = data.about ? data.about : '';
        this._avatar.src = data.avatar ? data.avatar : '';
        this._userId = data._id;
    }

    //возвращает ID пользователя
    getUserId() {
        return this._userId;
    }

}