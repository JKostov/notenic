import { Action } from '@ngrx/store';
import { LoginModel, LoginSuccessModel, RegisterModel } from '@notenic/auth/models/index';

export enum ActionsEnum {
  InitLogin = '[Auth] Init login',
  LoginSuccess = '[Auth] Login success',
  LoginFail = '[Auth] Login fail',
  InitRegister = '[Auth] Init register',
  RegisterSuccess = '[Auth] Register success',
  RegisterFail = '[Auth] Register fail',
}

export class InitLogin implements Action {
  readonly type = ActionsEnum.InitLogin;

  constructor(public payload: { loginModel: LoginModel }) { }
}

export class LoginSuccess implements Action {
  readonly type = ActionsEnum.LoginSuccess;

  constructor(public payload: { loginSuccessModel: LoginSuccessModel }) { }
}

export class LoginFail implements Action {
  readonly type = ActionsEnum.LoginFail;

  constructor(public payload: { error: string }) { }
}

export class InitRegister implements Action {
  readonly type = ActionsEnum.InitRegister;

  constructor(public payload: { registerModel: RegisterModel}) { }
}

export class RegisterSuccess implements Action {
  readonly  type = ActionsEnum.RegisterSuccess;
}

export class RegisterFail implements Action {
  readonly type = ActionsEnum.RegisterFail;

  constructor(public payload: { error: string }) { }
}

export type AuthActions = InitLogin
  | LoginSuccess
  | LoginFail
  | InitRegister
  | RegisterSuccess
  | RegisterFail
;
