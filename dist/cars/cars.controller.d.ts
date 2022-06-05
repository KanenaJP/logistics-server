import { CarsService } from './cars.service';
import { CarDto } from './dto/car.dto';
export declare class CarsController {
    private _carsService;
    constructor(_carsService: CarsService);
    create(car: CarDto): Promise<CarDto & import("./entity/car.entity").CarEntity>;
    readAll(): Promise<import("./entity/car.entity").CarEntity[]>;
    readByIsoCode(carId: any): Promise<import("./entity/car.entity").CarEntity>;
    update(carId: any, car: CarDto): Promise<import("typeorm").UpdateResult>;
    delete(carId: any): Promise<import("typeorm").DeleteResult>;
}
