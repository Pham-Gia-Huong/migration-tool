"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input_1 = __importDefault(require("../../../components/Input"));
var FormFromInput = function (_a) {
    var domain = _a.domain, app = _a.app, token = _a.token, setDomain = _a.setDomain, setApp = _a.setApp, setToken = _a.setToken;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Input_1.default, { type: 'text', label: "Domain", defaultValue: domain, onChange: function (value) { return setDomain(value); } }),
        react_1.default.createElement(Input_1.default, { type: 'number', label: "App", defaultValue: app, onChange: function (value) { return setApp(value); } }),
        react_1.default.createElement(Input_1.default, { type: 'text', label: "token", defaultValue: token, onChange: function (value) { return setToken(value); } })));
};
exports.default = FormFromInput;
//# sourceMappingURL=index.js.map