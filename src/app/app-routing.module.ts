import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './interceptor/auth.guard';

const routes: Routes = [
  {
    path: 'tasks',
    loadChildren: () => import('./task/task.module').then((value) => value.TaskModule),
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    loadChildren: () =>
      import('./login/login.module').then((value) => value.LoginModule),
      canActivate: [AuthGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
