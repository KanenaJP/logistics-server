import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { LocalityEntity } from './entity/locality.entity';
import { LocalitiesController } from './localities.controller';
import { LocalitiesService } from './localities.service';

@Module({
  imports: [
    TypeOrmModule.forFeature(
      [
        LocalityEntity
      ]
    )
  ],
  controllers: [LocalitiesController],
  providers: [LocalitiesService]
})
export class LocalitiesModule {}
