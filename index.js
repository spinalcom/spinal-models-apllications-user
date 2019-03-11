"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var spinal_core_connectorjs_type_1 = require("spinal-core-connectorjs_type");
var ApplicationConfig = /** @class */ (function (_super) {
    __extends(ApplicationConfig, _super);
    function ApplicationConfig() {
        var _this = _super.call(this) || this;
        _this.add_attr({
            name: '',
            description: '',
            users: new spinal.Lst(),
        });
        return _this;
    }
    return ApplicationConfig;
}(spinal_core_connectorjs_type_1.Model));
exports.ApplicationConfig = ApplicationConfig;
var GlobalUserConfig = /** @class */ (function (_super) {
    __extends(GlobalUserConfig, _super);
    function GlobalUserConfig() {
        var _this = _super.call(this) || this;
        _this.add_attr({
            integrateur: new spinal.Lst(),
            mainteneur: new spinal.Lst(),
            assetManageur: new spinal.Lst(),
            user: new spinal.Lst()
        });
        return _this;
    }
    return GlobalUserConfig;
}(spinal_core_connectorjs_type_1.Model));
exports.GlobalUserConfig = GlobalUserConfig;
spinal_core_connectorjs_type_1.spinalCore.register_models(GlobalUserConfig);
spinal_core_connectorjs_type_1.spinalCore.register_models(ApplicationConfig);
