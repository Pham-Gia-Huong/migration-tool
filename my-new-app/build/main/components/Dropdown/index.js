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
var react_1 = __importStar(require("react"));
require("./index.css");
var ItemList = function (_a) {
    var itemList = _a.itemList, onClick = _a.onClick, style = _a.style, setStyle = _a.setStyle;
    return (react_1.default.createElement("div", { className: "dropdown-list", style: style }, itemList.map(function (item, key) {
        return (react_1.default.createElement("div", { className: "dropdown-item", key: key, onClick: function () {
                var displayStyle = { display: 'none' };
                onClick(key, item);
                setStyle(displayStyle);
            } }, item.label));
    })));
};
var Dropdown = function (_a) {
    var itemList = _a.itemList, onClick = _a.onClick, _b = _a.label, label = _b === void 0 ? '' : _b;
    var _c = react_1.useState({}), style = _c[0], setStyle = _c[1];
    var _d = react_1.useState(label ? label : itemList[0].label), itemState = _d[0], setItem = _d[1];
    return (react_1.default.createElement("div", { className: "dropdown" },
        react_1.default.createElement("div", { className: "dropdown-text", onClick: function () {
                var displayStyle = { display: 'block' };
                setStyle(displayStyle);
            } }, itemState),
        react_1.default.createElement(ItemList, { itemList: itemList, style: style, setStyle: setStyle, onClick: function (key, item) {
                onClick(key, item);
                setItem(item.label);
            } })));
};
exports.default = Dropdown;
//# sourceMappingURL=index.js.map