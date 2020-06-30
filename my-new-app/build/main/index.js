"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_dom_1 = __importDefault(require("react-dom"));
var renderer_1 = __importDefault(require("./renderer"));
require("./index.css");
react_dom_1.default.render(react_1.default.createElement(renderer_1.default, null), document.getElementById('root'));
//# sourceMappingURL=index.js.map