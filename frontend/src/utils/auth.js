export const base_url = 'http://localhost:3001';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(`Ошибка ${res.status}`);
}

export const register = (email, password) => {
  return fetch(`${base_url}/sign-up`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({email, password})
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err);
    })
};

export const authorize = (email, password) => {
  return fetch(`${base_url}/sign-in`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({email, password})
  })
    .then(checkResponse)
    .then((data) => {
      if (data.token){
        localStorage.setItem('token', data.token);
        return data;
      }
    })
    .catch((err) => {
      console.log(err)
    })
};

export const logout = () => {
  return fetch(`${base_url}/sign-out`, {
    method: 'GET',
    credentials: 'same-origin',
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err)
    })
};

export const getContent = (token) => {
  return fetch(`${base_url}/users/me`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${token}`,
    }
  })
    .then(checkResponse)
    .catch((err) => {
      console.log(err)
    })
};
