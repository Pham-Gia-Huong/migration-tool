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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var Input_1 = __importDefault(require("../../components/Input"));
require("./index.css");
var localStorage_1 = require("main/localStorage");
var Login = function () {
    var _a = react_1.useState(''), domain = _a[0], setDomain = _a[1];
    var _b = react_1.useState(''), username = _b[0], setUsername = _b[1];
    var _c = react_1.useState(''), password = _c[0], setPassword = _c[1];
    // const [isExistUser, setIsExistUser] = useState(isExistInfoUser());
    // const useFeatureLogin = featureLogin()
    return (react_1.default.createElement("div", { className: "login" },
        react_1.default.createElement("div", { className: "form-login" },
            react_1.default.createElement(Input_1.default, { type: 'string', label: "domain", defaultValue: domain, onChange: function (value) { return setDomain(value); } }),
            react_1.default.createElement(Input_1.default, { type: 'string', label: "username", defaultValue: username, onChange: function (value) { return setUsername(value); } }),
            react_1.default.createElement(Input_1.default, { type: 'string', label: "password", defaultValue: password, onChange: function (value) { return setPassword(value); } }))));
};
exports.default = Login;
//# sourceMappingURL=index.js.map