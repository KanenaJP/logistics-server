import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CarsController } from './cars.controller';
import { CarsService } from './cars.service';
import { CarEntity } from './entity/car.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CarEntity
    ])
  ],
  controllers: [CarsController],
  providers: [CarsService]
})
export class CarsModule {}
