import { NgModule } from '@angular/core';
import { NotenicComponent } from './notenic.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { NotenicRoutingModule } from '@notenic/notenic-routing.module';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    SharedModule,
    NotenicRoutingModule,
  ],
  declarations: [
    NotenicComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class NotenicModule { }
