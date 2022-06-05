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
exports.TypeCounterpartiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("typeorm");
const typeorm_2 = require("@nestjs/typeorm");
const type_counterparty_entity_1 = require("./entity/type-counterparty.entity");
let TypeCounterpartiesService = class TypeCounterpartiesService {
    constructor(_typeConterpartiesRepository) {
        this._typeConterpartiesRepository = _typeConterpartiesRepository;
    }
    create(typeConterparty) {
        return this._typeConterpartiesRepository.save(typeConterparty);
    }
    readAll() {
        return this._typeConterpartiesRepository.find();
    }
    readByTypeConterpartyId(statusId) {
        return this._typeConterpartiesRepository.findOneBy({ id: statusId });
    }
    update(typeConterpartyId, typeConterparty) {
        return this._typeConterpartiesRepository.update({ id: typeConterpartyId }, typeConterparty);
    }
    delete(typeConterpartyId) {
        return this._typeConterpartiesRepository.delete({ id: typeConterpartyId });
    }
};
TypeCounterpartiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_2.InjectRepository)(type_counterparty_entity_1.TypeCounterpartyEntity)),
    __metadata("design:paramtypes", [typeorm_1.Repository])
], TypeCounterpartiesService);
exports.TypeCounterpartiesService = TypeCounterpartiesService;
//# sourceMappingURL=type-counterparties.service.js.map