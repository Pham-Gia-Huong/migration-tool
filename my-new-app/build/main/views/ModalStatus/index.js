"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_2 = require("react");
var Spinner_1 = __importDefault(require("./../../components/Spinner"));
var Modal_1 = __importDefault(require("./../../components/Modal"));
var ModalMigrateStatus = function (_a) {
    var error = _a.error, isLoading = _a.isLoading, status = _a.status;
    var _b = react_2.useState(!isLoading), isShow = _b[0], setIsShow = _b[1];
    react_2.useEffect(function () {
        setIsShow(!isLoading);
    }, [isLoading]);
    if (isLoading) {
        return react_1.default.createElement(Spinner_1.default, null);
    }
    if (status === 'fail') {
        setTimeout(function () {
            setIsShow(false);
        }, 3500);
        return react_1.default.createElement(Modal_1.default, { isOpen: isShow, type: 'danger', text: error });
    }
    if (status === 'success') {
        setTimeout(function () {
            setIsShow(false);
        }, 1500);
        return react_1.default.createElement(Modal_1.default, { isOpen: isShow, type: 'success', text: '' });
    }
    return react_1.default.createElement("div", null);
};
exports.default = ModalMigrateStatus;
//# sourceMappingURL=index.js.map