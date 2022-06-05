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
exports.TransportationOrdersService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const transportation_orders_entity_1 = require("./entity/transportation-orders.entity");
let TransportationOrdersService = class TransportationOrdersService {
    constructor(_transportationOrdersRepository) {
        this._transportationOrdersRepository = _transportationOrdersRepository;
    }
    create(transportationOrder) {
        return this._transportationOrdersRepository.save(transportationOrder);
    }
    readAll() {
        return this._transportationOrdersRepository.find();
    }
    readByTransportationOrderId(transportationOrderId) {
        return this._transportationOrdersRepository.findOneBy({ id: transportationOrderId });
    }
    update(transportationOrderId, transportationOrder) {
        return this._transportationOrdersRepository.update({ id: transportationOrderId }, transportationOrder);
    }
    delete(transportationOrderId) {
        return this._transportationOrdersRepository.delete({ id: transportationOrderId });
    }
};
TransportationOrdersService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(transportation_orders_entity_1.TransportationOrderEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], TransportationOrdersService);
exports.TransportationOrdersService = TransportationOrdersService;
//# sourceMappingURL=transportation-orders.service.js.map