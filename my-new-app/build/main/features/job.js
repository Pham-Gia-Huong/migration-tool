"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.addJobMigrateInfor = exports.clearJobSelected = exports.deleteJob = exports.addJob = exports.editJob = exports.parseJobListToUi = exports.findJobSelected = exports.addTitleToJob = exports.addFieldMapListToJob = void 0;
var react_1 = __importDefault(require("react"));
var JobRow_1 = __importDefault(require("../views/JobRow"));
var defaultData_1 = require("../context/reducer/job/defaultData");
var parseJobListToUi = function (jobList) {
    var newJobUi = JSON.parse(JSON.stringify(jobList));
    var jobUi = newJobUi.map(function (job) {
        return {
            content: ["" + job.id, "" + job.title, react_1.default.createElement(JobRow_1.default, { id: job.id })],
        };
    });
    return jobUi;
};
exports.parseJobListToUi = parseJobListToUi;
var addJob = function (jobList, id) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    var max = newJobList.map(function (job) { return job.id; }).reduce(function (newValue, currentValue) { return Math.max(newValue, currentValue); });
    var index = newJobList.findIndex(function (job) { return job.id === id; });
    var indexMax = newJobList.findIndex(function (job) { return job.id === max; });
    var job = { id: newJobList[indexMax].id + 1, title: 'My job ' + newJobList[indexMax].id, selected: false, migrateInfo: defaultData_1.jobValue.jobList[0].migrateInfo };
    newJobList.splice(index + 1, 0, job);
    return newJobList;
};
exports.addJob = addJob;
var editJob = function (jobList, id) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList = newJobList.map(function (job) {
        if (job.id === id) {
            job.selected = true;
        }
        else {
            job.selected = false;
        }
        return job;
    });
    return newJobList;
};
exports.editJob = editJob;
var deleteJob = function (jobList, id) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList.map(function (job, i) {
        if (job.id === id) {
            newJobList.splice(i, 1);
        }
    });
    return newJobList;
};
exports.deleteJob = deleteJob;
var clearJobSelected = function (jobList) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList = newJobList.map(function (job) {
        job.selected = false;
        return job;
    });
    return newJobList;
};
exports.clearJobSelected = clearJobSelected;
var addJobMigrateInfor = function (jobList, newMigrateInfo) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList = newJobList.map(function (job) {
        if (job.selected) {
            job.migrateInfo = newMigrateInfo;
        }
        return job;
    });
    return newJobList;
};
exports.addJobMigrateInfor = addJobMigrateInfor;
var addFieldMapListToJob = function (jobList, id, fieldMapList) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList = newJobList.map(function (job) {
        if (job.selected) {
            job.migrateInfo.fieldMapList = fieldMapList;
        }
        return job;
    });
    return newJobList;
};
exports.addFieldMapListToJob = addFieldMapListToJob;
var findJobSelected = function (jobList) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    var jobListMatchId = newJobList.filter(function (job) { return job.selected; });
    var newJobMatchId = {};
    if (jobListMatchId) {
        newJobMatchId = jobListMatchId[0];
    }
    return newJobMatchId;
};
exports.findJobSelected = findJobSelected;
var addTitleToJob = function (jobList, title) {
    var newJobList = JSON.parse(JSON.stringify(jobList));
    newJobList = newJobList.map(function (job) {
        if (job.selected) {
            job.title = title;
        }
        return job;
    });
    return newJobList;
};
exports.addTitleToJob = addTitleToJob;
//# sourceMappingURL=job.js.map