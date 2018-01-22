import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {BookService} from './services/book/book.service';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './commons/errors/app-error-handler';
import { FormBookComponent } from './components/form-book/form-book.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HomeComponent } from './components/home/home.component';
import {AppRoutingModule} from './app-routing.module';
import {NotFoundComponent} from './components/notfound/notfound.component';
import { ListAllBooksComponent } from './components/list-all-books/list-all-books.component';


@NgModule({
  declarations: [
    AppComponent,
    FormBookComponent,
    NavbarComponent,
    HomeComponent,
    NotFoundComponent,
    ListAllBooksComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [
    BookService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
