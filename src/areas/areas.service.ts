import { Injectable } from '@nestjs/common';
import { AreaEntity } from './entity/area.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AreaDto } from './dto/area.dto';

@Injectable()
export class AreasService {
  constructor(
    @InjectRepository(AreaEntity)
    private _areasRepository: Repository<AreaEntity>
  ) { }

  create(area: AreaDto) {
    return this._areasRepository.save(area);
  }

  readAll() {
    return this._areasRepository.find();
  }

  readByIsoCode(countryCode:number, isoCode: number) {
    return this._areasRepository.findOneBy({ countryCode, isoCode });
  }

  update(countryCode: number, isoCode: number, area: AreaDto) {
    return this._areasRepository.update({ countryCode, isoCode }, area);
  }

  delete(countryCode: number, isoCode: number) {
    return this._areasRepository.delete({ countryCode, isoCode });
  }
}
