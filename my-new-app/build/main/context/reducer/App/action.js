"use strict";
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
exports.clearAllFieldMap = exports.updateFieldMap = exports.getFormFail = exports.getFormSuccess = void 0;
var actionCreator = __importStar(require("./actionType"));
var getFormSuccess = function (data) { return ({
    type: actionCreator.GET_FORM_SUCCESS,
    data: {
        isLoading: false,
        records: data.records,
        status: data.status,
        error: '',
    },
}); };
exports.getFormSuccess = getFormSuccess;
var updateFieldMap = function (data) { return ({
    type: actionCreator.UPDATE_FIELD_MAP,
    data: {
        records: data,
    },
}); };
exports.updateFieldMap = updateFieldMap;
var getFormFail = function (data) { return ({
    type: actionCreator.GET_FORM_FAIL,
    data: {
        isLoading: false,
        error: data.error,
        records: [],
        status: data.status,
    },
}); };
exports.getFormFail = getFormFail;
var clearAllFieldMap = function () {
    return {
        type: actionCreator.CLEAR_ALL_FIELD_MAP,
        data: {
            records: [],
        },
    };
};
exports.clearAllFieldMap = clearAllFieldMap;
//# sourceMappingURL=action.js.map