import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TransportationOrderEntity } from './entity/transportation-orders.entity';
import { TransportationOrdersController } from './transportation-orders.controller';
import { TransportationOrdersService } from './transportation-orders.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TransportationOrderEntity
    ])
  ],
  controllers: [TransportationOrdersController],
  providers: [TransportationOrdersService]
})
export class TransportationOrdersModule {}
