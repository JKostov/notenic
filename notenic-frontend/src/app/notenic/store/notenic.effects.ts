import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Action } from '@ngrx/store';
import * as notenicActions from './notenic.actions';
import { catchError, map, exhaustMap, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { AuthService } from '@notenic/services/auth/auth.service';

@Injectable({ providedIn: 'root' })
export class NotenicEffects {

  @Effect()
  initRecipesEffect$: Observable<Action> = this.actions$.pipe(
    ofType<notenicActions.InitLogin>(notenicActions.ActionsEnum.InitLogin),
    exhaustMap(() =>
      this.authService.login({ email: 'test@test.com', password: 'asdasd123' }).pipe(
        tap(response => console.log(response)),
        map(response => (new notenicActions.LoginSuccess())),
        catchError(error => of(new notenicActions.LoginFail({ error })))
      )
    )
  );

  constructor(private authService: AuthService, private actions$: Actions) { }
}
