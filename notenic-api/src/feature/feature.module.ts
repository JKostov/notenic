import { Module } from '@nestjs/common';
import { NotesModule } from '@notes/notes.module';

@Module({
  imports: [NotesModule],
  exports: [NotesModule],
})
export class FeatureModule {}
