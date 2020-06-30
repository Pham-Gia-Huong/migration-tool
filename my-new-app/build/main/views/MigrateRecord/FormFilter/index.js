"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var Input_1 = __importDefault(require("../../../components/Input"));
var FormFilter = function (_a) {
    var query = _a.query, fields = _a.fields, setQuery = _a.setQuery, setFields = _a.setFields;
    return (react_1.default.createElement(react_1.default.Fragment, null,
        react_1.default.createElement(Input_1.default, { type: 'text', label: 'query', defaultValue: query, onChange: function (value) { return setQuery(value); } }),
        react_1.default.createElement(Input_1.default, { type: 'text', label: 'fields', defaultValue: fields, onChange: function (value) { return setFields(value); } })));
};
exports.default = FormFilter;
//# sourceMappingURL=index.js.map