import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { StatusesService } from './statuses.service';

@Controller('api/statuses')
export class StatusesController {
  constructor(private _statusesService: StatusesService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() status) {
    return this._statusesService.create(status);
  }

  @Get('/read/all')
  readAll() {
    return this._statusesService.readAll();
  }

  @Get('/read/:statusId')
  readByIsoCode(@Param('statusId') statusId) {
    return this._statusesService.readByStatusId(statusId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:statusId')
  update(@Param('statusId') statusId, @Body() status) {
    return this._statusesService.update(statusId, status);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:statusId')
  delete(@Param('statusId') statusId) {
    return this._statusesService.delete(statusId);
  }
}
