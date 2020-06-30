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
exports.ListFieldMap = void 0;
var react_1 = __importStar(require("react"));
var Dropdown_1 = __importDefault(require("../../../components/Dropdown"));
var app_1 = require("../../../features/app");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var appHook_1 = __importDefault(require("../../../hooks/appHook"));
var jobHook_1 = __importDefault(require("../../../hooks/jobHook"));
var context_1 = require("../../../context/");
var app_2 = require("../../../features/app");
var job_1 = require("../../../features/job");
require("./index.css");
exports.ListFieldMap = function (_a) {
    var id = _a.id, showIcon = _a.showIcon, indexListString = _a.indexListString, field = _a.field;
    var _b = react_1.useContext(context_1.context), AppContext = _b.app, job = _b.job;
    // const {records: fieldMapList} = AppContext.state;
    var jobList = job.state.jobList;
    var useApp = appHook_1.default();
    var useJob = jobHook_1.default();
    return (react_1.default.createElement(react_1.default.Fragment, null, jobList.map(function (job) {
        return job.migrateInfo.fieldMapList.map(function (fieldMap, key) {
            if (job.id === id) {
                return (react_1.default.createElement("div", { className: "field-map-wrapped", key: key },
                    showIcon && (react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus, onClick: function () {
                            var newFileMapList = app_1.addDataFieldMapList(job.migrateInfo.fieldMapList);
                            // useApp.updateFieldMap(newFileMapList);
                            var newJobList = job_1.addFieldMapListToJob(jobList, id, newFileMapList);
                            useJob.saveJob(newJobList);
                        } })),
                    react_1.default.createElement(Dropdown_1.default, { itemList: fieldMap[indexListString], label: app_2.getKeyValue(field)(fieldMap).label, onClick: function (key, item) {
                            var newFileMapList = app_1.updateFromFieldMapValue(job.migrateInfo.fieldMapList, fieldMap.id, item.value, indexListString, field);
                            var newJobList = job_1.addFieldMapListToJob(jobList, id, newFileMapList);
                            useJob.saveJob(newJobList);
                            // useApp.updateFieldMap(newFileMapList);
                        } })));
            }
        });
    })));
};
//# sourceMappingURL=index.js.map