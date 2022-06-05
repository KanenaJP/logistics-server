import { Repository } from 'typeorm';
import { LocalityDto } from './dto/locality.dto';
import { LocalityEntity } from './entity/locality.entity';
export declare class LocalitiesService {
    private _localitiesRepository;
    constructor(_localitiesRepository: Repository<LocalityEntity>);
    create(locality: LocalityDto): Promise<LocalityDto & LocalityEntity>;
    readAll(): Promise<LocalityEntity[]>;
    readByIsoCode(countryCode: number, areaCode: number, isoCode: number): Promise<LocalityEntity>;
    update(countryCode: number, areaCode: number, isoCode: number, locality: LocalityDto): Promise<import("typeorm").UpdateResult>;
    delete(countryCode: number, areaCode: number, isoCode: number): Promise<import("typeorm").DeleteResult>;
}
