(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(e,r){for(var n=0;n<r.length;n++){var o=r[n];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(e,(void 0,i=function(e,r){if("object"!==t(e)||null===e)return e;var n=e[Symbol.toPrimitive];if(void 0!==n){var o=n.call(e,"string");if("object"!==t(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(o.key),"symbol"===t(i)?i:String(i)),o)}var i}var r=function(){function t(e,r,n,o,i,u,a,l){var s=this;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._data=e,this._name=e.name,this._link=e.link,this._templateSelector=n,this._titleSelector=r.titleSelector,this._imgSelector=r.imgSelector,this._btnLikeSelector=r.btnLikeSelector,this._btnDeleteSelector=r.btnDeleteSelector,this._handleCardClick=o,this._handleDelete=i,this._getId=u,this._likeCardApi=a,this._dislikeCardApi=l,this._isLike=0!==e.likes.length&&e.likes.find((function(t){return t._id==s._getId()}))}var r,n;return r=t,(n=[{key:"_createTemplate",value:function(){return document.querySelector(this._templateSelector).content.querySelector(".elements__card").cloneNode(!0)}},{key:"_setData",value:function(){this._btnLike=this._cardElem.querySelector(this._btnLikeSelector);var t=this._cardElem.querySelector(this._titleSelector);this._img=this._cardElem.querySelector(this._imgSelector),t.textContent=this._name,this._img.src=this._link,this._img.alt=this._name,this._isLike&&this._btnLike.classList.add("elements__favorite_active")}},{key:"_deleteCard",value:function(){this._cardElem.remove(),this._cardElem=null,this._btnLike=null,this._img=null}},{key:"_setListeners",value:function(){var t=this;this._btnLike.addEventListener("click",(function(){return t._changeLikeApi(t._data)})),this._deleteBtn.addEventListener("click",(function(){return t._handleDelete(t._data,t._deleteCard.bind(t))})),this._img.addEventListener("click",(function(){return t._handleCardClick(t._name,t._link)}))}},{key:"_getElements",value:function(){this._likesCount=this._cardElem.querySelector(".elements__favorite-num"),this._deleteBtn=this._cardElem.querySelector(this._btnDeleteSelector)}},{key:"_isOwner",value:function(t){t.owner._id!==this._getId()&&this._deleteBtn.remove()}},{key:"getLikesCount",value:function(t){this._likesCount.textContent=t.likes.length}},{key:"changeLike",value:function(t){var e=this;t.likes.some((function(t){return t._id===e._getId()}))?this._likeCard():this._dislikeCard()}},{key:"_likeCard",value:function(){this._btnLike.classList.add("elements__favorite_active")}},{key:"_dislikeCard",value:function(){this._btnLike.classList.remove("elements__favorite_active")}},{key:"_changeLikeApi",value:function(t){this._btnLike.classList.contains("elements__favorite_active")?this._dislikeCardApi(t._id):this._likeCardApi(t._id)}},{key:"generateCard",value:function(){return this._cardElem=this._createTemplate(),this._getElements(),this._isOwner(this._data),this.getLikesCount(this._data),this._setData(),this._setListeners(),this._cardElem}}])&&e(r.prototype,n),Object.defineProperty(r,"prototype",{writable:!1}),t}();function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}function o(t,e){for(var r=0;r<e.length;r++){var o=e[r];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(t,(void 0,i=function(t,e){if("object"!==n(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var o=r.call(t,"string");if("object"!==n(o))return o;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(o.key),"symbol"===n(i)?i:String(i)),o)}var i}var i=function(){function t(e,r){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._inputSelector=e.inputSelector,this._submitButtonSelector=e.submitButtonSelector,this._submitButtonSelectorDisable=e.submitButtonSelectorDisable,this._inputErrorClass=e.inputErrorClass,this._errorClass=e.errorClass,this._formElem=r,this._inputArray=Array.from(r.querySelectorAll(this._inputSelector)),this._submitBtn=this._formElem.querySelector(this._submitButtonSelector)}var e,r;return e=t,(r=[{key:"_hasInvalidInput",value:function(){return this._inputArray.some((function(t){return!t.validity.valid}))}},{key:"_toggleButtonState",value:function(){this._hasInvalidInput()?(this._submitBtn.classList.add(this._submitButtonSelectorDisable),this._submitBtn.setAttribute("disabled",!0)):(this._submitBtn.classList.remove(this._submitButtonSelectorDisable),this._submitBtn.removeAttribute("disabled"))}},{key:"_showInputError",value:function(t){var e=this._formElem.querySelector(".".concat(t.id,"-error"));t.classList.add(this._inputErrorClass),e.textContent=t.validationMessage,e.classList.add(this._errorClass)}},{key:"_hideInputError",value:function(t){var e=this._formElem.querySelector(".".concat(t.id,"-error"));t.classList.remove(this._inputErrorClass),e.classList.remove(this._errorClass),e.textContent=""}},{key:"_checkInputValidity",value:function(t){t.validity.valid?this._hideInputError(t):this._showInputError(t)}},{key:"resetValidation",value:function(){var t=this;this._toggleButtonState(),this._inputArray.forEach((function(e){t._hideInputError(e)}))}},{key:"_setListeners",value:function(){var t=this;this._toggleButtonState(),this._formElem.addEventListener("reset",(function(){setTimeout((function(){t._toggleButtonState()}),0)})),this._inputArray.forEach((function(e){e.addEventListener("input",(function(){t._checkInputValidity(e),t._toggleButtonState()}))}))}},{key:"enableValidator",value:function(){this._setListeners()}}])&&o(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}(),u={titleSelector:".elements__title",imgSelector:".elements__foto",btnLikeSelector:".elements__favorite",btnActiveSelector:".elements__favorite_active",btnDeleteSelector:".elements__delete"},a={inputSelector:".form__input",submitButtonSelector:".form__submit",submitButtonSelectorDisable:"form__submit_disable",inputErrorClass:"form__input_type_invalid",errorClass:"form__input-error_active"};function l(t){return l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},l(t)}function s(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==l(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==l(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===l(o)?o:String(o)),n)}var o}var c=function(){function t(e,r){var n=e.renderer;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._container=document.querySelector(r),this._renderer=n}var e,r;return e=t,(r=[{key:"renderItems",value:function(t){var e=this;t.forEach((function(t){e._renderer(t)}))}},{key:"addItem",value:function(t){this._container.prepend(t)}}])&&s(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function f(t){return f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},f(t)}function p(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==f(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==f(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===f(o)?o:String(o)),n)}var o}var y=function(){function t(e){var r=e.selector;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._popup=document.querySelector(r),this._handleEscClose=this._handleEscClose.bind(this)}var e,r;return e=t,(r=[{key:"open",value:function(){this._popup.classList.add("popup_opened"),document.addEventListener("keydown",this._handleEscClose)}},{key:"close",value:function(){this._popup.classList.remove("popup_opened"),document.removeEventListener("keydown",this._handleEscClose)}},{key:"_handleEscClose",value:function(t){"Escape"===t.key&&this.close()}},{key:"setEventListeners",value:function(){var t=this;this._popup.addEventListener("mousedown",(function(e){(e.target.classList.contains("popup__close")||e.target.classList.contains("popup_opened"))&&t.close()}))}}])&&p(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function h(t){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},h(t)}function d(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==h(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==h(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===h(o)?o:String(o)),n)}var o}function m(){return m="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=_(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},m.apply(this,arguments)}function _(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=S(t)););return t}function b(t,e){return b=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},b(t,e)}function v(t,e){if(e&&("object"===h(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function S(t){return S=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},S(t)}var g=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&b(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=S(n);if(o){var r=S(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return v(this,t)});function u(t){var e,r=t.selector,n=t.handleSubmitForm;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,{selector:r}))._handleSubmitForm=n,e._form=e._popup.querySelector("form"),e._inputList=e._form.querySelectorAll(".form__input"),e._btn=e._form.querySelector(".form__submit"),e._btnText=e._btn.textContent,e}return e=u,(r=[{key:"_getInputValues",value:function(){var t={};return this._inputList.forEach((function(e){t[e.name]=e.value})),t}},{key:"setInputValues",value:function(t){this._inputList.forEach((function(e){e.value=t[e.name]}))}},{key:"setEventListeners",value:function(){var t=this;this._form.addEventListener("submit",(function(e){e.preventDefault(),t._handleSubmitForm(t._getInputValues())})),m(S(u.prototype),"setEventListeners",this).call(this)}},{key:"close",value:function(){this._form.reset(),m(S(u.prototype),"close",this).call(this)}},{key:"showLoading",value:function(t){this._btn.textContent=t?"Сохранение ...":this._btnText}}])&&d(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function k(t){return k="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},k(t)}function w(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==k(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==k(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===k(o)?o:String(o)),n)}var o}function E(){return E="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=C(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},E.apply(this,arguments)}function C(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=L(t)););return t}function O(t,e){return O=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},O(t,e)}function j(t,e){if(e&&("object"===k(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function L(t){return L=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},L(t)}var P=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&O(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=L(n);if(o){var r=L(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return j(this,t)});function u(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,t))._popupImg=e._popup.querySelector(".popup__image-preview"),e._popupTitle=e._popup.querySelector(".popup__title-img"),e}return e=u,(r=[{key:"open",value:function(t,e){this._popupTitle.textContent=t,this._popupImg.src=e,this._popupImg.alt=t,E(L(u.prototype),"open",this).call(this)}}])&&w(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function I(t){return I="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},I(t)}function T(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==I(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==I(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===I(o)?o:String(o)),n)}var o}var q=function(){function t(e,r,n){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._userName=document.querySelector(e),this._userInfo=document.querySelector(r),this._avatar=document.querySelector(n)}var e,r;return e=t,(r=[{key:"getUserInfo",value:function(){return{userName:this._userName.textContent,aboutUser:this._userInfo.textContent}}},{key:"setUserInfo",value:function(t){this._userName.textContent=t.name?t.name:"",this._userInfo.textContent=t.about?t.about:"",this._avatar.src=t.avatar?t.avatar:"",this._userId=t._id}},{key:"getUserId",value:function(){return this._userId}}])&&T(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function A(t){return A="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},A(t)}function R(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==A(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==A(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===A(o)?o:String(o)),n)}var o}var B=function(){function t(e){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,t),this._baseUrl=e.baseUrl,this._headers=e.headers}var e,r;return e=t,(r=[{key:"_handleResponse",value:function(t){return t.ok?t.json():Promise.reject("Произошла ошибка: ".concat(t.status))}},{key:"_request",value:function(t,e){return fetch(t,e).then(this._handleResponse)}},{key:"getUserInfo",value:function(){return this._request("".concat(this._baseUrl,"/users/me"),{method:"GET",headers:this._headers})}},{key:"getAllCards",value:function(){return this._request("".concat(this._baseUrl,"/cards"),{method:"GET",headers:this._headers})}},{key:"setUserInfo",value:function(t){return this._request("".concat(this._baseUrl,"/users/me"),{method:"PATCH",headers:this._headers,body:JSON.stringify({name:t.userName,about:t.aboutUser})})}},{key:"addNewCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards"),{method:"POST",headers:this._headers,body:JSON.stringify({name:t.titleForm,link:t.linkForm})})}},{key:"deleteCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t),{method:"DELETE",headers:this._headers})}},{key:"likeCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"PUT",headers:this._headers})}},{key:"dislikeCard",value:function(t){return this._request("".concat(this._baseUrl,"/cards/").concat(t,"/likes"),{method:"DELETE",headers:this._headers})}},{key:"setAvatar",value:function(t){return this._request("".concat(this._baseUrl,"/users/me/avatar"),{method:"PATCH",headers:this._headers,body:JSON.stringify({avatar:t.linkForm})})}}])&&R(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),t}();function D(t){return D="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},D(t)}function U(t,e){for(var r=0;r<e.length;r++){var n=e[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(t,(void 0,o=function(t,e){if("object"!==D(t)||null===t)return t;var r=t[Symbol.toPrimitive];if(void 0!==r){var n=r.call(t,"string");if("object"!==D(n))return n;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(t)}(n.key),"symbol"===D(o)?o:String(o)),n)}var o}function x(){return x="undefined"!=typeof Reflect&&Reflect.get?Reflect.get.bind():function(t,e,r){var n=V(t,e);if(n){var o=Object.getOwnPropertyDescriptor(n,e);return o.get?o.get.call(arguments.length<3?t:r):o.value}},x.apply(this,arguments)}function V(t,e){for(;!Object.prototype.hasOwnProperty.call(t,e)&&null!==(t=J(t)););return t}function N(t,e){return N=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(t,e){return t.__proto__=e,t},N(t,e)}function F(t,e){if(e&&("object"===D(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t)}function J(t){return J=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},J(t)}var G=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&N(t,e)}(u,t);var e,r,n,o,i=(n=u,o=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}(),function(){var t,e=J(n);if(o){var r=J(this).constructor;t=Reflect.construct(e,arguments,r)}else t=e.apply(this,arguments);return F(this,t)});function u(t){var e,r=t.selector,n=t.deleteCardApi;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,u),(e=i.call(this,{selector:r}))._deleteCardApi=n,e._form=e._popup.querySelector(".form_type_delete"),e}return e=u,(r=[{key:"setData",value:function(t,e){this._data=t,this._deleteCard=e}},{key:"getData",value:function(){return{data:this._data,deleteCard:this._deleteCard}}},{key:"setEventListeners",value:function(){var t=this;x(J(u.prototype),"setEventListeners",this).call(this),this._form.addEventListener("submit",(function(e){e.preventDefault(),t._deleteCardApi()}))}}])&&U(e.prototype,r),Object.defineProperty(e,"prototype",{writable:!1}),u}(y);function H(t,e){(null==e||e>t.length)&&(e=t.length);for(var r=0,n=new Array(e);r<e;r++)n[r]=t[r];return n}var M=document.querySelector(".profile__edit-button"),z=document.querySelector(".form_type_profile"),$=document.querySelector(".profile__add-button"),K=document.querySelector(".form_type_add"),Q=document.querySelector(".profile__overlay"),W=document.querySelector(".form_type_avatar"),X=new B({baseUrl:"https://mesto.nomoreparties.co/v1/cohort-58",headers:{Authorization:"fbe25dcd-0279-4176-9c2d-7e2f0c13d1bf","Content-Type":"application/json"}});function Y(t,e){ut.open(t,e)}function Z(t){var e=new r(t,u,"#elements-template",Y,tt,et,(function(t){X.likeCard(t).then((function(t){e.getLikesCount(t),e.changeLike(t)})).catch((function(t){console.log(t)}))}),(function(t){X.dislikeCardç(t).then((function(t){e.getLikesCount(t),e.changeLike(t)})).catch((function(t){console.log(t)}))}));return e.generateCard()}function tt(t,e){st.open(),st.setData(t,e)}function et(){return it.getUserId()}Promise.all([X.getUserInfo(),X.getAllCards()]).then((function(t){var e,r,n=(r=2,function(t){if(Array.isArray(t))return t}(e=t)||function(t,e){var r=null==t?null:"undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(null!=r){var n,o,i,u,a=[],l=!0,s=!1;try{if(i=(r=r.call(t)).next,0===e){if(Object(r)!==r)return;l=!1}else for(;!(l=(n=i.call(r)).done)&&(a.push(n.value),a.length!==e);l=!0);}catch(t){s=!0,o=t}finally{try{if(!l&&null!=r.return&&(u=r.return(),Object(u)!==u))return}finally{if(s)throw o}}return a}}(e,r)||function(t,e){if(t){if("string"==typeof t)return H(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?H(t,e):void 0}}(e,r)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()),o=n[0],i=n[1];it.setUserInfo(o),ot.renderItems(i)})).catch((function(t){console.log(t)})),$.addEventListener("click",(function(){nt.resetValidation(),lt.open()})),M.addEventListener("click",(function(){at.setInputValues(it.getUserInfo()),rt.resetValidation(),at.open()})),Q.addEventListener("click",(function(){ct.open()}));var rt=new i(a,z);rt.enableValidator();var nt=new i(a,K);nt.enableValidator(),new i(a,W).enableValidator();var ot=new c({renderer:function(t){var e=Z(t);ot.addItem(e)}},".elements__list"),it=new q(".profile__title",".profile__subtitle",".profile__avatar"),ut=new P({selector:".popup_type_img"}),at=new g({selector:".popup_type_profile",handleSubmitForm:function(t){at.showLoading(!0),X.setUserInfo(t).then((function(t){it.setUserInfo(t),at.close()})).catch((function(t){console.log(t)})).finally((function(){at.showLoading(!1)}))}}),lt=new g({selector:".popup_type_add",handleSubmitForm:function(t){lt.showLoading(!0),X.addNewCard(t).then((function(t){var e=Z(t);ot.addItem(e),lt.close()})).catch((function(t){console.log(t)})).finally((function(){lt.showLoading(!1)}))}}),st=new G({selector:".popup_type_delete",deleteCardApi:function(){var t=st.getData(),e=t.data,r=t.deleteCard;X.deleteCard(e._id).then((function(){r(),st.close()})).catch((function(t){console.log(t)}))}}),ct=new g({selector:".popup_type_avatar",handleSubmitForm:function(t){ct.showLoading(!0),X.setAvatar(t).then((function(t){it.setUserInfo(t),ct.close()})).catch((function(t){console.log(t)})).finally((function(){ct.showLoading(!1)}))}});ut.setEventListeners(),lt.setEventListeners(),at.setEventListeners(),st.setEventListeners(),ct.setEventListeners()})();