"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const countries_module_1 = require("./countries/countries.module");
const typeorm_1 = require("@nestjs/typeorm");
const areas_module_1 = require("./areas/areas.module");
const localities_module_1 = require("./localities/localities.module");
const statuses_module_1 = require("./statuses/statuses.module");
const type_counterparties_module_1 = require("./type-counterparties/type-counterparties.module");
const counterparties_module_1 = require("./counterparties/counterparties.module");
const cars_module_1 = require("./cars/cars.module");
const transportation_orders_module_1 = require("./transportation-orders/transportation-orders.module");
const auth_module_1 = require("./auth/auth.module");
const users_module_1 = require("./users/users.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Module)({
        imports: [
            typeorm_1.TypeOrmModule.forRoot({
                type: 'postgres',
                host: 'localhost',
                port: 5432,
                username: 'postgres',
                password: 'masterkey',
                database: 'gear_logistics',
                entities: ['dist/**/**/*.entity{.js,.ts}'],
                synchronize: true,
                autoLoadEntities: true
            }),
            countries_module_1.CountriesModule,
            areas_module_1.AreasModule,
            localities_module_1.LocalitiesModule,
            statuses_module_1.StatusesModule,
            type_counterparties_module_1.TypeCounterpartiesModule,
            counterparties_module_1.CounterpartiesModule,
            users_module_1.UsersModule,
            cars_module_1.CarsModule,
            transportation_orders_module_1.TransportationOrdersModule,
            auth_module_1.AuthModule,
        ],
        controllers: [app_controller_1.AppController],
        providers: [app_service_1.AppService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map