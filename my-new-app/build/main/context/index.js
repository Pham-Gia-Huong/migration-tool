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
exports.context = void 0;
var react_1 = __importStar(require("react"));
var electronService_1 = __importDefault(require("./reducer/electronService"));
var App_1 = __importDefault(require("./reducer/App"));
var defaultData_1 = require("./reducer/electronService/defaultData");
var defautData_1 = require("./reducer/App/defautData");
var defaultData_2 = require("./reducer/job/defaultData");
var job_1 = __importDefault(require("./reducer/job"));
var log_1 = __importDefault(require("./reducer/log"));
var defaultData_3 = require("./reducer/log/defaultData");
var context = react_1.default.createContext({});
exports.context = context;
var Provider = function (props) {
    var _a = react_1.useReducer(electronService_1.default, defaultData_1.migrationValue), elState = _a[0], elDispatch = _a[1];
    // const [authState, authDispatch] = useReducer(authReducer, authValue);
    var _b = react_1.useReducer(App_1.default, defautData_1.defaulFormField), appState = _b[0], appDispatch = _b[1];
    var _c = react_1.useReducer(job_1.default, defaultData_2.jobValue), jobState = _c[0], jobDispatch = _c[1];
    var _d = react_1.useReducer(log_1.default, defaultData_3.logValue), logState = _d[0], logDispatch = _d[1];
    var combine = {
        app: {
            state: appState,
            dispatch: appDispatch,
        },
        migration: {
            state: elState,
            dispatch: elDispatch,
        },
        job: {
            state: jobState,
            dispatch: jobDispatch,
        },
        log: {
            state: logState,
            dispatch: logDispatch
        }
    };
    return react_1.default.createElement(context.Provider, { value: combine }, props.children);
};
exports.default = Provider;
//# sourceMappingURL=index.js.map