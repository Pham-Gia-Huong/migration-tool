"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var context_1 = __importDefault(require("./context"));
var routes_1 = __importDefault(require("./routes"));
var App = function () {
    return (react_1.default.createElement(context_1.default, null,
        react_1.default.createElement("div", { className: "container-main" },
            react_1.default.createElement(routes_1.default, null))));
};
exports.default = App;
//# sourceMappingURL=renderer.js.map