"use strict";

var _user$address;
var user = {};

//Optional chaining
console.log(user === null || user === void 0 || (_user$address = user.address) === null || _user$address === void 0 ? void 0 : _user$address.street); //as interrogacoes fazem o papel de um if que verifica se user e address sao null ou nao