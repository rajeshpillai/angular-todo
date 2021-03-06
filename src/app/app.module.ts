import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { TodoService } from './services/todo.service';

import { AppComponent } from './app.component';
import { AboutComponent } from './feature/about/about.component';
import { TodolistComponent } from './feature/todolist/todolist.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { ModalComponent } from './shared/modal/modal.component';
import { TodoformComponent } from './feature/todoform/todoform.component';
import { TodoappComponent } from './feature/todoapp/todoapp.component';
import { LoginComponent } from './feature/login/login.component';
import { DataTableComponent } from './shared/data-table/data-table.component';
import { RegisterComponent } from './feature/register/register.component';

const appRoutes: Routes = [
  { path: '', component: TodoappComponent },
  { path: 'about', component: AboutComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'logout', component: LoginComponent },
  { path: 'filter', component: DataTableComponent },

];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodolistComponent,
    EllipsisPipe,
    ModalComponent,
    TodoformComponent,
    TodoappComponent,
    LoginComponent,
    DataTableComponent,
    RegisterComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule, // Automatically registers with providers.
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
