import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as authActions from './auth.actions';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '../../services/auth/auth.service';
import { LoginModel, LoginSuccessModel, RegisterModel } from '@notenic/auth/models/index';
import { HttpErrorResponse } from '@angular/common/http';
import { TokenInterceptor } from '@notenic/services/auth/token-interceptor.service';
import { Router } from '@angular/router';

@Injectable({ providedIn: 'root' })
export class AuthEffects {

  @Effect()
  initloginEffect$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.InitLogin>(authActions.ActionsEnum.InitLogin),
    map((action: authActions.InitLogin) => action.payload.loginModel),
    exhaustMap((loginModel: LoginModel) =>
      this.authService.login(loginModel).pipe(
        map((loginSuccessModel: LoginSuccessModel) => (new authActions.LoginSuccess({loginSuccessModel}))),
        catchError((response: HttpErrorResponse) => of(new authActions.LoginFail({error: response.error.message})))
      )
    )
  );

  @Effect({ dispatch: false })
  loginSuccessRecipesEffect$ = this.actions$.pipe(
    ofType<authActions.LoginSuccess>(authActions.ActionsEnum.LoginSuccess),
    map((action: authActions.LoginSuccess) => action.payload.loginSuccessModel),
    tap(loginSuccessModel => this.router.navigate(['/'])
      && localStorage.setItem(TokenInterceptor.AuthToken, loginSuccessModel.token)),
  );

  @Effect()
  initRegisterEffect$: Observable<Action> = this.actions$.pipe(
    ofType<authActions.InitRegister>(authActions.ActionsEnum.InitRegister),
    map((action: authActions.InitRegister) => action.payload.registerModel),
    exhaustMap((registerModel: RegisterModel) =>
      this.authService.register(registerModel).pipe(
        map(() => (new authActions.RegisterSuccess())),
        catchError((response: HttpErrorResponse) => of(new authActions.RegisterFail({error: response.error.message})))
      )
    )
  );

  @Effect({ dispatch: false })
  registerSuccessRecipesEffect$ = this.actions$.pipe(
    ofType<authActions.RegisterSuccess>(authActions.ActionsEnum.RegisterSuccess),
    tap(() => this.router.navigate(['/login'])),
  );

  constructor(private readonly authService: AuthService, private readonly actions$: Actions, private readonly router: Router) { }
}
