import { Injectable } from '@nestjs/common';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { ConfigService } from '@app/shared/config/config.service';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {

  constructor(private configService: ConfigService) { }

  createJwtOptions(): JwtModuleOptions {
    return {
      secretOrPrivateKey: this.configService.get('JWT_SECRET_KEY'),
      signOptions: {
        expiresIn: this.configService.get('JWT_EXPIRE_TIME'),
      },
    };
  }
}
