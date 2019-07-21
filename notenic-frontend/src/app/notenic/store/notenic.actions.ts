import { Action } from '@ngrx/store';

export enum ActionsEnum {
  InitLogin = '[Notenic] Init login',
  LoginSuccess = '[Notenic] Init success',
  LoginFail = '[Notenic] Init fail',
}

export class InitLogin implements Action {
  readonly type = ActionsEnum.InitLogin;
}

export class LoginSuccess implements Action {
  readonly type = ActionsEnum.LoginSuccess;
}

export class LoginFail implements Action {
  readonly type = ActionsEnum.LoginFail;

  constructor(public payload: { error: string }) { }
}

export type NotenicActions = InitLogin
  | LoginSuccess
  | LoginFail
;
