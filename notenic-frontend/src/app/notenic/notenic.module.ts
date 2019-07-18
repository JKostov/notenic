import { NgModule } from '@angular/core';
import { NotenicComponent } from './notenic.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    SharedModule,
    RouterModule
  ],
  declarations: [
    NotenicComponent,
    LoginComponent
  ]
})
export class NotenicModule { }
