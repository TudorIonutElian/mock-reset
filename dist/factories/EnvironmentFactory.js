"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Factory_1 = require("./Factory");
var EnvironmentFactory = /** @class */ (function (_super) {
    __extends(EnvironmentFactory, _super);
    function EnvironmentFactory() {
        var _this = _super !== null && _super.apply(this, arguments) || this;
        _this.name = "X";
        _this.build = function (params) {
            console.log("Building the environment with name: ");
        };
        _this.displayDetails = function () {
            console.log("Building the environment with name: ");
        };
        return _this;
    }
    return EnvironmentFactory;
}(Factory_1.default));
exports.default = EnvironmentFactory;
//# sourceMappingURL=EnvironmentFactory.js.map