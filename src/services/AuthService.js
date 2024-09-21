import axios from 'axios';

const API_URL = 'http://localhost:8080/api/auth/';

class AuthService {
  login(user) {
    return axios.post(API_URL + 'login', {
      email: user.email,
      password: user.password
    });
  }

  register(user) {
    return axios.post(API_URL + 'register', {
      username: user.username,
      email: user.email,
      password: user.password,
      direction: user.direction
    });
  }
}

export default new AuthService();
