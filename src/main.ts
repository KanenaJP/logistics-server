import { NestFactory } from '@nestjs/core';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';
import * as session from 'express-session';
import flash = require("connect-flash");
import * as passport from 'passport';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Gear Logistics')
    .setDescription('The Gear Logistics API description')
    .setVersion('0.2')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();

  app.use(
    session({
      secret: 'Gear Logistics API',
      resave: false,
      saveUninitialized: false,
    }),
  );

  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());

  await app.listen(4000);
}

bootstrap();
