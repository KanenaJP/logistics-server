import { StatusesService } from './statuses.service';
export declare class StatusesController {
    private _statusesService;
    constructor(_statusesService: StatusesService);
    create(status: any): Promise<import("./dto/status.dto").StatusDto & import("./entity/status.entity").StatusEntity>;
    readAll(): Promise<import("./entity/status.entity").StatusEntity[]>;
    readByIsoCode(statusId: any): Promise<import("./entity/status.entity").StatusEntity>;
    update(statusId: any, status: any): Promise<import("typeorm").UpdateResult>;
    delete(statusId: any): Promise<import("typeorm").DeleteResult>;
}
