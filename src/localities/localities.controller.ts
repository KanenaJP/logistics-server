import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { LocalitiesService } from './localities.service';

@Controller('api/localities')
export class LocalitiesController {
  constructor(private _localitiesService: LocalitiesService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() area) {
    return this._localitiesService.create(area);
  }

  @Get('/read/all')
  readAll() {
    return this._localitiesService.readAll();
  }

  @Get('/read/:countryCode/:areaCode/:localityCode')
  readByIsoCode(@Param('countryCode') countryCode, @Param('areaCode') areaCode, @Param('localityCode') isoCode) {
    return this._localitiesService.readByIsoCode(countryCode, areaCode, isoCode);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:countryCode/:areaCode/:localityCode')
  update(@Param('countryCode') countryCode, @Param('areaCode') areaCode, @Param('localityCode') isoCode, @Body() locality) {
    return this._localitiesService.update(countryCode, areaCode, isoCode, locality);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:countryCode/:areaCode/:localityCode')
  delete(@Param('countryCode') countryCode, @Param('areaCode') areaCode, @Param('localityCode') isoCode) {
    return this._localitiesService.delete(countryCode, areaCode, isoCode);
  }
}
