import { Body, Controller, Delete, Get, Param, Patch, Post, UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from 'src/auth/jwt-auth.guard';
import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';

@Controller('api/users')
export class UsersController {
  constructor(private _usersService: UsersService) {  }

  
  @Post('/create')
  create(@Body() user: UserDto) {
    return this._usersService.create(user);
  }

  @Get('/read/all')
  readAll() {
    return this._usersService.readAll();
  }

  @Get('/read/:userId')
  readByTransportationOrderId(@Param('userId') userId) {
    return this._usersService.readByUserId(userId);
  }

  @UseGuards(JwtAuthGuard)
  @Patch('/update/:userId')
  update(@Param('userId') userId, @Body() user) {
    return this._usersService.update(userId, user);
  }

  @UseGuards(JwtAuthGuard)
  @Delete('/delete/:userId')
  delete(@Param('userId') userId) {
    return this._usersService.delete(userId);
  }
}
