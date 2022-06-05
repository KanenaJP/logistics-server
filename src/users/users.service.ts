import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UserDto } from './dto/user.dto';
import { UserEntity } from './entity/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(UserEntity)
    private _usersRepository: Repository<UserEntity>
  ) { }

  create(user: UserDto) {
    return this._usersRepository.save(user);
  }

  readAll() {
    return this._usersRepository.find();
  }

  readByUserId(userId: number) {
    return this._usersRepository.findOneBy({ id: userId });
  }

  readByLogin(login: string) {
    return this._usersRepository.findOneBy({ login });
  }

  update(userId: number, user: UserDto) {
    return this._usersRepository.update({ id: userId }, user);
  }

  delete(userId: number) {
    return this._usersRepository.delete({ id: userId });
  }
}
