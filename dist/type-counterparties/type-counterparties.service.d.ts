import { Repository } from 'typeorm';
import { TypeCounterpartyDto } from './dto/type-counterparty.dto';
import { TypeCounterpartyEntity } from './entity/type-counterparty.entity';
export declare class TypeCounterpartiesService {
    private _typeConterpartiesRepository;
    constructor(_typeConterpartiesRepository: Repository<TypeCounterpartyEntity>);
    create(typeConterparty: TypeCounterpartyDto): Promise<TypeCounterpartyDto & TypeCounterpartyEntity>;
    readAll(): Promise<TypeCounterpartyEntity[]>;
    readByTypeConterpartyId(statusId: number): Promise<TypeCounterpartyEntity>;
    update(typeConterpartyId: number, typeConterparty: TypeCounterpartyDto): Promise<import("typeorm").UpdateResult>;
    delete(typeConterpartyId: number): Promise<import("typeorm").DeleteResult>;
}
