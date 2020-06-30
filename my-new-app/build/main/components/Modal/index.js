"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
require("./index.css");
var Modal = function (_a) {
    var isOpen = _a.isOpen, text = _a.text, type = _a.type;
    if (isOpen) {
        return (react_1.default.createElement("div", { className: "modal-wrap" },
            react_1.default.createElement("div", { className: "modal-popup" },
                react_1.default.createElement("div", { className: "modal-icon " + (type === 'success' ? 'success' : 'danger') }, type === 'success' ? react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faThumbsUp }) : react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faThumbsDown })),
                react_1.default.createElement("div", { className: "modal-text" }, text))));
    }
    return react_1.default.createElement("div", null);
};
exports.default = Modal;
//# sourceMappingURL=index.js.map