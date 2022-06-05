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
exports.CounterpartiesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const counterparties_service_1 = require("./counterparties.service");
const counterparty_dto_1 = require("./dto/counterparty.dto");
let CounterpartiesController = class CounterpartiesController {
    constructor(_counterpartiesService) {
        this._counterpartiesService = _counterpartiesService;
    }
    create(counterparty) {
        return this._counterpartiesService.create(counterparty);
    }
    readAll() {
        return this._counterpartiesService.readAll();
    }
    readByIsoCode(counterpartyId) {
        return this._counterpartiesService.readById(counterpartyId);
    }
    update(counterpartyId, counterparty) {
        return this._counterpartiesService.update(counterpartyId, counterparty);
    }
    delete(counterpartyId) {
        return this._counterpartiesService.delete(counterpartyId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [counterparty_dto_1.CounterpartyDto]),
    __metadata("design:returntype", void 0)
], CounterpartiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CounterpartiesController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:counterpartyId/'),
    __param(0, (0, common_1.Param)('counterpartyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CounterpartiesController.prototype, "readByIsoCode", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:counterpartyId'),
    __param(0, (0, common_1.Param)('counterpartyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, counterparty_dto_1.CounterpartyDto]),
    __metadata("design:returntype", void 0)
], CounterpartiesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:counterpartyId'),
    __param(0, (0, common_1.Param)('counterpartyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CounterpartiesController.prototype, "delete", null);
CounterpartiesController = __decorate([
    (0, common_1.Controller)('api/counterparties'),
    __metadata("design:paramtypes", [counterparties_service_1.CounterpartiesService])
], CounterpartiesController);
exports.CounterpartiesController = CounterpartiesController;
//# sourceMappingURL=counterparties.controller.js.map