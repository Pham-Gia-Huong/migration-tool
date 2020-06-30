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
exports.getFormField = void 0;
var app_1 = require("../../features/app");
var getFormField = function (data, dispatch, resolve) {
    var newLog = __assign({}, data.log);
    newLog.message = data.error || data.status;
    if (data.records) {
        var fieldMapList = app_1.createFieldMapList(data);
        dispatch.getFormSuccess({
            records: fieldMapList,
            status: data.status,
        });
        resolve(newLog);
        return;
    }
    dispatch.getFormFail({
        status: data.status,
        error: data.error,
    });
    resolve(newLog);
};
exports.getFormField = getFormField;
//# sourceMappingURL=index.js.map