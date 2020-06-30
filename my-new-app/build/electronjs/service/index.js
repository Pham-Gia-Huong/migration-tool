"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listener = void 0;
var type_1 = require("./migration/type");
var type_2 = require("./app/type");
var migration_1 = require("./migration");
var app_1 = require("./app");
var resultIpcMain = function (event, record, log) {
    record
        .then(function (data) {
        event.reply('response', { status: 'success', records: data, log: log });
    })
        .catch(function (error) {
        event.reply('response', { status: 'fail', error: error.message, log: log });
    });
    return event;
};
var listener = function (event, arg) {
    var record;
    var params = {
        id: arg.data.id + 1,
        fromDomain: arg.data.fromDomain,
        toDomain: arg.data.toDomain,
        from: arg.data.fromApp,
        to: arg.data.toApp,
        action: arg.type
    };
    switch (arg.type) {
        case type_1.MIGRATE_RECORDS: {
            record = migration_1.migrateRecords(arg.data);
            break;
        }
        case type_2.GET_FORM_FIELD: {
            record = app_1.getFormMigrate(arg.data);
            break;
        }
    }
    return resultIpcMain(event, record, params);
};
exports.listener = listener;
//# sourceMappingURL=index.js.map