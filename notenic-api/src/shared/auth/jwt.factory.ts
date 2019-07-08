import {Inject, Injectable} from '@nestjs/common';
import { JwtOptionsFactory, JwtModuleOptions } from '@nestjs/jwt';
import { IConfigService } from '@app/shared/config/interfaces/config.service.interface';

@Injectable()
export class JwtFactory implements JwtOptionsFactory {

  constructor(@Inject('IConfigService') private configService: IConfigService) { }

  createJwtOptions(): JwtModuleOptions {
    return {
      secretOrPrivateKey: this.configService.get('JWT_SECRET_KEY'),
      signOptions: {
        expiresIn: this.configService.get('JWT_EXPIRE_TIME'),
      },
    };
  }
}
