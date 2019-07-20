import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NotenicComponent } from '@notenic/notenic.component';
import { RegisterComponent } from '@notenic/register/register.component';

const routes: Routes = [
  {
    path: '',
    component: NotenicComponent,
    children: [
      {
        path: 'register',
        component: RegisterComponent,
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NotenicRoutingModule { }
