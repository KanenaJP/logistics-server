"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportationOrdersController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const transportation_order_dto_1 = require("./dto/transportation-order.dto");
const transportation_orders_service_1 = require("./transportation-orders.service");
let TransportationOrdersController = class TransportationOrdersController {
    constructor(_transportationOrdersService) {
        this._transportationOrdersService = _transportationOrdersService;
    }
    create(transportationOrder) {
        return this._transportationOrdersService.create(transportationOrder);
    }
    readAll() {
        return this._transportationOrdersService.readAll();
    }
    readByTransportationOrderId(transportationOrderId) {
        return this._transportationOrdersService.readByTransportationOrderId(transportationOrderId);
    }
    update(transportationOrderId, transportationOrder) {
        return this._transportationOrdersService.update(transportationOrderId, transportationOrder);
    }
    delete(transportationOrderId) {
        return this._transportationOrdersService.delete(transportationOrderId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [transportation_order_dto_1.TransportationOrderDto]),
    __metadata("design:returntype", void 0)
], TransportationOrdersController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TransportationOrdersController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:transportationOrderId'),
    __param(0, (0, common_1.Param)('transportationOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransportationOrdersController.prototype, "readByTransportationOrderId", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:transportationOrderId'),
    __param(0, (0, common_1.Param)('transportationOrderId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TransportationOrdersController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:transportationOrderId'),
    __param(0, (0, common_1.Param)('transportationOrderId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TransportationOrdersController.prototype, "delete", null);
TransportationOrdersController = __decorate([
    (0, common_1.Controller)('api/transportation-orders'),
    __metadata("design:paramtypes", [transportation_orders_service_1.TransportationOrdersService])
], TransportationOrdersController);
exports.TransportationOrdersController = TransportationOrdersController;
//# sourceMappingURL=transportation-orders.controller.js.map