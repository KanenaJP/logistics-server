import { UserDto } from './dto/user.dto';
import { UsersService } from './users.service';
export declare class UsersController {
    private _usersService;
    constructor(_usersService: UsersService);
    create(user: UserDto): Promise<UserDto & import("./entity/user.entity").UserEntity>;
    readAll(): Promise<import("./entity/user.entity").UserEntity[]>;
    readByTransportationOrderId(userId: any): Promise<import("./entity/user.entity").UserEntity>;
    update(userId: any, user: any): Promise<import("typeorm").UpdateResult>;
    delete(userId: any): Promise<import("typeorm").DeleteResult>;
}
