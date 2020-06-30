"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseFieldMapFromTo = exports.isLoadMigrateRecords = exports.handleMigrate = exports.parseDataMigrateRecords = void 0;
var type_1 = require("../../electronjs/service/migration/type");
var service_1 = require("../service");
var log_1 = require("./log");
var parseDataMigrateRecords = function (_a) {
    var fromDomain = _a.fromDomain, toDomain = _a.toDomain, fromApp = _a.fromApp, toApp = _a.toApp, tokenAppFrom = _a.tokenAppFrom, tokenAppTo = _a.tokenAppTo, query = _a.query, fields = _a.fields, fieldMapFromTo = _a.fieldMapFromTo, fieldMapList = _a.fieldMapList;
    var fieldsList = [];
    if (typeof fields === "string" && fields) {
        fieldsList = fields.split(',');
    }
    return {
        fromDomain: fromDomain,
        toDomain: toDomain,
        fromApp: fromApp,
        toApp: toApp,
        tokenAppFrom: tokenAppFrom,
        tokenAppTo: tokenAppTo,
        query: query,
        fields: fieldsList,
        fieldMapFromTo: fieldMapFromTo,
        fieldMapList: fieldMapList
    };
};
exports.parseDataMigrateRecords = parseDataMigrateRecords;
var parseFieldMapFromTo = function (fieldMapList) {
    var fieldMapFromToList = JSON.parse(JSON.stringify(fieldMapList));
    var fieldMapFromTo = fieldMapFromToList.map(function (fieldMap) {
        return {
            from: fieldMap.from.value,
            to: fieldMap.to.value,
        };
    });
    return fieldMapFromTo;
};
exports.parseFieldMapFromTo = parseFieldMapFromTo;
var isLoadMigrateRecords = function (status) {
    if (status === 'loading') {
        return true;
    }
    return false;
};
exports.isLoadMigrateRecords = isLoadMigrateRecords;
var handleMigrate = function (logList, jobList, useMigration) { return __awaiter(void 0, void 0, void 0, function () {
    var newJobList, newLogList, i, job, log;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                newJobList = JSON.parse(JSON.stringify(jobList));
                newLogList = JSON.parse(JSON.stringify(logList));
                i = 0;
                _a.label = 1;
            case 1:
                if (!(i < newJobList.length)) return [3 /*break*/, 4];
                job = jobList[i];
                return [4 /*yield*/, service_1.request(type_1.MIGRATE_RECORDS, job.migrateInfo, useMigration)];
            case 2:
                log = _a.sent();
                log_1.addLog(newLogList, log);
                _a.label = 3;
            case 3:
                i++;
                return [3 /*break*/, 1];
            case 4: return [2 /*return*/, newLogList];
        }
    });
}); };
exports.handleMigrate = handleMigrate;
//# sourceMappingURL=migration.js.map