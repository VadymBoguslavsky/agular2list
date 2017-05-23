import {BrowserModule} from "@angular/platform-browser";
import {NgModule} from "@angular/core";
import {
  ReactiveFormsModule,
  FormsModule,
  FormBuilder,
  FormGroup,
  Validators
} from '@angular/forms';
import {HttpModule} from "@angular/http";
import {AppRoutingModule} from "./app-routing.module";
import {AppComponent} from "./app.component";
import {TaskListComponent} from "./task/task-list.component";
import {TaskShowComponent} from "./task/task-show.component";
import {TaskNewComponent} from "./task/task-new.component";
import {TaskService} from "./task/task.service";
import {HomeComponent} from "./home/home.component";
import {ToolbarComponent} from "./toolbar/toolbar.component";
import {MyDatePickerModule} from "mydatepicker";
import {SortByFieldPipe} from "./task/sort-by-field";
import {FilterByFieldPipe} from "./task/filter-by-field";
import {FlashMessagesModule} from "angular2-flash-messages";
import {RouterModule} from "@angular/router";
import {CommonModule} from "@angular/common";
import { LoginComponent }              from './auth/login';
import { RegistrationComponent }       from './auth/registration';
import { ConfirmEmailComponent }       from './auth/confirm-email';
import { APP_CONFIG, appConfig }      from './app.config';
import { AuthService }                from './auth/auth';
import { AdminComponent }             from './auth/admin';
import { SimpleNotificationsModule } from 'angular2-notifications';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToolbarComponent,
    TaskListComponent,
    TaskShowComponent,
    TaskNewComponent,
    SortByFieldPipe,
    FilterByFieldPipe,
    LoginComponent,
    RegistrationComponent,
    ConfirmEmailComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    HttpModule,
    AppRoutingModule,
    FlashMessagesModule,
    MyDatePickerModule,
    RouterModule,
    SimpleNotificationsModule
  ],
  providers: [TaskService,AuthService,FormBuilder,
    Validators,
    { provide: APP_CONFIG, useFactory: appConfig }],
  bootstrap: [AppComponent]
})
export class AppModule {
}
