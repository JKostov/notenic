import { NgModule } from '@angular/core';
import { NotenicComponent } from './notenic.component';
import { SharedModule } from '@app/shared/shared.module';
import { NotenicRoutingModule } from '@notenic/notenic-routing.module';
import { AuthModule } from '@notenic/auth/auth.module';

@NgModule({
  imports: [
    SharedModule,
    NotenicRoutingModule,
    AuthModule,
  ],
  declarations: [
    NotenicComponent,
  ]
})
export class NotenicModule { }
