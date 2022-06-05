import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { TransportationOrderDto } from './dto/transportation-order.dto';
import { TransportationOrdersService } from './transportation-orders.service';

@Controller('api/transportation-orders')
export class TransportationOrdersController {
  constructor(private _transportationOrdersService: TransportationOrdersService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() transportationOrder: TransportationOrderDto) {
    return this._transportationOrdersService.create(transportationOrder);
  }

  @Get('/read/all')
  readAll() {
    return this._transportationOrdersService.readAll();
  }

  @Get('/read/:transportationOrderId')
  readByTransportationOrderId(@Param('transportationOrderId') transportationOrderId) {
    return this._transportationOrdersService.readByTransportationOrderId(transportationOrderId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:transportationOrderId')
  update(@Param('transportationOrderId') transportationOrderId, @Body() transportationOrder) {
    return this._transportationOrdersService.update(transportationOrderId, transportationOrder);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:transportationOrderId')
  delete(@Param('transportationOrderId') transportationOrderId) {
    return this._transportationOrdersService.delete(transportationOrderId);
  }
}
