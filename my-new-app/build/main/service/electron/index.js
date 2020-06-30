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
exports.saveRecodsMigrate = void 0;
var saveRecodsMigrate = function (data, dispatch, resolve) {
    var newLog = __assign({}, data.log);
    newLog.message = data.error || data.status;
    if (!data.error) {
        dispatch.RecordsSuccess({
            status: data.status,
            records: data.records,
        });
        resolve(newLog);
        return;
    }
    dispatch.RecordsFail({
        status: data.status,
        error: data.error,
    });
    resolve(newLog);
};
exports.saveRecodsMigrate = saveRecodsMigrate;
//# sourceMappingURL=index.js.map