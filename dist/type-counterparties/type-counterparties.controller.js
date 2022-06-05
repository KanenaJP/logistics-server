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
exports.TypeCounterpartiesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const type_counterparties_service_1 = require("./type-counterparties.service");
let TypeCounterpartiesController = class TypeCounterpartiesController {
    constructor(_typeConterpartiesService) {
        this._typeConterpartiesService = _typeConterpartiesService;
    }
    create(typeConterparty) {
        return this._typeConterpartiesService.create(typeConterparty);
    }
    readAll() {
        return this._typeConterpartiesService.readAll();
    }
    readByIsoCode(typeConterpartyId) {
        return this._typeConterpartiesService.readByTypeConterpartyId(typeConterpartyId);
    }
    update(typeConterpartyId, typeConterparty) {
        return this._typeConterpartiesService.update(typeConterpartyId, typeConterparty);
    }
    delete(typeConterpartyId) {
        return this._typeConterpartiesService.delete(typeConterpartyId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeCounterpartiesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], TypeCounterpartiesController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:typeConterpartyId'),
    __param(0, (0, common_1.Param)('typeConterpartyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeCounterpartiesController.prototype, "readByIsoCode", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:typeConterpartyId'),
    __param(0, (0, common_1.Param)('typeConterpartyId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], TypeCounterpartiesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:typeConterpartyId'),
    __param(0, (0, common_1.Param)('typeConterpartyId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], TypeCounterpartiesController.prototype, "delete", null);
TypeCounterpartiesController = __decorate([
    (0, common_1.Controller)('api/type-counterparties'),
    __metadata("design:paramtypes", [type_counterparties_service_1.TypeCounterpartiesService])
], TypeCounterpartiesController);
exports.TypeCounterpartiesController = TypeCounterpartiesController;
//# sourceMappingURL=type-counterparties.controller.js.map