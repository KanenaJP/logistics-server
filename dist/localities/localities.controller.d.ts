import { LocalitiesService } from './localities.service';
export declare class LocalitiesController {
    private _localitiesService;
    constructor(_localitiesService: LocalitiesService);
    create(area: any): Promise<import("./dto/locality.dto").LocalityDto & import("./entity/locality.entity").LocalityEntity>;
    readAll(): Promise<import("./entity/locality.entity").LocalityEntity[]>;
    readByIsoCode(countryCode: any, areaCode: any, isoCode: any): Promise<import("./entity/locality.entity").LocalityEntity>;
    update(countryCode: any, areaCode: any, isoCode: any, locality: any): Promise<import("typeorm").UpdateResult>;
    delete(countryCode: any, areaCode: any, isoCode: any): Promise<import("typeorm").DeleteResult>;
}
