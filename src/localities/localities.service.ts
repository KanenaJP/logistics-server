import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LocalityDto } from './dto/locality.dto';
import { LocalityEntity } from './entity/locality.entity';

@Injectable()
export class LocalitiesService {
  constructor(
    @InjectRepository(LocalityEntity)
    private _localitiesRepository: Repository<LocalityEntity>
  ) { }

  create(locality: LocalityDto) {
    return this._localitiesRepository.save(locality);
  }

  readAll() {
    return this._localitiesRepository.find();
  }

  readByIsoCode(countryCode: number, areaCode: number, isoCode: number) {
    return this._localitiesRepository.findOneBy({ countryCode, areaCode, isoCode });
  }

  update(countryCode: number, areaCode: number, isoCode: number, locality: LocalityDto) {
    return this._localitiesRepository.update({ countryCode, areaCode, isoCode }, locality);
  }

  delete(countryCode: number, areaCode: number, isoCode: number) {
    return this._localitiesRepository.delete({ countryCode, areaCode, isoCode });
  }
}
