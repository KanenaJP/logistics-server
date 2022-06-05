import { Repository } from 'typeorm';
import { CounterpartyDto } from './dto/counterparty.dto';
import { CounterpartyEntity } from './entity/counterparty.entity';
export declare class CounterpartiesService {
    private _counterpartiesRepository;
    constructor(_counterpartiesRepository: Repository<CounterpartyEntity>);
    create(counterpatry: CounterpartyDto): Promise<CounterpartyDto & CounterpartyEntity>;
    readAll(): Promise<CounterpartyEntity[]>;
    readById(id: number): Promise<CounterpartyEntity>;
    update(id: number, counterpatry: CounterpartyDto): Promise<import("typeorm").UpdateResult>;
    delete(id: number): Promise<import("typeorm").DeleteResult>;
}
