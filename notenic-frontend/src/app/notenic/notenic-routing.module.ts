import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotenicComponent } from '@notenic/notenic.component';
import { RegisterComponent } from '@notenic/auth/register/register.component';
import { LoggedGuard } from '@notenic/services/auth/logged.guard';
import { AuthGuard } from '@notenic/services/auth/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: NotenicComponent,
    // canActivate: [AuthGuard],
    children: [
      {
        path: 'register',
        component: RegisterComponent,
        canActivate: [LoggedGuard],
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotenicRoutingModule { }
