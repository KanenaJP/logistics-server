import { Repository } from 'typeorm';
import { TransportationOrderDto } from './dto/transportation-order.dto';
import { TransportationOrderEntity } from './entity/transportation-orders.entity';
export declare class TransportationOrdersService {
    private _transportationOrdersRepository;
    constructor(_transportationOrdersRepository: Repository<TransportationOrderEntity>);
    create(transportationOrder: TransportationOrderDto): Promise<TransportationOrderDto & TransportationOrderEntity>;
    readAll(): Promise<TransportationOrderEntity[]>;
    readByTransportationOrderId(transportationOrderId: number): Promise<TransportationOrderEntity>;
    update(transportationOrderId: number, transportationOrder: TransportationOrderDto): Promise<import("typeorm").UpdateResult>;
    delete(transportationOrderId: number): Promise<import("typeorm").DeleteResult>;
}
