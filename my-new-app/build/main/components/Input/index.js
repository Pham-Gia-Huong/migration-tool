"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var InputField = function (_a) {
    var label = _a.label, onChange = _a.onChange, defaultValue = _a.defaultValue, _b = _a.type, type = _b === void 0 ? 'text' : _b;
    return (react_1.default.createElement("div", { className: "input-field" },
        react_1.default.createElement("div", { className: "label" }, label),
        react_1.default.createElement("input", { type: type, value: defaultValue, onChange: function (e) {
                onChange(e.target.value);
            } })));
};
exports.default = InputField;
//# sourceMappingURL=index.js.map