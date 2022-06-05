import { CountriesService } from './countries.service';
import { CountryDto } from './dto/country.dto';
export declare class CountriesController {
    private _countriesService;
    constructor(_countriesService: CountriesService);
    create(county: CountryDto): Promise<CountryDto & import("./entity/country.entity").CountryEntity>;
    readAll(): Promise<import("./entity/country.entity").CountryEntity[]>;
    readByIsoCode(isoCode: any): Promise<import("./entity/country.entity").CountryEntity>;
    update(isoCode: any, country: any): Promise<import("typeorm").UpdateResult>;
    delete(isoCode: any): Promise<import("typeorm").DeleteResult>;
}
