"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const core_1 = require("@nestjs/core");
const swagger_1 = require("@nestjs/swagger");
const app_module_1 = require("./app.module");
const session = require("express-session");
const flash = require("connect-flash");
const passport = require("passport");
async function bootstrap() {
    const app = await core_1.NestFactory.create(app_module_1.AppModule);
    const config = new swagger_1.DocumentBuilder()
        .setTitle('Gear Logistics')
        .setDescription('The Gear Logistics API description')
        .setVersion('0.2')
        .build();
    const document = swagger_1.SwaggerModule.createDocument(app, config);
    swagger_1.SwaggerModule.setup('api', app, document);
    app.enableCors();
    app.use(session({
        secret: 'Gear Logistics API',
        resave: false,
        saveUninitialized: false,
    }));
    app.use(passport.initialize());
    app.use(passport.session());
    app.use(flash());
    await app.listen(4000);
}
bootstrap();
//# sourceMappingURL=main.js.map