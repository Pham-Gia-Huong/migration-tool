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
exports.request = void 0;
var electron_1 = require("electron");
var migrationType = __importStar(require("../../electronjs/service/migration/type"));
var appType = __importStar(require("../../electronjs/service/app/type"));
var electron_2 = require("./electron");
var index_1 = require("./app/index");
var listener = function (e, data, dispatch, type, resolve) {
    switch (type) {
        case migrationType.MIGRATE_RECORDS:
            electron_2.saveRecodsMigrate(data, dispatch, resolve);
            break;
        case appType.GET_FORM_FIELD:
            index_1.getFormField(data, dispatch, resolve);
        default:
            break;
    }
};
var request = function (type, data, dispatch) {
    dispatch.request();
    return new Promise(function (resolve, reject) {
        setTimeout(function () {
            electron_1.ipcRenderer.send("request", { data: data, type: type });
            electron_1.ipcRenderer.once("response", function (e, dataResponse) {
                listener(e, dataResponse, dispatch, type, resolve);
            });
        }, 1500);
    });
};
exports.request = request;
//# sourceMappingURL=index.js.map