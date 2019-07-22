import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { StoreModule } from '@ngrx/store';
import { createAuthStoreName } from '@notenic/auth/store/auth.state';
import { authReducer } from '@notenic/auth/store/auth.reducer';
import { EffectsModule } from '@ngrx/effects';
import { AuthEffects } from '@notenic/auth/store/auth.effects';
import { SharedModule } from '@app/shared/shared.module';
import { RouterModule } from '@angular/router';


@NgModule({
  imports: [
    SharedModule,
    RouterModule,
    StoreModule.forFeature(createAuthStoreName, authReducer),
    EffectsModule.forFeature([AuthEffects]),
  ],
  declarations: [
    LoginComponent,
    RegisterComponent,
  ],
})
export class AuthModule { }
