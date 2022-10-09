const axios = require("axios");
const api = require("./WeatherApiService");

const multipleCities = async (req, res) => {
  const { city, page, limit } = req.body;

  const { data: searchResult } = await axios.get(api.search(city));

  let result =
    !page || !limit
      ? searchResult
      : searchResult.length > page * limit
      ? searchResult.slice((page - 1) * limit, page * limit)
      : searchResult.slice((page - 1) * limit);

  res.json(result);
};

const forecast = async (req, res) => {
  const { city, days } = req.body;

  const { data } = await axios.get(api.forecast(city, days));

  res.send(data);
};

const currentWeather = async (req, res) => {
  const { city } = req.body;

  const { data } = await axios.get(api.current(city));

  res.send(data);
};

const history = async (req, res) => {
  const { city, date } = req.body;
  console.log(api.history(city, date));
  const { data } = await axios.get(api.history(city, date));
  res.send(data);
};

module.exports = {
  multipleCities,
  forecast,
  currentWeather,
  history,
};
