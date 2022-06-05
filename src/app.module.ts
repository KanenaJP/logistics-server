import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CountriesModule } from './countries/countries.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasModule } from './areas/areas.module';
import { LocalitiesModule } from './localities/localities.module';
import { StatusesModule } from './statuses/statuses.module';
import { TypeCounterpartiesModule } from './type-counterparties/type-counterparties.module';
import { CounterpartiesModule } from './counterparties/counterparties.module';
import { CarsModule } from './cars/cars.module';
import { TransportationOrdersModule } from './transportation-orders/transportation-orders.module';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
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
    CountriesModule,
    AreasModule,
    LocalitiesModule,
    StatusesModule,
    TypeCounterpartiesModule,
    CounterpartiesModule,
    UsersModule,
    CarsModule,
    TransportationOrdersModule,
    AuthModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
