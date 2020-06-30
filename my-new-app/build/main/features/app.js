"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getKeyValue = exports.addDataFieldMapList = exports.updateFromFieldMapValue = exports.createFieldMapList = void 0;
var _parseFieldCode = function (fieldCodeObj) {
    var fieldCodeList = [];
    for (var prop in fieldCodeObj) {
        var fieldParse = {
            label: prop.toLowerCase(),
            value: prop,
        };
        fieldCodeList.push(fieldParse);
    }
    return fieldCodeList;
};
var createFieldMapList = function (data) {
    var records = data.records;
    var fieldCodeFromList = _parseFieldCode(records.formFieldFrom.properties);
    var fieldCodeToList = _parseFieldCode(records.formFieldTo.properties);
    var defaultFromValue = fieldCodeFromList[0];
    var defaultToValue = fieldCodeToList[0];
    return [
        {
            fieldCodeFromList: fieldCodeFromList,
            fieldCodeToList: fieldCodeToList,
            from: defaultFromValue,
            to: defaultToValue,
            id: records.id,
            status: data.status,
        },
    ];
};
exports.createFieldMapList = createFieldMapList;
var getKeyValue = function (key) { return function (obj) { return obj[key]; }; };
exports.getKeyValue = getKeyValue;
var updateFromFieldMapValue = function (fieldMapList, id, value, prefixList, prefixChange) {
    var newFieldMapList = JSON.parse(JSON.stringify(fieldMapList));
    newFieldMapList.map(function (fieldMap) {
        getKeyValue(prefixList)(fieldMap).map(function (fieldValue) {
            if (fieldMap.id === id) {
                getKeyValue(prefixChange)(fieldMap).value = value;
                getKeyValue(prefixChange)(fieldMap).label = value.toLocaleLowerCase();
            }
            return fieldValue;
        });
    });
    return newFieldMapList;
};
exports.updateFromFieldMapValue = updateFromFieldMapValue;
var addDataFieldMapList = function (fieldMapList) {
    var newFieldMapList = JSON.parse(JSON.stringify(fieldMapList));
    var newFieldMap = JSON.parse(JSON.stringify(newFieldMapList[newFieldMapList.length - 1]));
    newFieldMap.id = newFieldMap.id + 1;
    newFieldMap.from = newFieldMap.fieldCodeFromList[0];
    newFieldMap.to = newFieldMap.fieldCodeToList[0];
    newFieldMapList.push(newFieldMap);
    return newFieldMapList;
};
exports.addDataFieldMapList = addDataFieldMapList;
//# sourceMappingURL=app.js.map