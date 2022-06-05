import { Injectable } from '@nestjs/common';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { TypeCounterpartyDto } from './dto/type-counterparty.dto';
import { TypeCounterpartyEntity } from './entity/type-counterparty.entity';

@Injectable()
export class TypeCounterpartiesService {
  constructor(
    @InjectRepository(TypeCounterpartyEntity)
    private _typeConterpartiesRepository: Repository<TypeCounterpartyEntity>
  ) { }

  create(typeConterparty: TypeCounterpartyDto) {
    return this._typeConterpartiesRepository.save(typeConterparty);
  }

  readAll() {
    return this._typeConterpartiesRepository.find();
  }

  readByTypeConterpartyId(statusId: number) {
    return this._typeConterpartiesRepository.findOneBy({ id: statusId });
  }

  update(typeConterpartyId: number, typeConterparty: TypeCounterpartyDto) {
    return this._typeConterpartiesRepository.update({ id: typeConterpartyId }, typeConterparty);
  }

  delete(typeConterpartyId: number) {
    return this._typeConterpartiesRepository.delete({ id: typeConterpartyId });
  }
}
