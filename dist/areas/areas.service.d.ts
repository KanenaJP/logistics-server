import { AreaEntity } from './entity/area.entity';
import { Repository } from 'typeorm';
import { AreaDto } from './dto/area.dto';
export declare class AreasService {
    private _areasRepository;
    constructor(_areasRepository: Repository<AreaEntity>);
    create(area: AreaDto): Promise<AreaDto & AreaEntity>;
    readAll(): Promise<AreaEntity[]>;
    readByIsoCode(countryCode: number, isoCode: number): Promise<AreaEntity>;
    update(countryCode: number, isoCode: number, area: AreaDto): Promise<import("typeorm").UpdateResult>;
    delete(countryCode: number, isoCode: number): Promise<import("typeorm").DeleteResult>;
}
