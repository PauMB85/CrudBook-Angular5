import { Component, OnInit } from '@angular/core';
import {BookService} from '../../services/book/book.service';
import {Book} from '../../model/book';
import {Router} from '@angular/router';

@Component({
  selector: 'app-list-all-books',
  templateUrl: './list-all-books.component.html',
  styleUrls: ['./list-all-books.component.css']
})
export class ListAllBooksComponent implements OnInit {

  bookList: Array<Book> = [];
  constructor(private bookService: BookService, private router: Router) { }

  ngOnInit() {
    this.getAllBooks();
  }

  deleteBook(id: String) {
    const index = this.bookList.findIndex(x => x.id === id);
    this.bookList.splice(index, 1);
    this.bookService.delete(id)
      .subscribe(() => {
        this.getAllBooks();
      });
  }

  updateBook(id: String) {
    this.router.navigate(['/updateBook', id]);
  }

  private getAllBooks() {
    this.bookService.getAll()
      .subscribe(listBooks => {
        this.bookList = listBooks;
      });
  }

}
