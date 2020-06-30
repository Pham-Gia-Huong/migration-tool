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
var appAction = __importStar(require("../context/reducer/App/action"));
var baseAction = __importStar(require("../context/reducer/base/action"));
var context_1 = require("../context");
var react_1 = require("react");
exports.default = (function () {
    var app = react_1.useContext(context_1.context).app;
    return {
        request: function () { return app.dispatch(baseAction.request()); },
        getFormSuccess: function (data) { return app.dispatch(appAction.getFormSuccess(data)); },
        getFormFail: function (data) { return app.dispatch(appAction.getFormFail(data)); },
        updateFieldMap: function (listFieldMap) { return app.dispatch(appAction.updateFieldMap(listFieldMap)); },
        clearError: function () { return app.dispatch(baseAction.clearError()); },
        clearAllFieldMap: function () { return app.dispatch(appAction.clearAllFieldMap()); },
    };
});
//# sourceMappingURL=appHook.js.map