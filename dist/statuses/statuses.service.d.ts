import { Repository } from 'typeorm';
import { StatusDto } from './dto/status.dto';
import { StatusEntity } from './entity/status.entity';
export declare class StatusesService {
    private _statusesRepository;
    constructor(_statusesRepository: Repository<StatusEntity>);
    create(status: StatusDto): Promise<StatusDto & StatusEntity>;
    readAll(): Promise<StatusEntity[]>;
    readByStatusId(statusId: number): Promise<StatusEntity>;
    update(statusId: number, status: StatusDto): Promise<import("typeorm").UpdateResult>;
    delete(statusId: number): Promise<import("typeorm").DeleteResult>;
}
