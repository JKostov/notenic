import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthService } from '@app/shared/auth/auth.service';
import { PassportModule } from '@nestjs/passport';
import { ConfigModule } from '@app/shared/config/config.module';
import { JwtFactory } from '@app/shared/auth/jwt.factory';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [ConfigModule],
      useClass: JwtFactory,
    }),
  ],
  providers: [{
    provide: 'IAuthService',
    useClass: AuthService,
  }],
  exports: [PassportModule, 'IAuthService'],
})
export class AuthModule { }
