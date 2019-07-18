import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotenicComponent } from '@notenic/notenic.component';
import { LoginComponent } from '@notenic/login/login.component';

const routes: Routes = [
  {
    path: '',
    component: NotenicComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
