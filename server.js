require("dotenv").config();
const request = require("request");
const config = require("./config");

const url = `https://api.darksky.net/forecast/${config.apiKey}/47.151726,27.587914?units=si&lang=ro`;

request({ url: url, json: true }, (error, response) => {
  const { temperature, precipProbability } = response.body.currently;
  const { summary } = response.body.daily.data[0];
  console.log(
    `${summary} It is currently ${temperature} degrees out. There is a ${precipProbability *
      100}% change of rain`
  );
});
