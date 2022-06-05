import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';
export declare class UsersService {
    private _usersRepository;
    constructor(_usersRepository: Repository<UserEntity>);
    create(user: UserDto): Promise<UserDto & UserEntity>;
    readAll(): Promise<UserEntity[]>;
    readByUserId(userId: number): Promise<UserEntity>;
    readByLogin(login: string): Promise<UserEntity>;
    update(userId: number, user: UserDto): Promise<import("typeorm").UpdateResult>;
    delete(userId: number): Promise<import("typeorm").DeleteResult>;
}
