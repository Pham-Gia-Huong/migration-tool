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
require("./index.css");
var Sidebar_1 = __importDefault(require("../../components/Sidebar"));
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var left_1 = require("../../features/left");
var appHook_1 = __importDefault(require("../../hooks/appHook"));
var migrateHook_1 = __importDefault(require("../../hooks/migrateHook"));
var LeftSide = function (_a) {
    var history = _a.history;
    var useApp = appHook_1.default();
    var useMigrate = migrateHook_1.default();
    var location = history.location;
    var _b = react_1.useState([
        { name: 'Login', icon: free_solid_svg_icons_1.faUserCog, selected: location.pathname === "/login", pathName: "/login" },
        { name: 'Setting', icon: free_solid_svg_icons_1.faWrench, selected: location.pathname === "/migrateConfig", pathName: "/migrateConfig" },
    ]), listItem = _b[0], setListItem = _b[1];
    return (react_1.default.createElement("div", { className: "left-side" },
        react_1.default.createElement(Sidebar_1.default, { onClick: function (key, item) {
                left_1.navigationToPage(key, item, history);
                var listSelected = left_1.detectSeleted(listItem, history.location.pathname);
                setListItem(listSelected);
                useApp.clearError();
                useMigrate.clearError();
            }, listItem: listItem })));
};
exports.default = LeftSide;
//# sourceMappingURL=index.js.map