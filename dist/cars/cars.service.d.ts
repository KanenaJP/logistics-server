import { Repository } from 'typeorm';
import { CarDto } from './dto/car.dto';
import { CarEntity } from './entity/car.entity';
export declare class CarsService {
    private _carsRepository;
    constructor(_carsRepository: Repository<CarEntity>);
    create(car: CarDto): Promise<CarDto & CarEntity>;
    readAll(): Promise<CarEntity[]>;
    readById(id: number): Promise<CarEntity>;
    update(id: number, car: CarDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
