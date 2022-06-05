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
exports.CounterpartiesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const counterparty_entity_1 = require("./entity/counterparty.entity");
let CounterpartiesService = class CounterpartiesService {
    constructor(_counterpartiesRepository) {
        this._counterpartiesRepository = _counterpartiesRepository;
    }
    create(counterpatry) {
        return this._counterpartiesRepository.save(counterpatry);
    }
    readAll() {
        return this._counterpartiesRepository.find();
    }
    readById(id) {
        return this._counterpartiesRepository.findOneBy({ id });
    }
    update(id, counterpatry) {
        return this._counterpartiesRepository.update({ id }, counterpatry);
    }
    delete(id) {
        return this._counterpartiesRepository.delete({ id });
    }
};
CounterpartiesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(counterparty_entity_1.CounterpartyEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], CounterpartiesService);
exports.CounterpartiesService = CounterpartiesService;
//# sourceMappingURL=counterparties.service.js.map