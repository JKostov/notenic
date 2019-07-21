import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from '@auth/user/user.entity';
import { DatabaseFactory } from '@auth/database/database.factory';

@Module({
  imports: [
    TypeOrmModule.forFeature([User], DatabaseFactory.connectionName),
  ],
  providers: [{
    provide: 'IUserService',
    useClass: UserService,
  }],
  exports: ['IUserService'],
})
export class UserModule {}
