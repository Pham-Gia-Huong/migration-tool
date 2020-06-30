"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isObjectExistValueList = exports.isObjectExistValue = void 0;
var isObjectExistValue = function (object) {
    var valueList = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var value = object[key];
            if (typeof value === 'object') {
                continue;
            }
            if (typeof value === 'string' && value) {
                valueList.push(true);
                continue;
            }
            if (typeof value === 'number') {
                valueList.push(true);
                continue;
            }
            valueList.push(false);
        }
    }
    return valueList.every(function (value) { return value; });
};
exports.isObjectExistValue = isObjectExistValue;
var isObjectExistValueList = function (object) {
    var valueList = [];
    for (var key in object) {
        if (object.hasOwnProperty(key)) {
            var value = object[key];
            if (typeof value === 'string' && value) {
                valueList.push(true);
                continue;
            }
            if (typeof value === 'number') {
                valueList.push(true);
                continue;
            }
            if (typeof value === 'object' && Array.isArray(value) && value.length > 0) {
                valueList.push(true);
                continue;
            }
            if (typeof value === 'object' && Object.keys(value).length > 0) {
                valueList.push(true);
                continue;
            }
            valueList.push(false);
        }
    }
    return valueList.every(function (value) { return value; });
};
exports.isObjectExistValueList = isObjectExistValueList;
//# sourceMappingURL=index.js.map