import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AboutComponent } from './feature/about/about.component';
import { TodolistComponent } from './feature/todolist/todolist.component';
import { EllipsisPipe } from './pipes/ellipsis.pipe';
import { ModalComponent } from './shared/modal/modal.component';

const appRoutes: Routes = [
  { path: '', component: TodolistComponent },
  { path: 'about', component: AboutComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    AboutComponent,
    TodolistComponent,
    EllipsisPipe,
    ModalComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
