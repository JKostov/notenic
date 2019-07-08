import { Module } from '@nestjs/common';
import { DatabaseModule } from '@notes/database/database.module';

@Module({
  imports: [DatabaseModule],
})
export class NotesModule {}
