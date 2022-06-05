import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TypeCounterpartyEntity } from './entity/type-counterparty.entity';
import { TypeCounterpartiesController } from './type-counterparties.controller';
import { TypeCounterpartiesService } from './type-counterparties.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      TypeCounterpartyEntity
    ])
  ],
  controllers: [TypeCounterpartiesController],
  providers: [TypeCounterpartiesService]
})
export class TypeCounterpartiesModule {}
