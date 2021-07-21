export const baseUrl = 'https://api.even-star.students.nomoredomains.monster';

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  }
  return Promise.reject(new Error(`Ошибка ${res.status}`));
}

export const register = (email, password) => fetch(`${baseUrl}/signup`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then(checkResponse)
  .catch((err) => {
    console.log(err);
  });

export const authorize = (email, password) => fetch(`${baseUrl}/signin`, {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify({ email, password }),
})
  .then(checkResponse)
  .then((data) => {
    if (data.token) {
      localStorage.setItem('token', data.token);
      return data;
    }
  })
  .catch((err) => {
    console.log(err);
  });

export const logout = () => fetch(`${baseUrl}/signout`, {
  method: 'GET',
  credentials: 'same-origin',
})
  .then(checkResponse)
  .catch((err) => {
    console.log(err);
  });

export const getContent = (token) => fetch(`${baseUrl}/users/me`, {
  method: 'GET',
  headers: {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${token}`,
  },
})
  .then(checkResponse)
  .catch((err) => {
    console.log(err);
  });
