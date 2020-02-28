const request = require('request');
const config = require('./config');

const url = `https://api.darksky.net/forecast/${config.apiKey}/47.151726,27.587914`;

request({url: url}, () => {

})