"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.migrateRecords = void 0;
var migration_tool_1 = require("migration-tool");
var parseRecordsFromTo = function (records, fieldMapList) {
    var newRecord = JSON.parse(JSON.stringify(records));
    newRecord = newRecord.map(function (record) {
        var _loop_1 = function (key) {
            fieldMapList.forEach(function (fieldMap) {
                if (fieldMap.from === key) {
                    record[fieldMap.to] = record[key];
                    delete record[key];
                }
            });
        };
        for (var key in record) {
            _loop_1(key);
        }
        return record;
    });
    return newRecord;
};
var migrateRecords = function (data) {
    var migration = new migration_tool_1.Migration();
    return migration
        .records(function (records) {
        var newRecords = parseRecordsFromTo(records, data.fieldMapFromTo);
        return { app: Number(data.toApp), records: newRecords };
    }, { app: Number(data.fromApp), fields: data.fields, query: data.query })
        .from(data.fromDomain, { apiToken: data.tokenAppFrom })
        .to(data.toDomain, { apiToken: data.tokenAppTo })
        .run();
};
exports.migrateRecords = migrateRecords;
//# sourceMappingURL=index.js.map