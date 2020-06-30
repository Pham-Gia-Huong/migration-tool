"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
var react_router_dom_1 = require("react-router-dom");
var Left_1 = __importDefault(require("../views/Left"));
var MigrateRecord_1 = __importDefault(require("../views/MigrateRecord"));
var login_1 = __importDefault(require("../views/login"));
exports.default = (function () {
    return (react_1.default.createElement(react_router_dom_1.HashRouter, null,
        react_1.default.createElement(react_router_dom_1.Route, { path: "/", component: Left_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/migrateConfig", component: MigrateRecord_1.default }),
        react_1.default.createElement(react_router_dom_1.Route, { path: "/login", component: login_1.default })));
});
//# sourceMappingURL=index.js.map