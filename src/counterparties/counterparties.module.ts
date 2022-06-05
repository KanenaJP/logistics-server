import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CounterpartiesController } from './counterparties.controller';
import { CounterpartiesService } from './counterparties.service';
import { CounterpartyEntity } from './entity/counterparty.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      CounterpartyEntity
    ])
  ],
  controllers: [CounterpartiesController],
  providers: [CounterpartiesService]
})
export class CounterpartiesModule {}
