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
exports.CarsController = void 0;
const common_1 = require("@nestjs/common");
const jwt_auth_guard_1 = require("../auth/jwt-auth.guard");
const cars_service_1 = require("./cars.service");
const car_dto_1 = require("./dto/car.dto");
let CarsController = class CarsController {
    constructor(_carsService) {
        this._carsService = _carsService;
    }
    create(car) {
        return this._carsService.create(car);
    }
    readAll() {
        return this._carsService.readAll();
    }
    readByIsoCode(carId) {
        return this._carsService.readById(carId);
    }
    update(carId, car) {
        return this._carsService.update(carId, car);
    }
    delete(carId) {
        return this._carsService.delete(carId);
    }
};
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Post)('/create'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [car_dto_1.CarDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "create", null);
__decorate([
    (0, common_1.Get)('/read/all'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "readAll", null);
__decorate([
    (0, common_1.Get)('/read/:carId/'),
    __param(0, (0, common_1.Param)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "readByIsoCode", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Patch)('/update/:carId'),
    __param(0, (0, common_1.Param)('carId')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, car_dto_1.CarDto]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "update", null);
__decorate([
    (0, common_1.UseGuards)(jwt_auth_guard_1.JwtAuthGuard),
    (0, common_1.Delete)('/delete/:carId'),
    __param(0, (0, common_1.Param)('carId')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CarsController.prototype, "delete", null);
CarsController = __decorate([
    (0, common_1.Controller)('api/cars'),
    __metadata("design:paramtypes", [cars_service_1.CarsService])
], CarsController);
exports.CarsController = CarsController;
//# sourceMappingURL=cars.controller.js.map