import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { StatusEntity } from './entity/status.entity';
import { StatusesController } from './statuses.controller';
import { StatusesService } from './statuses.service';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      StatusEntity
    ])
  ],
  controllers: [StatusesController],
  providers: [StatusesService]
})
export class StatusesModule {}
