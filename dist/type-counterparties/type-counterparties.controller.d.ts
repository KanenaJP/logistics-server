import { TypeCounterpartiesService } from './type-counterparties.service';
export declare class TypeCounterpartiesController {
    private _typeConterpartiesService;
    constructor(_typeConterpartiesService: TypeCounterpartiesService);
    create(typeConterparty: any): Promise<import("./dto/type-counterparty.dto").TypeCounterpartyDto & import("./entity/type-counterparty.entity").TypeCounterpartyEntity>;
    readAll(): Promise<import("./entity/type-counterparty.entity").TypeCounterpartyEntity[]>;
    readByIsoCode(typeConterpartyId: any): Promise<import("./entity/type-counterparty.entity").TypeCounterpartyEntity>;
    update(typeConterpartyId: any, typeConterparty: any): Promise<import("typeorm").UpdateResult>;
    delete(typeConterpartyId: any): Promise<import("typeorm").DeleteResult>;
}
