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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getFormMigrate = void 0;
var axios_1 = __importDefault(require("axios"));
var getFormField = function (_a) {
    var domain = _a.domain, app = _a.app, token = _a.token;
    return __awaiter(void 0, void 0, void 0, function () {
        var formField, error_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 2, , 3]);
                    return [4 /*yield*/, axios_1.default({
                            method: 'GET',
                            headers: {
                                'X-Cybozu-API-Token': token,
                            },
                            url: "https://" + domain + "/k/v1/app/form/fields.json?app=" + app,
                        })];
                case 1:
                    formField = _b.sent();
                    return [2 /*return*/, formField.data];
                case 2:
                    error_1 = _b.sent();
                    throw error_1;
                case 3: return [2 /*return*/];
            }
        });
    });
};
var getFormMigrate = function (_a) {
    var fromDomain = _a.fromDomain, fromApp = _a.fromApp, tokenAppFrom = _a.tokenAppFrom, toDomain = _a.toDomain, toApp = _a.toApp, tokenAppTo = _a.tokenAppTo;
    return __awaiter(void 0, void 0, void 0, function () {
        var formFieldFrom, formFieldTo, e_1;
        return __generator(this, function (_b) {
            switch (_b.label) {
                case 0:
                    _b.trys.push([0, 3, , 4]);
                    return [4 /*yield*/, getFormField({ domain: fromDomain, app: fromApp, token: tokenAppFrom })];
                case 1:
                    formFieldFrom = _b.sent();
                    return [4 /*yield*/, getFormField({ domain: toDomain, app: toApp, token: tokenAppTo })];
                case 2:
                    formFieldTo = _b.sent();
                    return [2 /*return*/, {
                            id: 0,
                            formFieldFrom: formFieldFrom,
                            formFieldTo: formFieldTo,
                        }];
                case 3:
                    e_1 = _b.sent();
                    throw e_1;
                case 4: return [2 /*return*/];
            }
        });
    });
};
exports.getFormMigrate = getFormMigrate;
//# sourceMappingURL=index.js.map