const { API, API_KEY } = require("./config");

module.exports = {
  search: (city) => `${API}/search.json?key=${API_KEY}&q=${city}`,
  forecast: (city, days) =>
    `${API}/forecast.json?key=${API_KEY}&q=${city}&days=${days}&aqi=no&alerts=no`,

  current: (city) => `${API}/current.json?key=${API_KEY}&q=${city}`,
  history: (city, date) =>
    `${API}/history.json?key=${API_KEY}&q=${city}&dt=${date}`,
};

API;
