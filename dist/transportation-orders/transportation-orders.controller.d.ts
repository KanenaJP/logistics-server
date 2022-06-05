import { TransportationOrderDto } from './dto/transportation-order.dto';
import { TransportationOrdersService } from './transportation-orders.service';
export declare class TransportationOrdersController {
    private _transportationOrdersService;
    constructor(_transportationOrdersService: TransportationOrdersService);
    create(transportationOrder: TransportationOrderDto): Promise<TransportationOrderDto & import("./entity/transportation-orders.entity").TransportationOrderEntity>;
    readAll(): Promise<import("./entity/transportation-orders.entity").TransportationOrderEntity[]>;
    readByTransportationOrderId(transportationOrderId: any): Promise<import("./entity/transportation-orders.entity").TransportationOrderEntity>;
    update(transportationOrderId: any, transportationOrder: any): Promise<import("typeorm").UpdateResult>;
    delete(transportationOrderId: any): Promise<import("typeorm").DeleteResult>;
}
