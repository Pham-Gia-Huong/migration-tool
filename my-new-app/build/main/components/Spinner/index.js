"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var Spinner = function () {
    return (react_1.default.createElement("div", { className: "wrap-loader" },
        react_1.default.createElement("div", { className: "loader" })));
};
exports.default = Spinner;
//# sourceMappingURL=index.js.map