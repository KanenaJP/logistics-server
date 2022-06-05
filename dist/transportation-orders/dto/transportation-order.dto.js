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
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportationOrderDto = void 0;
const class_validator_1 = require("class-validator");
class TransportationOrderDto {
}
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "id", void 0);
__decorate([
    (0, class_validator_1.IsString)(),
    __metadata("design:type", String)
], TransportationOrderDto.prototype, "name", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "carCount", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], TransportationOrderDto.prototype, "loadingDate", void 0);
__decorate([
    (0, class_validator_1.IsDate)(),
    __metadata("design:type", Date)
], TransportationOrderDto.prototype, "unloadingDate", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "status", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "fromCountry", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "fromArea", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "fromLocality", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "toCountry", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "toArea", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "toLocality", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "weight", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "volume", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "rateToCarrier", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "rateToYou", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "company", void 0);
__decorate([
    (0, class_validator_1.IsNumber)(),
    __metadata("design:type", Number)
], TransportationOrderDto.prototype, "carrier", void 0);
exports.TransportationOrderDto = TransportationOrderDto;
//# sourceMappingURL=transportation-order.dto.js.map