import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AreasController } from './areas.controller';
import { AreasService } from './areas.service';
import { AreaEntity } from './entity/area.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([AreaEntity])
  ],
  controllers: [AreasController],
  providers: [AreasService]
})
export class AreasModule {}
