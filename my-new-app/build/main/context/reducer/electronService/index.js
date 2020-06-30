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
var actionType_1 = require("./actionType");
var actionType_2 = require("../base/actionType");
exports.default = (function (state, action) {
    switch (action.type) {
        case actionType_2.REQUEST: {
            var newAction = action.data;
            var status_1 = newAction.status;
            var records = newAction.records;
            var isLoading = newAction.isLoading;
            return __assign(__assign({}, state), { status: status_1, records: records, isLoading: isLoading });
        }
        case actionType_1.MIGRATE_RECORDS_SUCCESS: {
            var newAction = action.data;
            var status_2 = newAction.status;
            var records = newAction.records;
            var isLoading = newAction.isLoading;
            return __assign(__assign({}, state), { status: status_2, records: records, isLoading: isLoading });
        }
        case actionType_1.MIGRATE_RECORDS_ERROR: {
            var newAction = action.data;
            var status_3 = newAction.status;
            var error = newAction.error;
            var isLoading = newAction.isLoading;
            return __assign(__assign({}, state), { status: status_3, error: error, isLoading: isLoading });
        }
        case actionType_2.CLEAR_ERROR: {
            var status_4 = '';
            return __assign(__assign({}, state), { status: status_4 });
        }
        default:
            return state;
    }
});
//# sourceMappingURL=index.js.map