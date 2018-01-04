var $ = require('jquery');
var Util = require('./util');


var isLogin = function() {
  return !!Util.getCookie('username');
};

 

var getUid = function() {
  return Util.getCookie('uid') || 0;
};
var getUsername = function() {
  return Util.getCookie("username");
};

module.exports = {
  isLogin: isLogin,
  getUid: getUid,
  getUsername: getUsername
};
