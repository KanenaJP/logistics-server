import { CounterpartiesService } from './counterparties.service';
import { CounterpartyDto } from './dto/counterparty.dto';
export declare class CounterpartiesController {
    private _counterpartiesService;
    constructor(_counterpartiesService: CounterpartiesService);
    create(counterparty: CounterpartyDto): Promise<CounterpartyDto & import("./entity/counterparty.entity").CounterpartyEntity>;
    readAll(): Promise<import("./entity/counterparty.entity").CounterpartyEntity[]>;
    readByIsoCode(counterpartyId: any): Promise<import("./entity/counterparty.entity").CounterpartyEntity>;
    update(counterpartyId: any, counterparty: CounterpartyDto): Promise<import("typeorm").UpdateResult>;
    delete(counterpartyId: any): Promise<import("typeorm").DeleteResult>;
}
