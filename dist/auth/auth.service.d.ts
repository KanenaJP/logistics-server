import { JwtService } from '@nestjs/jwt';
import { UserDto } from 'src/users/dto/user.dto';
import { UsersService } from 'src/users/users.service';
export declare class AuthService {
    private _usersService;
    private _jwtService;
    constructor(_usersService: UsersService, _jwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    login(user: UserDto): Promise<{
        access_token: string;
    }>;
}
