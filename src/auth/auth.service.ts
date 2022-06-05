import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';

@Injectable()
export class AuthService {
  constructor(
    private _usersService: UsersService,
    private _jwtService: JwtService
  ) {}

  async validateUser(username: string, pass: string): Promise<any> {
    const user = await this._usersService.readByLogin(username);
    if (user && user.password === pass) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: UserDto) {
    
    const payload = { username: user.login, sub: user.id };
    return {
      access_token: this._jwtService.sign(payload),
    };
  }
}
