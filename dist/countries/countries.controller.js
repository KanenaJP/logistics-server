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
exports.CountriesController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const countries_service_1 = require("./countries.service");
const country_dto_1 = require("./dto/country.dto");
let CountriesController = class CountriesController {
    constructor(_countriesService) {
        this._countriesService = _countriesService;
    }
    create(county) {
        return this._countriesService.create(county);
    }
    readAll() {
        return this._countriesService.readAll();
    }
    readByIsoCode(isoCode) {
        return this._countriesService.readByIsoCode(isoCode);
    }
    update(isoCode, country) {
        return this._countriesService.update(isoCode, country);
    }
    delete(isoCode) {
        return this._countriesService.delete(isoCode);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [country_dto_1.CountryDto]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:isoCode'),
    __param(0, (0, common_1.Param)('isoCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "readByIsoCode", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:isoCode'),
    __param(0, (0, common_1.Param)('isoCode')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:isoCode'),
    __param(0, (0, common_1.Param)('isoCode')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CountriesController.prototype, "delete", null);
CountriesController = __decorate([
    (0, common_1.Controller)('api/countries'),
    __metadata("design:paramtypes", [countries_service_1.CountriesService])
], CountriesController);
exports.CountriesController = CountriesController;
//# sourceMappingURL=countries.controller.js.map