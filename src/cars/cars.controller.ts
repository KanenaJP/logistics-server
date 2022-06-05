import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';

@Controller('api/cars')
export class CarsController {
  constructor(private _carsService: CarsService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() car: CarDto) {
    return this._carsService.create(car);
  }

  @Get('/read/all')
  readAll() {
    return this._carsService.readAll();
  }

  @Get('/read/:carId/')
  readByIsoCode(@Param('carId') carId) {
    return this._carsService.readById(carId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:carId')
  update(@Param('carId') carId, @Body() car: CarDto) {
    return this._carsService.update(carId, car);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:carId')
  delete(@Param('carId') carId) {
    return this._carsService.delete(carId);
  }
}
