"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TransportationOrdersModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const transportation_orders_entity_1 = require("./entity/transportation-orders.entity");
const transportation_orders_controller_1 = require("./transportation-orders.controller");
const transportation_orders_service_1 = require("./transportation-orders.service");
let TransportationOrdersModule = class TransportationOrdersModule {
};
TransportationOrdersModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forFeature([
                transportation_orders_entity_1.TransportationOrderEntity
            ])
        ],
        controllers: [transportation_orders_controller_1.TransportationOrdersController],
        providers: [transportation_orders_service_1.TransportationOrdersService]
    })
], TransportationOrdersModule);
exports.TransportationOrdersModule = TransportationOrdersModule;
//# sourceMappingURL=transportation-orders.module.js.map