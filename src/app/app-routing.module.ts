import {NgModule} from "@angular/core";
import {Routes, RouterModule} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {TaskListComponent} from "./task/task-list.component";
import {TaskShowComponent} from "./task/task-show.component";
import {TaskNewComponent} from "./task/task-new.component";
import { LoginComponent }              from './auth/login';
import { RegistrationComponent }       from './auth/registration';
import { ConfirmEmailComponent }       from './auth/confirm-email';
import { AdminComponent }             from './auth/admin';
import { SignedInGuard }               from './auth/guards/signed-in';
import { SignedOutGuard }              from './auth/guards/signed-out';
const routes: Routes = [
  // {path: '', component: HomeComponent, pathMatch: 'full'},
  // {path: 'home', component: HomeComponent},
  // {path: 'tasks', component: TaskListComponent},
  // {path: 'task/new', component: TaskNewComponent},
  // {path: 'tasks/:id', component: TaskShowComponent},
  {
    path: '',
    redirectTo: 'admin',
    pathMatch: 'full'
  },
  {
    path: 'login',
    canActivate: [ SignedInGuard ],
    component: LoginComponent
  },
  {
    path: 'registration',
    canActivate: [ SignedInGuard ],
    component: RegistrationComponent
  },
  {
    path: 'confirm_email',
    canActivate: [ SignedInGuard ],
    component: ConfirmEmailComponent
  },
  {
    path: 'admin',
    component: AdminComponent,
    canActivate: [ SignedOutGuard ],
    children: [
      {
        path: '',
        canActivateChild: [ SignedOutGuard ],
        children: [
          {path: 'tasks', component: TaskListComponent},
          {path: 'tasks/:id', component: TaskShowComponent},
          {path: 'task/new', component: TaskNewComponent},
          {path: '', component: HomeComponent},
        ],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [ SignedInGuard, SignedOutGuard ]
})

export class AppRoutingModule {
}
