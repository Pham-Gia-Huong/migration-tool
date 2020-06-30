"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUser = exports.addUser = exports.createUser = void 0;
var constant_1 = require("./constant");
var createUser = function (auth) {
    var listUser = [__assign({}, auth)];
    localStorage.setItem(constant_1.USER_INFO_LIST, JSON.stringify(listUser));
};
exports.createUser = createUser;
var addUser = function (auth) {
    var listUser = JSON.parse(localStorage.getItem('listUser'));
    listUser.push(auth);
    localStorage.setItem(constant_1.USER_INFO_LIST, JSON.stringify(listUser));
};
exports.addUser = addUser;
var getUser = function () {
    var listUser = JSON.parse(localStorage.getItem(constant_1.USER_INFO_LIST)) || [];
    return listUser;
};
exports.getUser = getUser;
//# sourceMappingURL=index.js.map