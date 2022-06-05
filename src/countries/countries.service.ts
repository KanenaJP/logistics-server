import { Injectable } from '@nestjs/common';
import { CountryDto } from './dto/country.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { CountryEntity } from './entity/country.entity';
import { Repository } from 'typeorm';

@Injectable()
export class CountriesService {
  constructor(
    @InjectRepository(CountryEntity)
    private _counrtyRepository: Repository<CountryEntity>
  ) { }

  create(country: CountryDto) {
    return this._counrtyRepository.save(country);
  }

  readAll() {
    return this._counrtyRepository.find();
  }

  readByIsoCode(isoCode: number) {
    return this._counrtyRepository.findOneBy({ isoCode });
  }

  update(isoCode: number, country: CountryDto) {
    return this._counrtyRepository.update({ isoCode }, country);
  }

  delete(isoCode: number) {
    return this._counrtyRepository.delete({ isoCode });
  }
}
