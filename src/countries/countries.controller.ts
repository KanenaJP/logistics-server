import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { CountriesService } from './countries.service';
import { CountryDto } from './dto/country.dto';

@Controller('api/countries')
export class CountriesController {
  constructor(private _countriesService: CountriesService) {  }

  @UseGuards(JwtAuthGuard)
  @Post('/create')
  create(@Body() county: CountryDto) {
    return this._countriesService.create(county);
  }

  @Get('/read/all')
  readAll() {
    return this._countriesService.readAll();
  }

  @Get('/read/:isoCode')
  readByIsoCode(@Param('isoCode') isoCode) {
    return this._countriesService.readByIsoCode(isoCode);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:isoCode')
  update(@Param('isoCode') isoCode, @Body() country) {
    return this._countriesService.update(isoCode, country);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:isoCode')
  delete(@Param('isoCode') isoCode) {
    return this._countriesService.delete(isoCode);
  }
}
