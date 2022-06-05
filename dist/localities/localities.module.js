"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.LocalitiesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const locality_entity_1 = require("./entity/locality.entity");
const localities_controller_1 = require("./localities.controller");
const localities_service_1 = require("./localities.service");
let LocalitiesModule = class LocalitiesModule {
};
LocalitiesModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                locality_entity_1.LocalityEntity
            ])
        ],
        controllers: [localities_controller_1.LocalitiesController],
        providers: [localities_service_1.LocalitiesService]
    })
], LocalitiesModule);
exports.LocalitiesModule = LocalitiesModule;
//# sourceMappingURL=localities.module.js.map