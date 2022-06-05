import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CounterpartyDto } from './dto/counterparty.dto';
import { CounterpartyEntity } from './entity/counterparty.entity';

@Injectable()
export class CounterpartiesService {
  constructor(
    @InjectRepository(CounterpartyEntity)
    private _counterpartiesRepository: Repository<CounterpartyEntity>
  ) { }

  create(counterpatry: CounterpartyDto) {
    return this._counterpartiesRepository.save(counterpatry);
  }

  readAll() {
    return this._counterpartiesRepository.find();
  }

  readById(id: number) {
    return this._counterpartiesRepository.findOneBy({ id });
  }

  update(id: number, counterpatry: CounterpartyDto) {
    return this._counterpartiesRepository.update({ id }, counterpatry);
  }

  delete(id: number) {
    return this._counterpartiesRepository.delete({ id });
  }
}
