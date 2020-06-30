"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var FormFromInput_1 = __importDefault(require("../FormFromInput"));
require("./index.css");
var FormToMigrate = function (_a) {
    var name = _a.name, title = _a.title, domain = _a.domain, app = _a.app, token = _a.token, setDomain = _a.setDomain, setApp = _a.setApp, setToken = _a.setToken, fieldList = _a.fieldList;
    return (react_1.default.createElement("div", { className: "from-form", title: title },
        react_1.default.createElement("div", { className: "from-form-title" }, name),
        react_1.default.createElement("div", { className: "from-form-input" },
            react_1.default.createElement(FormFromInput_1.default, { domain: domain, app: app, token: token, setDomain: setDomain, setApp: setApp, setToken: setToken }))));
};
exports.default = FormToMigrate;
//# sourceMappingURL=index.js.map