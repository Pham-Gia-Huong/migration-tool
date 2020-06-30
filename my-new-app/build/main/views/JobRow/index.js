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
var jobHook_1 = __importDefault(require("../../hooks/jobHook"));
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var job_1 = require("../../features/job");
var context_1 = require("../../context");
require("./index.css");
var JobRow = function (_a) {
    var id = _a.id;
    var job = react_1.useContext(context_1.context).job;
    var jobUse = jobHook_1.default();
    var jobState = job.state;
    var handleDelete = function (id) {
        var newJobList = job_1.deleteJob(jobState.jobList, id);
        jobUse.saveJob(newJobList);
    };
    var handleAdd = function (id) {
        var newJobList = job_1.addJob(jobState.jobList, id);
        jobUse.saveJob(newJobList);
    };
    var handleEdit = function (id) {
        var newJobList = job_1.editJob(jobState.jobList, id);
        jobUse.saveJob(newJobList);
    };
    return (react_1.default.createElement("div", { className: "action-row" },
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faPlus, onClick: function () { return handleAdd(id); } }),
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faMinus, onClick: function () { return handleDelete(id); } }),
        react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faEdit, onClick: function () { return handleEdit(id); } })));
};
exports.default = JobRow;
//# sourceMappingURL=index.js.map