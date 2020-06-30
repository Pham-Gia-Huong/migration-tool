"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var TableRowList = function (_a) {
    var rowList = _a.rowList;
    return (react_1.default.createElement(react_1.default.Fragment, null, rowList.map(function (row, key) {
        return (react_1.default.createElement("tr", { className: "table-row-item", key: key }, row.content.map(function (content, key) {
            return (react_1.default.createElement("td", { key: key, className: "table-column" }, content));
        })));
    })));
};
var TableHeaderList = function (_a) {
    var headerList = _a.headerList;
    return (react_1.default.createElement(react_1.default.Fragment, null, headerList.map(function (header, key) {
        return (react_1.default.createElement("th", { key: key, className: "table-thead" }, header));
    })));
};
var Table = function (_a) {
    var headerList = _a.headerList, rowList = _a.rowList, title = _a.title;
    return (react_1.default.createElement("div", { className: "table-wrapped" },
        react_1.default.createElement("table", null,
            react_1.default.createElement("thead", null,
                title &&
                    react_1.default.createElement("tr", null,
                        react_1.default.createElement("th", { className: "table-thead", colSpan: headerList.length }, title)),
                react_1.default.createElement("tr", null,
                    react_1.default.createElement(TableHeaderList, { headerList: headerList }))),
            react_1.default.createElement("tbody", null,
                react_1.default.createElement(TableRowList, { rowList: rowList })))));
};
exports.default = Table;
//# sourceMappingURL=index.js.map