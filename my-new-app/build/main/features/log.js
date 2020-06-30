"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.addLog = exports.parseLogList = void 0;
var parseLogList = function (listLog) {
    var newListLog = JSON.parse(JSON.stringify(listLog));
    var logUi = newListLog.map(function (log) {
        return {
            content: ["" + log.id, log.fromDomain, log.toDomain, "" + log.from, "" + log.to, log.action, log.message]
        };
    });
    return logUi;
};
exports.parseLogList = parseLogList;
var addLog = function (logList, log) {
    var newLog = JSON.parse(JSON.stringify(log));
    if (logList && logList.length === 0) {
        newLog.id = 1;
    }
    else {
        newLog.id = logList[logList.length - 1].id + 1;
    }
    logList.push(newLog);
};
exports.addLog = addLog;
//# sourceMappingURL=log.js.map