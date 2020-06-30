"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isExistInfoUser = exports.setInfoUser = void 0;
var localStorage_1 = require("../../localStorage");
// import { USER_INFO_LIST } from '@main/localStorage/constant';
var setInfoUser = function (_a) {
    var domain = _a.domain, username = _a.username, password = _a.password;
    var status = false;
    var isExist = isExistInfoUser();
    if (isExist) {
        localStorage_1.addUser({ domain: domain, username: username, password: password });
        status = true;
    }
    else if (!isExist) {
        localStorage_1.createUser({ domain: domain, username: username, password: password });
        status = true;
    }
    return status;
};
exports.setInfoUser = setInfoUser;
var isExistInfoUser = function () {
    var userStorage = localStorage_1.getUser();
    if (userStorage.length > 0)
        return true;
    return false;
};
exports.isExistInfoUser = isExistInfoUser;
var getTypeBtnLogin = function () {
    // let user = localStorage.getItem(USER_INFO_LIST)
};
//# sourceMappingURL=login.js.map