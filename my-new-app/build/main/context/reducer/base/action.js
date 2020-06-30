"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearError = exports.request = void 0;
var actionType_1 = require("./actionType");
var request = function () {
    return {
        type: actionType_1.REQUEST,
        data: {
            status: '',
            records: [],
            isLoading: true,
            error: '',
        },
    };
};
exports.request = request;
var clearError = function () {
    return { type: actionType_1.CLEAR_ERROR };
};
exports.clearError = clearError;
//# sourceMappingURL=action.js.map