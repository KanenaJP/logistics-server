import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalAuthGuard } from 'src/auth/local-auth.guard';
import { CounterpartiesService } from './counterparties.service';
import { CounterpartyDto } from './dto/counterparty.dto';

@Controller('api/counterparties')
export class CounterpartiesController {
  constructor(private _counterpartiesService: CounterpartiesService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() counterparty: CounterpartyDto) {
    return this._counterpartiesService.create(counterparty);
  }

  @Get('/read/all')
  readAll() {
    return this._counterpartiesService.readAll();
  }

  @Get('/read/:counterpartyId/')
  readByIsoCode(@Param('counterpartyId') counterpartyId) {
    return this._counterpartiesService.readById(counterpartyId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:counterpartyId')
  update(@Param('counterpartyId') counterpartyId, @Body() counterparty: CounterpartyDto) {
    return this._counterpartiesService.update(counterpartyId, counterparty);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:counterpartyId')
  delete(@Param('counterpartyId') counterpartyId) {
    return this._counterpartiesService.delete(counterpartyId);
  }
}
