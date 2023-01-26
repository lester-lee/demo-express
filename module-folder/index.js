// By default, Node will look for the exports in `index.js` in the folder

const helper = require("./helper");
// helper = helper_secret
// helper = 10

const add = (num) => helper + num;
const subtract = (num) => helper - num;

module.exports = [add, subtract];
