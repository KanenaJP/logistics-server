import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { StatusDto } from './dto/status.dto';
import { StatusEntity } from './entity/status.entity';

@Injectable()
export class StatusesService {
  constructor(
    @InjectRepository(StatusEntity)
    private _statusesRepository: Repository<StatusEntity>
  ) { }

  create(status: StatusDto) {
    return this._statusesRepository.save(status);
  }

  readAll() {
    return this._statusesRepository.find();
  }

  readByStatusId(statusId: number) {
    return this._statusesRepository.findOneBy({ id: statusId });
  }

  update(statusId: number, status: StatusDto) {
    return this._statusesRepository.update({ id: statusId }, status);
  }

  delete(statusId: number) {
    return this._statusesRepository.delete({ id: statusId });
  }
}
