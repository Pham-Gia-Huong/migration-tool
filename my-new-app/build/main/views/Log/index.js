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
var Table_1 = __importDefault(require("../../components/Table"));
var context_1 = require("../../context");
var log_1 = require("../../features/log");
var LogResult = function () {
    var listLog = react_1.useContext(context_1.context).log.state.listLog;
    var logUi = log_1.parseLogList(listLog);
    return (react_1.default.createElement("div", { className: "log-resul" },
        react_1.default.createElement(Table_1.default, { title: "Log Result", rowList: logUi, headerList: ["No", "From Domain", "To Domain", "From App", "To App", "Action", "Message"] })));
};
exports.default = LogResult;
//# sourceMappingURL=index.js.map