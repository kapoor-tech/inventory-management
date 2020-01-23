const PORT = 3000;
const SERVER_URL = `http://localhost:${PORT}`;

const API_ENDPOINTS = {
  login: `${SERVER_URL}/login`,
  users: `${SERVER_URL}/users`,
  shoppingCenters: `${SERVER_URL}/shopping-centers`,
  assetsByShoppingCenter: `${SERVER_URL}/assets/shopping-center/`,
  assets: `${SERVER_URL}/assets`,
};

module.exports = {
  SERVER_URL,
  API_ENDPOINTS,
  PORT,
};
