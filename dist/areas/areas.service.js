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
exports.AreasService = void 0;
const common_1 = require("@nestjs/common");
const area_entity_1 = require("./entity/area.entity");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
let AreasService = class AreasService {
    constructor(_areasRepository) {
        this._areasRepository = _areasRepository;
    }
    create(area) {
        return this._areasRepository.save(area);
    }
    readAll() {
        return this._areasRepository.find();
    }
    readByIsoCode(countryCode, isoCode) {
        return this._areasRepository.findOneBy({ countryCode, isoCode });
    }
    update(countryCode, isoCode, area) {
        return this._areasRepository.update({ countryCode, isoCode }, area);
    }
    delete(countryCode, isoCode) {
        return this._areasRepository.delete({ countryCode, isoCode });
    }
};
AreasService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(area_entity_1.AreaEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], AreasService);
exports.AreasService = AreasService;
//# sourceMappingURL=areas.service.js.map