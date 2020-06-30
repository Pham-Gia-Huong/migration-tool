"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var ItemList = function (_a) {
    var listItem = _a.listItem, onClick = _a.onClick;
    return (react_1.default.createElement(react_1.default.Fragment, null, listItem.map(function (item, key) {
        return (react_1.default.createElement("div", { className: "sidebar-item " + (item.selected ? "selected" : ""), key: key, onClick: function () {
                onClick(key, item);
            } },
            react_1.default.createElement("div", { className: "sidebar-item-icon" },
                react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: item.icon })),
            react_1.default.createElement("div", { className: "sidebar-item-name" }, item.name)));
    })));
};
var Sidebar = function (_a) {
    var listItem = _a.listItem, onClick = _a.onClick;
    return (react_1.default.createElement("div", { className: "sidebar" },
        react_1.default.createElement(ItemList, { listItem: listItem, onClick: function (key, item) { return onClick(key, item); } })));
};
exports.default = Sidebar;
//# sourceMappingURL=index.js.map