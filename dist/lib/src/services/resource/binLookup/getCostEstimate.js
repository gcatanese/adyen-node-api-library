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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var resource_1 = __importDefault(require("../../resource"));
var client_1 = __importDefault(require("../../../client"));
var GetCostEstimate = (function (_super) {
    __extends(GetCostEstimate, _super);
    function GetCostEstimate(service) {
        return _super.call(this, service, "" + service.client.config.endpoint + client_1.default.BIN_LOOKUP_PAL_SUFFIX + client_1.default.BIN_LOOKUP_API_VERSION + "/getCostEstimate") || this;
    }
    return GetCostEstimate;
}(resource_1.default));
exports.default = GetCostEstimate;
//# sourceMappingURL=getCostEstimate.js.map