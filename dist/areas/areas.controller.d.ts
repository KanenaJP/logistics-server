import { AreasService } from './areas.service';
import { AreaDto } from './dto/area.dto';
export declare class AreasController {
    private _areasService;
    constructor(_areasService: AreasService);
    create(area: AreaDto): Promise<AreaDto & import("./entity/area.entity").AreaEntity>;
    readAll(): Promise<import("./entity/area.entity").AreaEntity[]>;
    readByIsoCode(countryCode: any, isoCode: any): Promise<import("./entity/area.entity").AreaEntity>;
    update(countryCode: any, isoCode: any, area: any): Promise<import("typeorm").UpdateResult>;
    delete(countryCode: any, isoCode: any): Promise<import("typeorm").DeleteResult>;
}
