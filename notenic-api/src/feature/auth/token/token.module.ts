import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { SharedModule } from '@app/shared/shared.module';
import { TokenService } from '@auth/token/token.service';
import { TokenFactory } from '@auth/token/token.factory';
import { UserModule } from '@auth/user/user.module';

@Module({
  imports: [
    PassportModule.register({ defaultStrategy: 'jwt' }),
    JwtModule.registerAsync({
      imports: [SharedModule],
      useClass: TokenFactory,
    }),
    UserModule,
    SharedModule,
  ],
  providers: [{
    provide: 'ITokenService',
    useClass: TokenService,
  }],
  exports: [PassportModule, 'ITokenService'],
})
export class TokenModule {}
