import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotenicComponent } from '@notenic/notenic.component';
import { LoginComponent } from '@notenic/auth/login/login.component';
import { LoggedGuard } from '@notenic/services/auth/logged.guard';

const routes: Routes = [
  {
    path: '',
    component: NotenicComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent,
    canActivate: [LoggedGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
