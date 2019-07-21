import { Module } from '@nestjs/common';
import { DatabaseModule } from '@auth/database/database.module';
import { UserModule } from '@auth/user/user.module';
import { AuthController } from '@auth/auth.controller';
import { SharedModule } from '@app/shared/shared.module';
import { TokenModule } from '@auth/token/token.module';

@Module({
  imports: [
    SharedModule,
    DatabaseModule,
    UserModule,
    TokenModule,
  ],
  controllers: [AuthController],

  exports: [TokenModule],
})
export class AuthModule {}
