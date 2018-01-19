import { BrowserModule } from '@angular/platform-browser';
import {ErrorHandler, NgModule} from '@angular/core';


import { AppComponent } from './app.component';
import {BookService} from './services/book/book.service';
import {HttpClientModule} from '@angular/common/http';
import {AppErrorHandler} from './commons/errors/app-error-handler';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [
    BookService,
    { provide: ErrorHandler, useClass: AppErrorHandler}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
