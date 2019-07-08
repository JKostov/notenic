import { Module } from '@nestjs/common';
import { ConfigModule } from '@app/shared/config/config.module';
import { AuthModule } from '@app/shared/auth/auth.module';

@Module({
  imports: [ConfigModule, AuthModule],
  exports: [ConfigModule],
})
export class SharedModule {}
