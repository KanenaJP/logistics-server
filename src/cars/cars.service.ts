import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { CarEntity } from './entity/car.entity';

@Injectable()
export class CarsService {
  constructor(
    @InjectRepository(CarEntity)
    private _carsRepository: Repository<CarEntity>
  ) { }

  create(car: CarDto) {
    return this._carsRepository.save(car);
  }

  readAll() {
    return this._carsRepository.find();
  }

  readById(id: number) {
    return this._carsRepository.findOneBy({ id });
  }

  update(id: number, car: CarDto) {
    return this._carsRepository.update({ id }, car);
  }

  delete(id: number) {
    return this._carsRepository.delete({ id });
  }
}
