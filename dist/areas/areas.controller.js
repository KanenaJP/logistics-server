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
exports.AreasController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const areas_service_1 = require("./areas.service");
const area_dto_1 = require("./dto/area.dto");
let AreasController = class AreasController {
    constructor(_areasService) {
        this._areasService = _areasService;
    }
    create(area) {
        return this._areasService.create(area);
    }
    readAll() {
        return this._areasService.readAll();
    }
    readByIsoCode(countryCode, isoCode) {
        return this._areasService.readByIsoCode(countryCode, isoCode);
    }
    update(countryCode, isoCode, area) {
        return this._areasService.update(countryCode, isoCode, area);
    }
    delete(countryCode, isoCode) {
        return this._areasService.delete(countryCode, isoCode);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [area_dto_1.AreaDto]),
    __metadata("design:returntype", void 0)
], AreasController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], AreasController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:countryCode/:areaCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __param(1, (0, common_1.Param)('areaCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AreasController.prototype, "readByIsoCode", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:countryCode/:areaCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __param(1, (0, common_1.Param)('areaCode')),
    __param(2, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object, Object]),
    __metadata("design:returntype", void 0)
], AreasController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:countryCode/:areaCode'),
    __param(0, (0, common_1.Param)('countryCode')),
    __param(1, (0, common_1.Param)('areaCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], AreasController.prototype, "delete", null);
AreasController = __decorate([
    (0, common_1.Controller)('api/areas'),
    __metadata("design:paramtypes", [areas_service_1.AreasService])
], AreasController);
exports.AreasController = AreasController;
//# sourceMappingURL=areas.controller.js.map