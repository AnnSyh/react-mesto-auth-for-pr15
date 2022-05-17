
const handleError = res => {
  if (res.ok) {
    return res.json();
  }

  return Promise.reject(`Ошибка ${res.status}`);
};



class Api {
  constructor({ url, headers }) {
    this._url = url;
    this._headers = headers;
  }

  _getHeaders() {
    const token = localStorage.getItem('token');
    return {
      'Authorization': `Bearer ${token}`,
      ...this._headers,
    };
  }

  getUser() {
    return fetch(`${this._url}/users/me`, {
      method: 'GET',
      headers: this._getHeaders(),       
    })
      .then(handleError);
  }


  getInitialCards() {
    return fetch(`${this._url}/cards`, { headers: this._getHeaders() })
      .then(handleError);
  }

  renderUserAndCards() { // если оба промиса зарезолвены - верни массив этих промисов
    return Promise.all([this.getUser(), this.getInitialCards()]);
  }

  postUser(user){
    return fetch(`${this._url}/users/me`, {
      method: 'PATCH',
      headers: this._getHeaders(),
      body: JSON.stringify(user)
    })
      .then(handleError);
  }
  postAvatar(avatar){
    return fetch(`${this._url}/users/me/avatar`, {
      method: 'PATCH',
      // headers: this._getHeaders(),
      headers: this._getHeaders(),
      body: JSON.stringify({
        avatar: avatar
      })
    })
      .then(handleError);
  }


  postCreateCard(card) {
    return fetch(`${this._url}/cards`, {
      method: 'POST',
      headers: this._getHeaders(),
      body: JSON.stringify({
        name: card.name,
        link: card.link
      })
    })
      .then(handleError);
  }

  deleteCard(id) {
    return fetch(`${this._url}/cards/${id}`, {
      method: 'DELETE',
      headers: this._getHeaders()
    })
      .then(handleError);
  }

  postLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'PUT',
      headers: this._getHeaders(),
    })
      .then(handleError);
  }

  deleteLike(id) {
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: 'DELETE',
      headers: this._getHeaders(),
    })
      .then(handleError);
  }

  changeLike(id, like){
    if(!id) {
      console.error("Api.changeLike не передан обязательный аргумент cardId. Такой запрос не пройдет.");
      return;
    }
    return fetch(`${this._url}/cards/${id}/likes`, {
      method: (like ? 'PUT' : 'DELETE'),
      headers: this._getHeaders()
    })
      .then(handleError);
  }


}

const api = new Api({
  url: "https://mesto.backend.annsyh.nomoredomains.work",
  headers: {
    "Authorization" : `Bearer ${localStorage.getItem('token')}`,
    "Content-Type": "application/json",
  },
});

export default api;