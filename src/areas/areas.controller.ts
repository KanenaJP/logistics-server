import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { AreasService } from './areas.service';
import { AreaDto } from './dto/area.dto';

@Controller('api/areas')
export class AreasController {
  constructor(private _areasService: AreasService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() area: AreaDto) {
    return this._areasService.create(area);
  }

  @Get('/read/all')
  readAll() {
    return this._areasService.readAll();
  }

  @Get('/read/:countryCode/:areaCode')
  readByIsoCode(@Param('countryCode') countryCode, @Param('areaCode') isoCode) {
    return this._areasService.readByIsoCode(countryCode, isoCode);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:countryCode/:areaCode')
  update(@Param('countryCode') countryCode, @Param('areaCode') isoCode, @Body() area) {
    return this._areasService.update(countryCode, isoCode, area);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:countryCode/:areaCode')
  delete(@Param('countryCode') countryCode, @Param('areaCode') isoCode) {
    return this._areasService.delete(countryCode, isoCode);
  }
}
