import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TypeCounterpartiesService } from './type-counterparties.service';

@Controller('api/type-counterparties')
export class TypeCounterpartiesController {
  constructor(private _typeConterpartiesService: TypeCounterpartiesService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() typeConterparty) {
    return this._typeConterpartiesService.create(typeConterparty);
  }

  @Get('/read/all')
  readAll() {
    return this._typeConterpartiesService.readAll();
  }

  @Get('/read/:typeConterpartyId')
  readByIsoCode(@Param('typeConterpartyId') typeConterpartyId) {
    return this._typeConterpartiesService.readByTypeConterpartyId(typeConterpartyId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:typeConterpartyId')
  update(@Param('typeConterpartyId') typeConterpartyId, @Body() typeConterparty) {
    return this._typeConterpartiesService.update(typeConterpartyId, typeConterparty);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:typeConterpartyId')
  delete(@Param('typeConterpartyId') typeConterpartyId) {
    return this._typeConterpartiesService.delete(typeConterpartyId);
  }
}
