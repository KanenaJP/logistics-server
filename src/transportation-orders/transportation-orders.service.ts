import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TransportationOrderDto } from './dto/transportation-order.dto';
import { TransportationOrderEntity } from './entity/transportation-orders.entity';

@Injectable()
export class TransportationOrdersService {
  constructor(
    @InjectRepository(TransportationOrderEntity)
    private _transportationOrdersRepository: Repository<TransportationOrderEntity>
  ) { }

  create(transportationOrder: TransportationOrderDto) {
    return this._transportationOrdersRepository.save(transportationOrder);
  }

  readAll() {
    return this._transportationOrdersRepository.find();
  }

  readByTransportationOrderId(transportationOrderId: number) {
    return this._transportationOrdersRepository.findOneBy({ id: transportationOrderId });
  }

  update(transportationOrderId: number, transportationOrder: TransportationOrderDto) {
    return this._transportationOrdersRepository.update({ id: transportationOrderId }, transportationOrder);
  }

  delete(transportationOrderId: number) {
    return this._transportationOrdersRepository.delete({ id: transportationOrderId });
  }
}
