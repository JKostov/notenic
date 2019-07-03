import { Injectable } from '@nestjs/common';
import { TypeOrmOptionsFactory, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { ConfigService } from '@app/core/config/config.service';

@Injectable()
export class DatabaseService implements TypeOrmOptionsFactory {
  private static readonly MaxPortNumber = 65535;
  private static readonly MinPortNumber = 1;
  private static readonly DefaultPort = 5432;

  constructor(private configService: ConfigService) { }

  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      type: 'postgres',
      port: this.getDatabasePort(),
      host: this.configService.get('POSTGRES_HOST'),
      username: this.configService.get('POSTGRES_USERNAME'),
      password: this.configService.get('POSTGRES_PASSWORD'),
      database: this.configService.get('POSTGRES_DATABASE'),
      synchronize: false,
      entities: [__dirname + '/**/*.entity{.ts,.js}'],
    };
  }

  getDatabasePort(): number {
    const port = this.configService.get('POSTGRES_PORT');
    const numberPort = Number(port);

    if (isNaN(numberPort) || numberPort > DatabaseService.MaxPortNumber || numberPort < DatabaseService.MinPortNumber) {
      return DatabaseService.DefaultPort;
    }

    return numberPort;
  }
}
