import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseService } from './database.service';
import { CoreModule } from '@app/core/core.module';

@Module({
  imports: [TypeOrmModule.forRootAsync({
    imports: [CoreModule],
    useClass: DatabaseService,
  })],
})
export class DatabaseModule { }
