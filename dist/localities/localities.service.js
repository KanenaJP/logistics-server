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
exports.LocalitiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const locality_entity_1 = require("./entity/locality.entity");
let LocalitiesService = class LocalitiesService {
    constructor(_localitiesRepository) {
        this._localitiesRepository = _localitiesRepository;
    }
    create(locality) {
        return this._localitiesRepository.save(locality);
    }
    readAll() {
        return this._localitiesRepository.find();
    }
    readByIsoCode(countryCode, areaCode, isoCode) {
        return this._localitiesRepository.findOneBy({ countryCode, areaCode, isoCode });
    }
    update(countryCode, areaCode, isoCode, locality) {
        return this._localitiesRepository.update({ countryCode, areaCode, isoCode }, locality);
    }
    delete(countryCode, areaCode, isoCode) {
        return this._localitiesRepository.delete({ countryCode, areaCode, isoCode });
    }
};
LocalitiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(locality_entity_1.LocalityEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], LocalitiesService);
exports.LocalitiesService = LocalitiesService;
//# sourceMappingURL=localities.service.js.map