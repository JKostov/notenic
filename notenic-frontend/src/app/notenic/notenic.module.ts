import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { NotenicComponent } from './notenic.component';
import { LoginComponent } from './login/login.component';
import { SharedModule } from '@app/shared/shared.module';
import { NotenicRoutingModule } from '@notenic/notenic-routing.module';
import { RegisterComponent } from './register/register.component';
import { createNotenicStoreName } from '@notenic/store/notenic.state';
import { notenicReducer } from '@notenic/store/notenic.reducer';
import { NotenicEffects } from '@notenic/store/notenic.effects';

@NgModule({
  imports: [
    SharedModule,
    NotenicRoutingModule,
    StoreModule.forFeature(createNotenicStoreName, notenicReducer),
    EffectsModule.forFeature([NotenicEffects]),
  ],
  declarations: [
    NotenicComponent,
    LoginComponent,
    RegisterComponent,
  ]
})
export class NotenicModule { }
