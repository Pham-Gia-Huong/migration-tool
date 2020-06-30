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
exports.getFormRequest = exports.migrateRecordsFail = exports.migrateRecordsSuccess = void 0;
var actionCreator = __importStar(require("./actionType"));
var migrateRecordsSuccess = function (data) {
    return {
        type: actionCreator.MIGRATE_RECORDS_SUCCESS,
        data: {
            status: data.status,
            records: data.records,
            isLoading: false,
        },
    };
};
exports.migrateRecordsSuccess = migrateRecordsSuccess;
var migrateRecordsFail = function (data) {
    return {
        type: actionCreator.MIGRATE_RECORDS_ERROR,
        data: {
            status: data.status,
            error: data.error,
            isLoading: false,
        },
    };
};
exports.migrateRecordsFail = migrateRecordsFail;
var getFormRequest = function (records) {
    return {
        type: actionCreator.MIGRATE_RECORDS_ERROR,
        data: {
            records: records,
        },
    };
};
exports.getFormRequest = getFormRequest;
//# sourceMappingURL=action.js.map