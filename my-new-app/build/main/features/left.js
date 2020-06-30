"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.detectSeleted = exports.navigationToPage = void 0;
var navigationToPage = function (key, item, history) {
    switch (key) {
        case 0:
            history.push("/login");
            break;
        case 1:
            history.push('/migrateConfig');
            break;
        default:
            break;
    }
};
exports.navigationToPage = navigationToPage;
var detectSeleted = function (listItem, pathName) {
    var listSelected = listItem.map(function (item, key) {
        if (pathName === item.pathName) {
            item.selected = true;
            return item;
        }
        item.selected = false;
        return item;
    });
    return listSelected;
};
exports.detectSeleted = detectSeleted;
//# sourceMappingURL=left.js.map