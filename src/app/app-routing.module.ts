import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {FormBookComponent} from './components/form-book/form-book.component';
import {HomeComponent} from './components/home/home.component';
import {NotFoundComponent} from './components/notfound/notfound.component';
import {ListAllBooksComponent} from './components/list-all-books/list-all-books.component';
import {AddBookComponent} from './components/add-book/add-book.component';
import {UpdateBookComponent} from './components/update-book/update-book.component';

const appRoutes: Routes = [
  { path: 'addBook', component: AddBookComponent },
  { path: 'home', component: HomeComponent},
  { path: 'listBooks', component: ListAllBooksComponent},
  { path: 'updateBook/:id', component: UpdateBookComponent},
  { path: '', redirectTo: '/home', pathMatch: 'full'},
  { path: '**', component: NotFoundComponent }
  ];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutingModule {}
