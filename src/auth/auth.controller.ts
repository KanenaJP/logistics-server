import { Body, Controller, Post, Req, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

@Controller('api/auth')
export class AuthController {
  constructor(private _authService: AuthService) {}

  @Post('login')
  async login(@Body() user) {
    return this._authService.login(user);
  }
}
