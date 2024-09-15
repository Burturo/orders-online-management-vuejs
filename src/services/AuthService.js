import axios from 'axios';

const API_URL = 'http://localhost:Port/api';

// Function to get the CSRF token
const getCsrfToken = async () => {
  const response = await axios.get(`${API_URL}/csrf-token`);
  return response.data.csrf_token;
};

const register = async (userData) => {
  const csrfToken = await getCsrfToken();
  return axios.post(`${API_URL}/register`, {
    username: userData.username,
    email: userData.email,
    password: userData.password,
    password_confirmation: userData.password_confirmation,
    direction: userData.direction
  }, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  });
};

const login = (credentials) => {
  return axios.post(`${API_URL}/login`, credentials);
};

const logout = async () => {
  const csrfToken = await getCsrfToken();
  return axios.post(`${API_URL}/logout`, {}, {
    headers: {
      'X-CSRF-TOKEN': csrfToken
    }
  });
};

export default {
  register,
  login,
  logout
};
