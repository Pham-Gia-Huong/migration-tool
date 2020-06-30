"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var react_1 = __importDefault(require("react"));
require("./index.css");
var react_fontawesome_1 = require("@fortawesome/react-fontawesome");
var free_solid_svg_icons_1 = require("@fortawesome/free-solid-svg-icons");
var FormFromMigrate_1 = __importDefault(require("../FormFromMigrate"));
var FormToMigrate_1 = __importDefault(require("../FormToMigrate"));
var ContainerForm = function (_a) {
    var fromDomain = _a.fromDomain, fromApp = _a.fromApp, tokenAppFrom = _a.tokenAppFrom, setFromDomain = _a.setFromDomain, setTokenAppFrom = _a.setTokenAppFrom, setFromApp = _a.setFromApp, toDomain = _a.toDomain, toApp = _a.toApp, tokenAppTo = _a.tokenAppTo, setToDomain = _a.setToDomain, setToApp = _a.setToApp, setTokenAppTo = _a.setTokenAppTo, setQuery = _a.setQuery, setFields = _a.setFields, query = _a.query, fields = _a.fields;
    var hoverContainer = function () {
        var parentNode = document.getElementsByClassName('wrap-from')[0];
        parentNode.style.border = '2px solid #34242454';
    };
    var removeHoverContainer = function () {
        var parentNode = document.getElementsByClassName('wrap-from')[0];
        parentNode.style.border = 'none';
    };
    // const ContainerAdd = () => {
    //   return (
    //     <div className="wrap-from-add">
    //       <div className="wrap-from-add-hover" onMouseOver={hoverContainer} onMouseOut={removeHoverContainer}>
    //         <FontAwesomeIcon icon={faPlusCircle} />
    //       </div>
    //     </div>
    //   );
    // };
    return (react_1.default.createElement("div", { className: "wrap-from" },
        react_1.default.createElement(FormFromMigrate_1.default, { title: 'get', name: 'Get App', domain: fromDomain, app: fromApp, token: tokenAppFrom, setDomain: setFromDomain, setToken: setTokenAppFrom, setApp: setFromApp, query: query, setQuery: setQuery, fields: fields, setFields: setFields }),
        react_1.default.createElement("div", { className: "wrap-from-arrow" },
            react_1.default.createElement(react_fontawesome_1.FontAwesomeIcon, { icon: free_solid_svg_icons_1.faCaretRight })),
        react_1.default.createElement(FormToMigrate_1.default, { title: 'set', name: 'Set App', domain: toDomain, app: toApp, token: tokenAppTo, setDomain: setToDomain, setApp: setToApp, setToken: setTokenAppTo })));
};
exports.default = ContainerForm;
//# sourceMappingURL=index.js.map