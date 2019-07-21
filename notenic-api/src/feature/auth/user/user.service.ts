import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { User } from '@auth/user/user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { DatabaseFactory } from '@auth/database/database.factory';
import { IUserService } from '@auth/user/interfaces/user.service.interface';
import { AbstractService } from '@app/shared/types/abstract.service';

@Injectable()
export class UserService extends AbstractService<User> implements IUserService {
  constructor(@InjectRepository(User, DatabaseFactory.connectionName) usersRepository: Repository<User>) {
    super(usersRepository);
  }

  async getOneByEmail(email: string): Promise<User> {
    return await this.repository.findOne({ where: { email } });
  }

  async getOneByUsername(username: string): Promise<User> {
    return await this.repository.findOne({ where: { username } });
  }

  async create(user: User): Promise<User> {
    const existing = await this.repository.createQueryBuilder('u')
      .where('u.email = :email', { email: user.email })
      .orWhere('u.username = :username', { username: user.username })
      .getOne();

    if (existing) {
      const existingUsername = user.username === existing.username;
      throw new HttpException(`${existingUsername ? 'Username' : 'Email address'} alredy taken.`, HttpStatus.BAD_REQUEST);
    }

    return await this.repository.save(user);
  }
}
