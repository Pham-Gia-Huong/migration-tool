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
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var actionType = __importStar(require("./actionType"));
var actionBase = __importStar(require("../base/actionType"));
exports.default = (function (state, action) {
    switch (action.type) {
        case actionBase.REQUEST: {
            var newAction = action.data;
            var status_1 = newAction.status;
            var records_1 = newAction.records;
            var isLoading_1 = newAction.isLoading;
            var error = newAction.error;
            return __assign(__assign({}, state), { status: status_1, records: records_1, isLoading: isLoading_1, error: error });
        }
        case actionType.UPDATE_FIELD_MAP: {
            var newAction = action.data;
            var records_2 = newAction.records;
            return __assign(__assign({}, state), { records: records_2 });
        }
        case actionType.GET_FORM_SUCCESS:
            var data = action.data;
            var isLoading = data.isLoading;
            var status_2 = data.status;
            var records = data.records;
            return __assign(__assign({}, state), { isLoading: isLoading, status: status_2, records: records });
        case actionType.GET_FORM_FAIL: {
            var data_1 = action.data;
            var isLoading_2 = data_1.isLoading;
            var status_3 = data_1.status;
            var error = data_1.error;
            return __assign(__assign({}, state), { isLoading: isLoading_2, status: status_3, error: error });
        }
        case actionBase.CLEAR_ERROR: {
            var status_4 = '';
            return __assign(__assign({}, state), { status: status_4 });
        }
        case actionType.CLEAR_ALL_FIELD_MAP: {
            var newAction = action.data;
            var records_3 = newAction.records;
            return __assign(__assign({}, state), { records: records_3 });
        }
        default:
            return state;
    }
});
//# sourceMappingURL=index.js.map