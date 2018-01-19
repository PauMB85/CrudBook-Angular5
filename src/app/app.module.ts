import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import { AppComponent } from './app.component';
import {BookService} from './services/book/book.service';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './commons/errors/app-error-handler';
import { FormBookComponent } from './form-book/form-book.component';


@NgModule({
  declarations: [
    AppComponent,
    FormBookComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    BookService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
