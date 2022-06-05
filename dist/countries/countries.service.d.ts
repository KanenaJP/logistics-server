import { CountryDto } from './dto/country.dto';
import { CountryEntity } from './entity/country.entity';
import { Repository } from 'typeorm';
export declare class CountriesService {
    private _counrtyRepository;
    constructor(_counrtyRepository: Repository<CountryEntity>);
    create(country: CountryDto): Promise<CountryDto & CountryEntity>;
    readAll(): Promise<CountryEntity[]>;
    readByIsoCode(isoCode: number): Promise<CountryEntity>;
    update(isoCode: number, country: CountryDto): Promise<import("typeorm").UpdateResult>;
    delete(isoCode: number): Promise<import("typeorm").DeleteResult>;
}
