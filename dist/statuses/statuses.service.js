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
exports.StatusesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const status_entity_1 = require("./entity/status.entity");
let StatusesService = class StatusesService {
    constructor(_statusesRepository) {
        this._statusesRepository = _statusesRepository;
    }
    create(status) {
        return this._statusesRepository.save(status);
    }
    readAll() {
        return this._statusesRepository.find();
    }
    readByStatusId(statusId) {
        return this._statusesRepository.findOneBy({ id: statusId });
    }
    update(statusId, status) {
        return this._statusesRepository.update({ id: statusId }, status);
    }
    delete(statusId) {
        return this._statusesRepository.delete({ id: statusId });
    }
};
StatusesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(status_entity_1.StatusEntity)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], StatusesService);
exports.StatusesService = StatusesService;
//# sourceMappingURL=statuses.service.js.map