var moment = require("moment");
var unique = require('uniq');
var nDate = new Date();
var fDate = moment(nDate).format('lll');

console.log(fDate);