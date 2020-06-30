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
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importStar(require("react"));
var ContainerForm_1 = __importDefault(require("../ContainerForm"));
var Button_1 = __importDefault(require("../../../components/Button"));
var Input_1 = __importDefault(require("../../../components/Input"));
var FieldMap_1 = require("../FieldMap");
var migration_1 = require("../../../features/migration");
var index_1 = require("../../../service/index");
var type_1 = require("../../../../electronjs/service/app/type");
var context_1 = require("../../../context");
var appHook_1 = __importDefault(require("../../../hooks/appHook"));
var job_1 = require("../../../features/job");
require("./index.css");
var jobHook_1 = __importDefault(require("../../../hooks/jobHook"));
var log_1 = require("../../../features/log");
var logHook_1 = __importDefault(require("../../../hooks/logHook"));
var FieldMapFromTo = function (_a) {
    var id = _a.id;
    return (react_1.default.createElement("div", { className: "field-map-from-to" },
        react_1.default.createElement("div", { className: "field-map-from" },
            react_1.default.createElement(FieldMap_1.ListFieldMap, { id: id, showIcon: true, indexListString: 'fieldCodeFromList', field: 'from' })),
        react_1.default.createElement("div", { className: "field-map-to" },
            react_1.default.createElement(FieldMap_1.ListFieldMap, { id: id, showIcon: false, indexListString: 'fieldCodeToList', field: 'to' }))));
};
var RenderButtonFieldMapList = function (_a) {
    var tokenAppTo = _a.tokenAppTo, toApp = _a.toApp, fromDomain = _a.fromDomain, fromApp = _a.fromApp, tokenAppFrom = _a.tokenAppFrom, toDomain = _a.toDomain, id = _a.id;
    var _b = react_1.useContext(context_1.context), job = _b.job, log = _b.log;
    var jobList = job.state.jobList;
    var useLog = logHook_1.default();
    var useApp = appHook_1.default();
    var newJobMatchId = job_1.findJobSelected(jobList);
    var logList = JSON.parse(JSON.stringify(log.state.listLog));
    if (newJobMatchId.migrateInfo.fieldMapList.length === 0) {
        return (react_1.default.createElement(Button_1.default, { label: 'Get form field', onClick: function () { return __awaiter(void 0, void 0, void 0, function () {
                var formFieldMigrate, log;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            formFieldMigrate = migration_1.parseDataMigrateRecords({
                                fromApp: fromApp,
                                fromDomain: fromDomain,
                                toApp: toApp,
                                toDomain: toDomain,
                                tokenAppFrom: tokenAppFrom,
                                tokenAppTo: tokenAppTo,
                            });
                            return [4 /*yield*/, index_1.request(type_1.GET_FORM_FIELD, formFieldMigrate, useApp)];
                        case 1:
                            log = _a.sent();
                            log_1.addLog(logList, log);
                            useLog.saveLog(logList);
                            return [2 /*return*/];
                    }
                });
            }); } }));
    }
    return null;
};
var RenderButtonSaveMigrate = function (_a) {
    var title = _a.title, tokenAppTo = _a.tokenAppTo, toApp = _a.toApp, fromDomain = _a.fromDomain, fromApp = _a.fromApp, tokenAppFrom = _a.tokenAppFrom, toDomain = _a.toDomain, id = _a.id, query = _a.query, fields = _a.fields;
    var job = react_1.useContext(context_1.context).job;
    var jobList = job.state.jobList;
    var jobUse = jobHook_1.default();
    var newJobMatchId = job_1.findJobSelected(jobList);
    if (newJobMatchId.migrateInfo.fieldMapList.length > 0) {
        var fieldMapList_1 = newJobMatchId.migrateInfo.fieldMapList;
        return (react_1.default.createElement(Button_1.default, { label: 'Save', onClick: function () {
                var fieldMapFromTo = migration_1.parseFieldMapFromTo(fieldMapList_1);
                var migrateRecordsValue = migration_1.parseDataMigrateRecords({
                    fromApp: fromApp,
                    fromDomain: fromDomain,
                    toApp: toApp,
                    toDomain: toDomain,
                    tokenAppFrom: tokenAppFrom,
                    tokenAppTo: tokenAppTo,
                    query: query,
                    fields: fields,
                    fieldMapFromTo: fieldMapFromTo,
                    fieldMapList: fieldMapList_1,
                });
                var newJobList = job_1.addJobMigrateInfor(jobList, migrateRecordsValue);
                newJobList = job_1.addTitleToJob(newJobList, title);
                newJobList = job_1.clearJobSelected(newJobList);
                jobUse.saveJob(newJobList);
            } }));
    }
    return null;
};
var ModalMigrate = function (_a) {
    var title = _a.title, id = _a.id, fields = _a.fields, query = _a.query, tokenAppTo = _a.tokenAppTo, toApp = _a.toApp, fromDomain = _a.fromDomain, fromApp = _a.fromApp, tokenAppFrom = _a.tokenAppFrom, toDomain = _a.toDomain, isOpen = _a.isOpen;
    var _b = react_1.useState(toDomain), currentToDomain = _b[0], setToDomain = _b[1];
    var _c = react_1.useState(fromDomain), currentFromDomain = _c[0], setFromDomain = _c[1];
    var _d = react_1.useState(fromApp), currentFromApp = _d[0], setFromApp = _d[1];
    var _e = react_1.useState(tokenAppFrom), currentTokenAppFrom = _e[0], setTokenAppFrom = _e[1];
    var _f = react_1.useState(toApp), currentToApp = _f[0], setToApp = _f[1];
    var _g = react_1.useState(tokenAppTo), currentTokenAppTo = _g[0], setTokenAppTo = _g[1];
    var _h = react_1.useState(query), currentQuery = _h[0], setQuery = _h[1];
    var _j = react_1.useState(fields), currentFields = _j[0], setFields = _j[1];
    var _k = react_1.useState(title), currentTitle = _k[0], setTitle = _k[1];
    var jobUse = jobHook_1.default();
    var appUse = appHook_1.default();
    var _l = react_1.useContext(context_1.context), app = _l.app, job = _l.job;
    var jobList = job.state.jobList;
    var fieldMapList = app.state.records;
    react_1.useEffect(function () {
        if (fieldMapList.length > 0) {
            var newJobList = job_1.addFieldMapListToJob(jobList, id, fieldMapList);
            jobUse.saveJob(newJobList);
            appUse.clearAllFieldMap();
        }
    }, [fieldMapList.length]);
    if (!isOpen) {
        return react_1.default.createElement("div", null);
    }
    var resetCurrentJob = function () {
        var job = job_1.findJobSelected(jobList);
        var migrateInfo = job.migrateInfo;
        var fields = migrateInfo.fields;
        setToDomain(migrateInfo.toDomain);
        setFromDomain(migrateInfo.fromDomain);
        setFromApp(migrateInfo.fromApp);
        setTokenAppFrom(migrateInfo.tokenAppFrom);
        setToApp(migrateInfo.toApp);
        setTokenAppTo(migrateInfo.tokenAppTo);
        setQuery(migrateInfo.query);
        setFields(fields);
        setTitle(job.title);
    };
    return (react_1.default.createElement("div", { className: "modal-migrate-wrapped full-page-center" },
        react_1.default.createElement("div", { className: "modal-migrate-content full-page-content" },
            react_1.default.createElement("div", { className: "modal-mirate-title" },
                react_1.default.createElement(Input_1.default, { type: 'text', label: 'Job', defaultValue: currentTitle, onChange: function (value) { return setTitle(value); } })),
            react_1.default.createElement(ContainerForm_1.default, { fromDomain: currentFromDomain, fromApp: currentFromApp, tokenAppFrom: currentTokenAppFrom, setFromDomain: setFromDomain, setTokenAppFrom: setTokenAppFrom, setFromApp: setFromApp, toDomain: currentToDomain, toApp: currentToApp, tokenAppTo: currentTokenAppTo, setToDomain: setToDomain, setToApp: setToApp, setTokenAppTo: setTokenAppTo, query: currentQuery, setQuery: setQuery, fields: currentFields, setFields: setFields }),
            react_1.default.createElement(FieldMapFromTo, { id: id }),
            react_1.default.createElement(RenderButtonFieldMapList, { fromDomain: currentFromDomain, fromApp: currentFromApp, toDomain: currentToDomain, toApp: currentToApp, tokenAppTo: currentTokenAppTo, id: id, tokenAppFrom: currentTokenAppFrom }),
            react_1.default.createElement(RenderButtonSaveMigrate, { fromDomain: currentFromDomain, fromApp: currentFromApp, toDomain: currentToDomain, toApp: currentToApp, tokenAppTo: currentTokenAppTo, id: id, fields: currentFields, query: currentQuery, title: currentTitle, tokenAppFrom: currentTokenAppFrom }),
            react_1.default.createElement(Button_1.default, { label: 'Close', onClick: function () {
                    var newJobList = job_1.clearJobSelected(jobList);
                    resetCurrentJob();
                    jobUse.saveJob(newJobList);
                } }))));
};
exports.default = ModalMigrate;
//# sourceMappingURL=index.js.map